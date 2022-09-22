import React, { useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import Product from "../Product";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, A11y, Controller, Thumbs, Autoplay]);

const ProductsSwiper = ({ item, loading, error, filterPrice, stockFilter }) => {
  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Swiper
            className="swiper background"
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            controller={{ control: controlledSwiper }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 768px
              800: {
                width: 800,
                slidesPerView: 2,
              },
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
            }}
          >
            {item
              .filter((prezzo) => prezzo.price <= filterPrice)
              // .filter((stock) => stock.countInStockS > stockFilter)
              .map((product) => {
                return (
                  <SwiperSlide
                    className="swiperSlide"
                    key={product._id}
                    style={{ paddingBottom: "20px" }}
                  >
                    {/* <Col key={product._id} sm={6} md={6} lg={4} xl={3} xs={6}> */}
                    <Product
                      product={product}
                      loading={loading}
                      error={error}
                    />
                    {/* </Col> */}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductsSwiper;
