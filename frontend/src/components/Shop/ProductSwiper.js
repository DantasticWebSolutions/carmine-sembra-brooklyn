import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";

// configure Swiper to use modules

const ProductSwiper = () => {
  // Swiper.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  const schermate = [
    {
      id: "01",
      title: "Questo è il Primo Titolo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident aperiam eveniet eius aspernatur.",
      linkBottone:
        "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      img: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "02",
      title: "Questo è il Secondo Titolo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident aperiam eveniet eius aspernatur.",
      linkBottone:
        "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      img: "https://cdn.shopify.com/s/files/1/0238/8505/files/planet.jpg?v=1619020466",
    },
    {
      id: "03",
      title: "Questo è il Primo Titolo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident aperiam eveniet eius aspernatur.",
      linkBottone:
        "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      img: "https://images.unsplash.com/photo-1627483297929-37f416fec7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      // spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        waitForTransition: true,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      // speed={1000}
      loop={true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper-shop"
    >
      {schermate.map((product) => (
        <SwiperSlide key={product.id}>
          <div
            style={{
              background: `url("${product.img}")`,
            }}
            className="swiper-slide-background"
          >
            <div className="opaco">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Link to={product.linkBottone}>
                <Button variant="dark" className="py-2">
                  Compra Ora
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
