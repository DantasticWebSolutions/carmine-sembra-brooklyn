import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductSwiper from "../components/Shop/ProductSwiper";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import ProductContainer from "../components/Shop/ProductsContainer";

import Features from "../components/Features";
import ShowColumnOrSingle from "../components/ShowColumnOrSingle";
import Filter from "../components/Filter";

const Shop = ({ match }) => {
  // GET DATA
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(products);

  // FILTER DATA

  // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

  const [item, setItem] = useState(products);
  const menuItems = [...new Set(products.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = products.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  const [filterPrice, setFilterPrice] = useState(100);
  const [stockFilter, setStockFilter] = useState(-1);

  return (
    <>
      <Meta />
      <ProductSwiper />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <main style={{ marginTop: "1rem" }}>
          <Row>
            <Col md={6}>
              <h1 className="text-center">Latest Products</h1>
            </Col>
          </Row>
          <Row>
            <Filter
              setStockFilter={setStockFilter}
              stockFilter={stockFilter}
              setFilterPrice={setFilterPrice}
              filterPrice={filterPrice}
              products={products}
              item={item}
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <ShowColumnOrSingle />

            <ProductContainer
              item={item}
              loading={loading}
              error={error}
              filterPrice={filterPrice}
              stockFilter={stockFilter}
            />
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
          <Features />
        </main>
      )}
    </>
  );
};

export default Shop;
