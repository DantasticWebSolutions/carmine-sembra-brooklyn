import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";

import { Row, Col } from "react-bootstrap";
import Product from "../Product";

const ShopPreview = () => {
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
    <>
      <div className="shop-preview-container">
        <h1>Diventa Membro della Famiglia</h1>
        <p>
          Indossa un indumento Brooklyn durante i nostri eventi e godi subito
          dei vantaggi riservati alla nostra famiglia
        </p>
      </div>
      <div>
        <div className="shopPreview-product-container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
//     (

//   );
// };

export default ShopPreview;
