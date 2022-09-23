import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { register } from "../../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  const [disable, setDisable] = useState(true);

  const handleDisable = () => {
    setDisable(!disable);
  };
  return (
    <div className="login-container">
      <FormContainer>
        <div className="login">
          <h1>Nuovo cliente</h1>
          <Row className="py-3">
            <Col>
              Sei già inscritto?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                <u>Login</u>
              </Link>
            </Col>
          </Row>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                type="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              {/* <Form.Label>Email Address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Conferma Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-100 my-2"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-3 noselect" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleDisable}
                type="checkbox"
                label={`Ho letto e accettato la Privacy Policy`}
                required
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              disabled={disable}
              className="bottone-primario w-100 my-2"
            >
              Registra
            </Button>
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
