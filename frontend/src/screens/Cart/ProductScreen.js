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

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  // const [size, setSize] = useState("S");
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  const dispatch = useDispatch();

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
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

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

                  {/* <ListGroup.Item>
                    <Row>
                      <Col>Stato {size}:</Col>
                      {size === "S" ? (
                        <Col>
                          {product.countInStockS > 0
                            ? "S is In Stock"
                            : "S is Out Of Stock"}
                        </Col>
                      ) : (
                        <Col>
                          {product.countInStockM > 0
                            ? "M is In Stock"
                            : "M is Out Of Stock"}
                        </Col>
                      )}
                    </Row>
                  </ListGroup.Item> */}

                  <ListGroup.Item>
                    {/* Insert 1 value in array for each value in count stock */}
                    {/* [1,2,3,4,5,6,7] */}
                    {/* {size === "S" ? (
                      <Row>
                        <Col>Quantità</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStockS).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    ) : size === "M" ? (
                      <Row>
                        <Col>Quantità</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStockM).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    ) : (
                      ""
                    )} */}

                    <Row>
                      <Col>Quantità</Col>
                      <Col>
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
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* <ListGroup.Item>
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
                  </ListGroup.Item> */}

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
                RIMBORSO: Returns must be postmarked: within 15 days of delivery
                for a refund and within 30 days for a Store Credit or Exchange.
                Read our full returns policy.
              </>
            </Col>
          </Row>
          {/* <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
          CUSTOMERS ALSO VIEWed
        </>
      )}
    </main>
  );
};

export default ProductScreen;
