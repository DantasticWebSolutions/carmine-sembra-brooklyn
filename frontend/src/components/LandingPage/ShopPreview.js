import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";

// import Product from "../Product";
// import Prodotto from "../Prodotto";
import ProductsSwiper from "./ProductsSwiper";

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
          <ProductsSwiper item={products} filterPrice="100" />
          {/* {products.map((product) => (
            <Prodotto key={product._id} product={product} />
            // <Product key={product._id} product={product} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default ShopPreview;
