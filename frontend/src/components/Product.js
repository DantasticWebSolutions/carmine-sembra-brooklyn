import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import Rating from "./Rating";
import { BsBag } from "react-icons/bs";
import Message from "../components/Message";
import Loader from "./Loader";

const Product = ({ product, loading, error }) => {
  console.log(product);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Card
            className="my-3 mx-1 p-0 rounded prodotto d-flex flex-column justify-content-center"
            style={{
              flex: "0 0 30%",
              border: "none",
            }}
            // style={{ height: "400px" }}
          >
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <div
                className="d-flex flex-column justify-content-center"
                // to={`/product/${product._id}`}
                // style={{ minHeight: "50%" }}
              >
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  <Card.Img src={product.image} variant="top" />
                )}

                <Card.Body
                  style={{
                    backgroundColor: "rgb(244, 242, 244)",
                    // paddingTop: "100px",
                  }}
                  // style={{ minHeight: "50%" }}
                  className="d-flex flex-column justify-content-center text-left rounded"
                >
                  <div className="category">{product.category}</div>
                  <Card.Title
                    as="p"
                    className="mt-1 w-100"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "700",
                    }}
                  >
                    {product.name}
                  </Card.Title>

                  {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

                  <Card.Text
                    as="div"
                    className="w-100"
                    style={{
                      marginBottom: "0px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                      }}
                    >
                      {product.description}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      €{product.price}
                    </p>
                  </Card.Text>
                  {/* <Card.Text as="p">€{product.price}</Card.Text> */}
                </Card.Body>
              </div>
            )}
          </Card>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-15px" }}
          >
            <Link
              to={`/product/${product._id}`}
              className="text-center align-self-center"
              style={{
                fontSize: "14px",
                marginTop: "-20px",
                // width: "100px",
                border: "2px solid rgb(244, 242, 244)",
                borderRadius: "50px",
                padding: "10px 15px",
                background: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1",
              }}
            >
              {product.countInStock === 0 ? (
                <span
                  style={{
                    color: "rgb(203, 203, 203)",
                    // fontSize: "0.7rem"
                  }}
                >
                  Indisponibile
                </span>
              ) : (
                <>
                  <BsBag className="mr-2 ml-2" />
                  <span className="pr-2">Aggiungi</span>
                </>
              )}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
