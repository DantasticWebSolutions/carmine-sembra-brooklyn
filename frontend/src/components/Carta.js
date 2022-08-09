import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";
const Carta = ({ item, loading, error, filterPrice, stockFilter }) => {
  const [column, setColumn] = useState("column");
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item
            .filter((prezzo) => prezzo.price <= filterPrice)
            .filter((stock) => stock.countInStock > stockFilter)
            .map((product) => {
              return (
                <Col key={product._id} sm={6} md={6} lg={4} xl={3} xs={6}>
                  <Product product={product} loading={loading} error={error} />
                </Col>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Carta;
