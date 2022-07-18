import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 mx-1 p-3 rounded prodotto">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body className="card-body">
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Card.Text as="h3">€{product.price}</Card.Text>
        <Link to={`/product/${product._id}`}>
          <div className="module-border-wrap">
            <div className="secondaryButton">
              <span>Compra</span>
            </div>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
