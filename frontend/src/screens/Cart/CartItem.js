import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = (props, { history }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (controllerSize === "XS") {
  //     setcontrollerQty();
  //   }
  // }, []);

  const [qty, setQty] = useState(props.qty);
  const [size, setSize] = useState(props.size);
  // const [checkedRadio, setCheckedRadio] = useState(false);
  // const [disable, setDisable] = useState(true);
  // const [max, setMax] = useState(1);

  useEffect(() => {
    if (props.product) {
      dispatch(addToCart(props.product, qty, size));
    }
  }, [dispatch, props.product, qty, size]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <ListGroup.Item key={props.product}>
      <Row>
        <Col
          md={2}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={props.image} alt={props.name} fluid rounded />
        </Col>
        <Col md={3} className="my-2">
          <div
            style={{
              textAlign: "center",
              padding: "0.5rem 0 !important",
            }}
          >
            <Link to={`/product/${props.product}`}>
              <h6 style={{ textTransform: "capitalize" }}>{props.name} </h6>
            </Link>
          </div>
        </Col>
        <Col md={2} className="mb-2">
          <h6 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            €{props.price}
          </h6>
        </Col>
        <div className="d-flex flex-row justify-content-center align-align-items-center ">
          <Col className="m-1 p-0" style={{ maxWidth: "50px" }}>
            <Form.Control
              as="select"
              style={{
                height: "48px",
              }}
              value={qty}
              onChange={(e) => {
                setQty(Number(e.target.value));
                // dispatch(
                //   addToCart(props.product, Number(e.target.value), size)
                // );
              }}
            >
              {size === "XS"
                ? [...Array(props.countInStockXS).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                : size === "S"
                ? [...Array(props.countInStockS).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                : size === "M"
                ? [...Array(props.countInStockM).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                : size === "L"
                ? [...Array(props.countInStockL).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                : size === "XL"
                ? [...Array(props.countInStockXL).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                : [...Array(qty).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
            </Form.Control>
          </Col>
          <Col className="m-1 p-0" style={{ maxWidth: "50px" }}>
            <Form.Control
              style={{
                height: "48px",
              }}
              className="size-options"
              as="select"
              value={size}
              onChange={(e) => {
                setQty(Number(1));
                // dispatch(addToCart(props.product, qty, String(e.target.value)));
                setSize(String(e.target.value));
              }}
            >
              {props.countInStockXS && (
                <option key="XS" value="XS">
                  XS
                </option>
              )}
              {props.countInStockS && (
                <option key="S" value="S">
                  S
                </option>
              )}
              {props.countInStockM && (
                <option key="M" value="M">
                  M
                </option>
              )}
              {props.countInStockL && (
                <option key="L" value="L">
                  L
                </option>
              )}
              {props.countInStockXL && (
                <option key="XL" value="XL">
                  XL
                </option>
              )}
            </Form.Control>
          </Col>

          <Col style={{ maxWidth: "50px" }} className="m-1 p-0">
            <Button
              type="button"
              variant="outline-danger"
              onClick={() => removeFromCartHandler(props.product)}
              style={{
                width: "100%",
                minHeight: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineDelete style={{ fontSize: "1.5rem" }} />
            </Button>
          </Col>
        </div>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
