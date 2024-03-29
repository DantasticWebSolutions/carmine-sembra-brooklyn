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
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import ShopPreview from "../../components/LandingPage/ShopPreview";

import background from "../../asset/background.mp4";
import Poster from "../../asset/video-poster.jpg";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("S");
  const [checkedRadio, setCheckedRadio] = useState(false);
  const [disable, setDisable] = useState(true);
  const [max, setMax] = useState(1);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, product._id]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`);
  };

  useEffect(() => {
    dispatch(addToCart(product._id, Number(qty), String(size)));
    console.log(product, Number(qty), String(size));
  }, [qty, size]);

  // const min = 1;

  // size === "XS"
  //   ? (max = product.countInStockXS)
  //   : size === "S"
  //   ? (max = product.countInStockS)
  //   : size === "M"
  //   ? (max = product.countInStockM)
  //   : size === "L"
  //   ? (max = product.countInStockL)
  //   : size === "XL"
  //   ? (max = product.countInStockXL)
  //   : "";

  useEffect(() => {
    if (max > 0 && checkedRadio === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [checkedRadio, size]);

  useEffect(() => {
    if (qty >= max) {
      setQty(max);
    }
  }, [qty, max, size]);

  useEffect(() => {
    if (size === "XS") {
      setMax(product.countInStockXS);
    } else if (size === "S") {
      setMax(product.countInStockS);
    } else if (size === "M") {
      setMax(product.countInStockM);
    } else if (size === "L") {
      setMax(product.countInStockL);
    } else if (size === "XL") {
      setMax(product.countInStockXL);
    }
  }, [size]);

  useEffect(() => {
    if (checkedRadio === true) {
      setDisable(false);
    } else if (checkedRadio === false) {
      setDisable(true);
    }
  }, [checkedRadio]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <div style={{ width: "100vw" }}>
            <div className="video-container">
              <video
                autoPlay={true}
                loop={true}
                controls={false}
                playsInline
                muted
                poster={Poster}
              >
                {" "}
                <source src={background} type="video/mp4" />
              </video>
              <div className="text-box">
                <span className="noselect brooklyn product-screen-title">
                  {product.category}
                </span>
                <span
                  className="noselect sembra product-screen-subtitle"
                  style={{}}
                >
                  By Carmine Sembra Brooklyn
                </span>
              </div>
            </div>
          </div>
          <div className="container-info-img">
            <div className="section-product-image">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                // autoplay={{
                //   delay: 4000,
                //   waitForTransition: true,
                //   disableOnInteraction: false,
                // }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                // speed={1000}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="swiper-product"
              >
                <SwiperSlide className="swiper-slide-product">
                  <Image
                    style={{ maxHeight: "600px" }}
                    src={product.image}
                    alt={product.name}
                    fluid
                  />
                </SwiperSlide>
                {product.image2 ? (
                  <SwiperSlide className="swiper-slide-product">
                    <Image
                      style={{ maxHeight: "600px" }}
                      src={product.image2}
                      alt={product.name}
                      fluid
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )}
                {product.image3 ? (
                  <SwiperSlide className="swiper-slide-product">
                    <Image
                      style={{ maxHeight: "600px" }}
                      src={product.image3}
                      alt={product.name}
                      fluid
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )}
              </Swiper>
            </div>
            <div className="section-product-info" style={{ padding: "30px" }}>
              <div style={{ maxWidth: "600px" }}>
                <ListGroup variant="flush">
                  <span className="motto">
                    When we are outside it's a movie
                  </span>
                  <h3 className="product-title">{product.name}</h3>
                  <p>{product.description}</p>
                </ListGroup>
                <Row>
                  <Row>
                    <Col style={{ marginBottom: "10px" }}>
                      <strong className="product-price">
                        €{product.price}.00
                      </strong>
                    </Col>
                  </Row>

                  <div>
                    <div className="size-buttons">
                      {product.countInStockXS ? (
                        <div>
                          <label>
                            <input type="radio" name="size" />
                            <span
                              className="size-button no select"
                              onClick={() => {
                                setSize("XS");
                                setCheckedRadio(true);
                              }}
                            >
                              XS
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      {product.countInStockS ? (
                        <div>
                          <label>
                            <input type="radio" name="size" />
                            <span
                              className="size-button no select"
                              onClick={() => {
                                setSize("S");
                                setCheckedRadio(true);
                              }}
                            >
                              S
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      {product.countInStockM ? (
                        <div>
                          <label>
                            <input type="radio" name="size" />
                            <span
                              className="size-button no select"
                              onClick={() => {
                                setSize("M");
                                setCheckedRadio(true);
                              }}
                            >
                              M
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      {product.countInStockL ? (
                        <div>
                          <label>
                            <input type="radio" name="size" />
                            <span
                              className="size-button no select"
                              onClick={() => {
                                setSize("L");
                                setCheckedRadio(true);
                              }}
                            >
                              L
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}

                      {product.countInStockXL ? (
                        <div>
                          <label>
                            <input type="radio" name="size" />
                            <span
                              className="size-button no select"
                              onClick={() => {
                                setSize("XL");
                                setCheckedRadio(true);
                              }}
                            >
                              XL
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <Row style={{ paddingRight: "0px" }}>
                    <Col
                      sm={12}
                      md={6}
                      lg={3}
                      style={{
                        paddingBottom: "14px",
                        paddingRight: "0px",
                      }}
                    >
                      <div className="wrapper" style={{ paddingRight: "0px" }}>
                        <button
                          className="plusminus"
                          onClick={() => {
                            if (qty <= 1) {
                              setQty(1);
                            } else {
                              setQty(qty - 1);
                            }
                          }}
                          disabled={disable}
                        >
                          -
                        </button>
                        <Form.Control
                          as="input"
                          className="quantity"
                          type="number"
                          // value={max}
                          value={qty}
                          style={{
                            border: "none",
                            height: "100%",
                            // maxWidth: "50px",
                            textAlign: "center",
                          }}
                          onChange={(e) => {
                            const value = Math.max(
                              1,
                              Math.min(max, Number(e.target.value))
                            );
                            setQty(value);
                          }}
                          disabled={disable}
                        ></Form.Control>
                        <button
                          disabled={disable}
                          className="plusminus"
                          onClick={() => {
                            if (qty >= max) {
                              setQty(max);
                            } else {
                              setQty(qty + 1);
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    </Col>
                    <Col
                      sm={12}
                      md={6}
                      lg={7}
                      xl={6}
                      style={{
                        // maxWidth: "697px",
                        paddingRight: "0",
                      }}
                    >
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block aggiungi-al-carrello"
                        type="button"
                        variant="dark"
                        disabled={disable}
                      >
                        Aggiungi al Carello
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </div>
            </div>
          </div>
          <ShopPreview />
        </>
      )}
    </>
  );
};

export default ProductScreen;
