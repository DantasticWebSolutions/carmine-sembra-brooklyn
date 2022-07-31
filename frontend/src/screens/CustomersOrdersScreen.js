import React, { useEffect } from "react";
import { Button, Col, Nav, Row, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { MdDoneOutline } from "react-icons/md";

const CustomersOrdersScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  return (
    <main>
      {" "}
      <Col md={12} className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <h2
            // className="mt-5"
            style={{ textAlign: "center" }}
          >
            My Orders
          </h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : (
            <div
              // striped
              // bordered
              // hover
              // responsive
              className="cardContainer"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* <th scope="col">ID</th>
                  <th scope="col">DATE</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">PAID</th>
                  <th scope="col">DELIVERED</th>
                  <th scope="col"></th> */}

              {orders.map((order) => (
                <div className="card m-2 cardDisplay" key={order._id}>
                  <div class="card-body">
                    <span class="card-title card-header">{order._id}</span>
                    {/* <ListGroup variant="flush">
                      {order.orderItems.map((orderItem, index) => (
                        <ListGroup.Item key={index}>
                          <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col md={3}>
                              <Image
                                src={orderItem.image}
                                alt={orderItem.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${orderItem.product}`}>
                                {orderItem.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {orderItem.qty} x €{orderItem.price} = €
                              {orderItem.qty * orderItem.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup> */}
                    {/* <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {order.orderItems.map((orderItem) => (
                        <img
                          className="card-img"
                          style={{
                            maxWidth: "300px",
                            maxHeight: "255px",
                            marginBottom: "10px",
                          }}
                          src={orderItem.image}
                        />
                      ))}
                    </div> */}
                    <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                      <span>Spedizione</span>
                      <h4>
                        {order.shippingPrice > 0
                          ? `${order.shippingPrice}€`
                          : "Gratis"}
                      </h4>
                    </div>
                    <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                      <span>Prezzo Totale</span>
                      <h2>{order.totalPrice}€</h2>
                    </div>
                    <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                      <span>Data Ordine</span>
                      {/* <h5>{order.createdAt.substring( 0, 10 )}</h5> */}
                      <div>
                        {/* DAY */}
                        <span>{order.createdAt.substring(8, 10)}</span>/
                        {/* MONTH */}
                        <span>{order.createdAt.substring(5, 7)}</span>/
                        {/* YEAR */}
                        <span>{order.createdAt.substring(0, 4)}</span>
                      </div>
                    </div>

                    {order.isPaid ? (
                      <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                        <span>Pagato: </span>
                        <div>
                          <MdDoneOutline
                            className="mr-2"
                            style={{ color: "green" }}
                          />
                          {/* DAY */}
                          <span>{order.paidAt.substring(8, 10)}</span>/
                          {/* MONTH */}
                          <span>{order.paidAt.substring(5, 7)}</span>/
                          {/* YEAR */}
                          <span>{order.paidAt.substring(0, 4)}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                        <span> Pagato: </span>
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      </div>
                    )}

                    {order.isDelivered ? (
                      <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                        <span>Spedito: </span>
                        <div>
                          <MdDoneOutline
                            className="mr-2"
                            style={{ color: "green" }}
                          />
                          {/* DAY */}
                          <span>{order.deliveredAt.substring(8, 10)}</span>/
                          {/* MONTH */}
                          <span>{order.deliveredAt.substring(5, 7)}</span>/
                          {/* YEAR */}
                          <span>{order.deliveredAt.substring(0, 4)}</span>
                          {/* <span>{order.deliveredAt.substring(0, 10)}</span> */}
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex w-100 px-3 flex-row justify-content-between align-items-center">
                        <span>Spedito: </span>
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      </div>
                    )}
                    <div>
                      <Nav.Link href={`/order/${order._id}`} className="mt-3">
                        {/* <Button className="btn-sm" variant="light"> */}
                        <Button class="btn btn-primary" variant="dark">
                          Details
                        </Button>
                        {/* </Button> */}
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
    </main>
  );
};

export default CustomersOrdersScreen;
