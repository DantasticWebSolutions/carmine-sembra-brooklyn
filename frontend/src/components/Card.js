import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({ product, deleteHandler }) => {
  return (
    <div className="card m-2 cardDisplay" key={product._id}>
      <div className="card-body">
        {product.image && (
          <Link
            to={`/product/${product._id}`}
            // style={{ minHeight: "50%" }}
          >
            <img
              alt={product.name ? product.name : product.title}
              className="card-img"
              // style={{
              //   maxWidth: "50%",
              //   maxHeight: "50%",
              // }}
              src={product.image}
            />
          </Link>
        )}
        <div className="card-title card-header w-100 text-center text-capitalize">
          {product.name ? product.name : product.title}
        </div>
        <h2>{product.price && `${product.price}€`}</h2>
        <div>{product.category && product.category}</div>
        <span>{product.brand && product.brand}</span>
        {product.day && (
          <div>
            <div className="date-display">
              <span className="mr-2">{product.day}</span>
              <span className="mr-2">{product.month}</span>

              {product.year && <span>{product.year}</span>}
            </div>
            <span>{product.address}</span>
          </div>
        )}
        {product.email && (
          <div className="w-100 text-center">
            <div>
              <a href={`mailto:${product.email}`}>{product.email}</a>
            </div>
            <div>
              <span>Is Admin: </span>
              {product.isAdmin ? (
                <BsCheckCircleFill style={{ color: "green" }} />
              ) : (
                <AiFillCloseCircle style={{ color: "red" }} />
              )}
            </div>
          </div>
        )}
        <div className="d-flex flex-row justify-content-center my-2">
          {product.description ? (
            <Nav.Link
              href={`/admin/product/${product._id}/edit`}
              className="m-1 mr-2"
            >
              <Button variant="light" className="btn-sm py-1 px-2">
                <span>Modifica</span>
                <i className="fas fa-edit ml-2"></i>
              </Button>
            </Nav.Link>
          ) : product.email ? (
            <Nav.Link
              className="m-1 mr-2"
              href={`/admin/user/${product._id}/edit`}
            >
              <Button variant="light" className="btn-sm py-1 px-2">
                <span>Modifica</span>
                <i className="fas fa-edit ml-2"></i>
              </Button>
            </Nav.Link>
          ) : product.year ? (
            <Nav.Link
              className="m-1 mr-2"
              href={`/admin/fotos/${product._id}/edit`}
            >
              <Button variant="light" className="btn-sm py-1 px-2">
                <span>Modifica</span>
                <i className="fas fa-edit ml-2"></i>
              </Button>
            </Nav.Link>
          ) : product.image2 ? (
            <Nav.Link
              className="m-1 mr-2"
              href={`/admin/event/${product._id}/edit`}
            >
              <Button variant="light" className="btn-sm py-1 px-2">
                <span>Modifica</span>
                <i className="fas fa-edit ml-2"></i>
              </Button>
            </Nav.Link>
          ) : (
            ""
          )}
          <Button
            variant="danger"
            className="btn-sm m-1 py-1 px-2"
            onClick={() => deleteHandler(product._id)}
          >
            <span>Elimina</span>
            <i className="fas fa-trash ml-2"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
