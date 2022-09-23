import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { AiOutlineDelete } from "react-icons/ai";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  console.log(cartItems);

  return (
    <main>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Il tuo carrello è vuoto{" "}
              <Link to="/">
                {" "}
                <u>Torna Indietro</u>
              </Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3} className="my-2">
                      <div
                        style={{
                          textAlign: "center",
                          padding: "0.5rem 0 !important",
                        }}
                      >
                        <Link to={`/product/${item.product}`}>
                          <h6>{item.name} </h6>
                        </Link>
                      </div>
                    </Col>
                    <Col md={2} className="mb-2">
                      <h6 style={{ textAlign: "center", fontSize: "1.5rem" }}>
                        €{item.price}
                      </h6>
                    </Col>
                    <div className="d-flex flex-row justify-content-center align-align-items-center ">
                      <Col md="8" className="m-1 p-0">
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md="4" className="m-1 p-0">
                        <Button
                          type="button"
                          variant="outline-danger"
                          onClick={() => removeFromCartHandler(item.product)}
                          style={{ width: "100%", minHeight: "48px" }}
                        >
                          <AiOutlineDelete style={{ fontSize: "1.5rem" }} />
                        </Button>
                      </Col>
                    </div>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                €
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  variant="dark"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default CartScreen;
