import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { login } from "../../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login-container">
      <FormContainer>
        <div className="login">
          <h1>Log in </h1>
          <p>
            Nuovo da queste parti?{" "}
            <u>
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Registrati gratis
              </Link>
            </u>
          </p>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              {/* <Form.Label>Email Address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Inserisci indirizzo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Inserisci password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Button type="submit" className="w-100 my-2" variant="dark">
              Log in
            </Button>
          </Form>
          {/* 
        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row> */}
        </div>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;