import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectCreative } from "swiper";
// IMGs
import infoLogo from "../../asset/logo.png";
// React Icons
import { BsWhatsapp, BsTelephone } from "react-icons/bs";

const SwiperLandingPage = () => {
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
      effect={"creative"}
      centeredSlides={true}
      loop={true}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectCreative]}
      grabCursor={true}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="mySwiper5"
    >
      {/* {products.map((product) => (
        <SwiperSlide key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} />
          </Link>
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <div className="swiper-background">
          <div className="info-container">
            <img src={infoLogo} alt="logo" />
            <span className="info-data">20&nbsp;06&nbsp;2022</span>
            <span className="info-giorno">giovedi</span>
            <div className="info-address">Social Club | Brescia</div>
            <div className="info-price">
              Ingresso gratuito fino a mezzanotte
            </div>
            <div className="info-contact-container">
              <BsTelephone />
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-background">
          <div className="info-container">
            <img src={infoLogo} alt="logo" />
            <span className="info-data">20&nbsp;06&nbsp;2022</span>
            <span className="info-giorno">giovedi</span>
            <div className="info-address">Social Club | Brescia</div>
            <div className="info-price">
              Ingresso gratuito fino a mezzanotte
            </div>
            <div className="info-contact-container">
              <BsTelephone />
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-background">
          <div className="info-container">
            <img src={infoLogo} alt="logo" />
            <span className="info-data">20&nbsp;06&nbsp;2022</span>
            <span className="info-giorno">giovedi</span>
            <div className="info-address">Social Club | Brescia</div>
            <div className="info-price">
              Ingresso gratuito fino a mezzanotte
            </div>
            <div className="info-contact-container">
              <BsTelephone />
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperLandingPage;
