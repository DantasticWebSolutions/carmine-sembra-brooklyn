import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
// import Rating from "../components/Rating";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Meta from "../../components/Meta";
import {
  listProductDetails,
  // createProductReview,
} from "../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import { addToCart } from "../../actions/cartActions";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("S");
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // localStorage.getItem(
  //   //   "cartItems",
  //   //   JSON.stringify(getState().cart.cartItems)
  //   // );

  //   const items = JSON.parse(localStorage.getItem("cartItems"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  // console.log(items);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const productReviewCreate = useSelector((state) => state.productReviewCreate);
  // const {
  //   success: successProductReview,
  //   loading: loadingProductReview,
  //   error: errorProductReview,
  // } = productReviewCreate;

  useEffect(() => {
    // if (successProductReview) {
    //   setRating(0);
    //   setComment("");
    // }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, product._id]);

  const addToCartHandler = () => {
    // history.push(`/cart/${match.params.id}?size=${size}?qty=${qty}`);
    history.push(`/cart/${match.params.id}`);
  };

  useEffect(() => {
    dispatch(addToCart(product._id, Number(qty), String(size)));
    console.log(product, Number(qty), String(size));
  }, [qty, size]);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     createProductReview(match.params.id, {
  //       rating,
  //       comment,
  //     })
  //   );
  // };

  return (
    <main>
      <Link style={{ alignSelf: "left" }} className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item> */}
                {/* <ListGroup.Item>Prezzo: €{product.price}</ListGroup.Item> */}
                <ListGroup.Item>
                  Descrizione: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Prezzo:</Col>
                      <Col>
                        <strong>€{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <div>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                    <ListGroup.Item>
                      <Row>
                        <Col>Size</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                          >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </div>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      variant="dark"
                      disabled={product.countInStock === 0}
                    >
                      Aggiungi al Carello
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </>
            </Col>
          </Row>
        </>
      )}
    </main>
  );
};

export default ProductScreen;

// cartItems
//                       .filter((item) => item.product === product._id)
//                       .map((item) => (
//                         <div>
//                           <ListGroup.Item>
//                             <Row>
//                               <Col className="d-flex align-items-center">
//                                 Quantità
//                               </Col>
//                               <Col>
//                                 <Form.Control
//                                   as="select"
//                                   value={item.qty}
//                                   onChange={(e) =>
//                                     dispatch(
//                                       addToCart(
//                                         item.product,
//                                         Number(e.target.value),
//                                         item.size
//                                       )
//                                     )
//                                   }
//                                 >
//                                   {[...Array(item.countInStock).keys()].map(
//                                     (x) => (
//                                       <option key={x + 1} value={x + 1}>
//                                         {x + 1}
//                                       </option>
//                                     )
//                                   )}
//                                 </Form.Control>
//                               </Col>
//                             </Row>
//                           </ListGroup.Item>

//                           <ListGroup.Item>
//                             <Row>
//                               <Col>Size:</Col>
//                               <Col>
//                                 <Form.Control
//                                   as="select"
//                                   value={item.size}
//                                   onChange={(e) =>
//                                     dispatch(
//                                       addToCart(
//                                         item.product,
//                                         item.qty,
//                                         String(e.target.value)
//                                       )
//                                     )
//                                   }
//                                 >
//                                   <option key="XS" value="XS">
//                                     XS
//                                   </option>
//                                   <option key="S" value="S">
//                                     S
//                                   </option>
//                                   <option key="M" value="M">
//                                     M
//                                   </option>
//                                   <option key="L" value="L">
//                                     L
//                                   </option>
//                                   <option key="XL" value="XL">
//                                     XL
//                                   </option>
//                                 </Form.Control>
//                               </Col>
//                             </Row>
//                           </ListGroup.Item>
//                         </div>
//                       ))
