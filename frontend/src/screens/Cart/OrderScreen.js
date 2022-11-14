import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../../constants/orderConstants";
import emailjs from "@emailjs/browser";

const OrderScreen = ({ match, history }) => {
  const currency = "EUR";
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order, history, userInfo]);
  console.log(order);
  // console.log(userInfo);

  const templateParams = {
    // user_name: order.user.name,
    // user_email: order.user.email,
    // date: ` ${order.createdAt.slice(8, 10)}/${order.createdAt.slice(5, 7)}/
    // ${order.createdAt.slice(0, 4)}`,
    // order_number: order._id,
    // address: `${order.shippingAddress.address}, ${order.shippingAddress.city}
    // ${order.shippingAddress.postalCode},
    // ${order.shippingAddress.country}`,
    // total: order.totalPrice,
  };

  const successPaymentHandler = (paymentResult) => {
    // console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
    emailjs
      .send(
        "service_299obb8",
        "template_qqfvs7f",
        templateParams,
        "user_y1ftUXLPd92Uw3SY8iLtJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <main>
      <Loader />
    </main>
  ) : error ? (
    <main>
      <Message variant="danger">{error}</Message>
    </main>
  ) : (
    <main>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5 style={{ wordBreak: "break-all" }}>{order._id}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Spedizione</h2>

              <p>
                <strong>Data: </strong>
                {order.createdAt.slice(8, 10)}/{order.createdAt.slice(5, 7)}/
                {order.createdAt.slice(0, 4)}
              </p>
              <p>
                <strong>Nome: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Indirizzo: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  {/* 2022-09-23T02:28:15.961Z */}
                  Congratulazioni, abbiamo spedito il tuo ordine il giorno{" "}
                  {order.deliveredAt.slice(8, 10)}/
                  {order.deliveredAt.slice(5, 7)}/
                  {order.deliveredAt.slice(0, 4)}
                  {/* alle ore{" "}
                  {order.deliveredAt.slice(11, 13)}:
                  {order.deliveredAt.slice(14, 16)} */}
                </Message>
              ) : order.isPaid ? (
                <Message variant="danger">
                  Spediremo l'ordine in massimo 3 giorni lavorativi{" "}
                </Message>
              ) : (
                <Message variant="danger">
                  Non ancora spedito, procedi con il pagamento per ricevere
                  l'ordine{" "}
                </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Metodo di pagamento</h2>
              <p>
                <strong>Metodo: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">
                  Benvenuto nella famiglia BROOKLYN, abbiamo ricevuto il tuo
                  pagamento!&nbsp;
                  {order.paidAt.slice(8, 10)}/{order.paidAt.slice(5, 7)}/
                  {order.paidAt.slice(0, 4)}
                  {/* alle ore{" "}
                  {order.paidAt.slice(11, 13)}:{order.paidAt.slice(14, 16)} */}
                </Message>
              ) : (
                <Message variant="danger">
                  Ordine non pagato,{" "}
                  <u>
                    <a href="#paga">puoi procedere al pagamento qui</a>
                  </u>
                </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Prodotti nel carrello</h2>
              {order.orderItems.length === 0 ? (
                <Message>L'ordine è vuoto</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}&nbsp;{item.size}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x €{item.price} = €{item.qty * item.price}
                        </Col>
                        {/* <Col md={4}>SIZE: {item.size}</Col> */}
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Riepilogo</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Prezzo prodotti</Col>
                  <Col>€{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Spedizione</Col>
                  {order.shippingPrice > 0 ? (
                    <Col>€{order.shippingPrice}</Col>
                  ) : (
                    <Col>Gratis</Col>
                  )}
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>€{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Row>
                  <Col>Totale</Col>
                  <Col>€{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item id="paga">
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      currency={currency}
                      // options={{
                      //   currency: currency.toUpperCase(),
                      // }}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Segna come spedito
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default OrderScreen;
