import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import ShopPreview from "../../components/LandingPage/ShopPreview";
import CartItem from "./CartItem";

const CartScreen = ({ match, location, history }) => {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setItems(items);
    }
  }, []);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { qty } = cartItems;
  const { size } = cartItems;
  const { productId } = cartItems;
  const [controllerQty, setcontrollerQty] = useState(qty);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, size));
    }
  }, [dispatch, productId, qty, size]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <main>
      <Row>
        <Col md={8}>
          <h1>Carrello</h1>
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
                <CartItem
                  key={item.product}
                  name={item.name}
                  image={item.image}
                  product={item.product}
                  price={item.price}
                  qty={item.qty}
                  size={item.size}
                  countInStockS={item.countInStockS}
                  countInStockXS={item.countInStockXS}
                  countInStockM={item.countInStockM}
                  countInStockL={item.countInStockL}
                  countInStockXL={item.countInStockXL}
                />
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Totale ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  prodotti
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
                  Procedi al Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <ShopPreview />
    </main>
  );
};

export default CartScreen;
