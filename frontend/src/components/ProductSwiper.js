import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

const ProductSwiper = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className='mySwiper'>
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (€{product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
