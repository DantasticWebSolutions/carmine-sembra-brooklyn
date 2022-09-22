import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Link to="/login">
            <Nav.Link>Log in</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Log in</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link to="/shipping">
            <Nav.Link>Indirizzo</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Indirizzo</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link to="/payment">
            <Nav.Link>Pagamento</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Pagamento</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link to="/placeorder">
            <Nav.Link>Ordina</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Ordina</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
