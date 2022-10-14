import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { saveShippingAddress } from "../../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <main>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Spedizione</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            {/* <Form.Label>Address</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Indirizzo"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-100 my-2"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            {/* <Form.Label>City</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Città"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-100 my-2"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            {/* <Form.Label>Postal Code</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Codice Postale"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-100 my-2"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            {/* <Form.Label>Country</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Provincia"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-100 my-2"
              required
            ></Form.Control>
          </Form.Group>

          <Button type="submit" className="w-100 my-2" variant="dark">
            Continua
          </Button>
        </Form>
      </FormContainer>
    </main>
  );
};

export default ShippingScreen;
