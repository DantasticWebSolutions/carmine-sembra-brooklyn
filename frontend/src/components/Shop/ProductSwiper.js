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
import slider1 from "../../asset/slider/slider1.jpg";
import slider2 from "../../asset/slider/slider2.jpg";
import slider3 from "../../asset/slider/slider3.jpg";

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
      img: slider1,
    },
    {
      id: "02",
      title: "Questo è il Secondo Titolo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident aperiam eveniet eius aspernatur.",
      linkBottone:
        "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      img: slider2,
    },
    {
      id: "03",
      title: "Questo è il Primo Titolo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident aperiam eveniet eius aspernatur.",
      linkBottone:
        "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      img: slider3,
    },
  ];
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error } = productTopRated;

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
        <SwiperSlide key={product.id} className="swiper-slide-contenitor">
          <div
            style={{
              background: `url("${product.img}")`,
            }}
            className="swiper-slide-background"
          >
            &nbsp;
          </div>
          <div className="swiper-slide-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link to={product.linkBottone}>
              <Button variant="dark" className="py-2">
                Compra Ora
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
