import React from "react";
import Product from "../Product";
import { Col } from "react-bootstrap";

const Carta = ({ item, loading, error, filterPrice, stockFilter }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item
            .filter((prezzo) => prezzo.price <= filterPrice)
            // .filter((stock) => stock.countInStockS > stockFilter)
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