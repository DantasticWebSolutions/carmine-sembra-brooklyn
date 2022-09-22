import React, { useState } from "react";
// import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
// import SocialIcons from "./Util/SocialIcons";
// import ButtonMui from "./Util/ButtonMui";
import { Button, Form, Input, TextArea } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "semantic-ui-css/semantic.min.css";

const SERVICE_ID = "mayaRussellSmith";
const TEMPLATE_ID = "template_0ajn6qb";
const USER_ID = "user_y1ftUXLPd92Uw3SY8iLtJ";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const [disable, setDisable] = useState(true);

  const handleDisable = () => {
    setDisable(!disable);
  };

  return (
    <>
      <div className="contactContainer">
        <div className="contact">
          {/* <h2>Get in Touch</h2> */}
          <Form
            onSubmit={handleOnSubmit}
            name="contact-form"
            method="POST"
            action="/success/"
            data-netlify="true"
            netlify-honeypot="got-ya"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Nome</Form.Label> */}
              <Form.Control
                name="user_name"
                type="name"
                placeholder="Nome"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                name="user_email"
                type="email"
                placeholder="Email"
                required
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Numero di Telefono</Form.Label> */}
              <Form.Control
                name="user_phone"
                type="tel"
                placeholder="Numero di telefono"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Messaggio</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Messaggio"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 noselect" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleDisable}
                type="checkbox"
                label={`Ho letto e accettato la Privacy Policy`}
              />
            </Form.Group>
            <Button type="submit" disabled={disable} variant="outline-success">
              Submit
            </Button>
          </Form>
        </div>

        {/* <SocialIcons /> */}
      </div>
    </>
  );
};

export default Contact;
