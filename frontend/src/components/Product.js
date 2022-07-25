import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 mx-1 p-0 rounded prodotto"
      // style={{ height: "400px" }}
    >
      <Link to={`/product/${product._id}`} style={{ minHeight: "50%" }}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body
        // style={{ minHeight: "50%" }}
        className="d-flex flex-column justify-content-center p-5 rounded"
      >
        <Card.Title as="div" className="mt-3">
          <strong>{product.name}</strong>
        </Card.Title>

        {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Card.Text as="h3">€{product.price}</Card.Text>
        <Link to={`/product/${product._id}`} className="d-flex">
          <div className="bottone primario">Compra</div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
