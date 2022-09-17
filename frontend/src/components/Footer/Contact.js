import React from "react";
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
              <Form.Control name="user_email" type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                name="user_email"
                type="email"
                placeholder="Email"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Numero di Telefono</Form.Label> */}
              <Form.Control
                name="user_phone"
                type="text"
                placeholder="Numero di telefono"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Messaggio</Form.Label> */}
              <Form.Control as="textarea" rows={4} placeholder="Messaggio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={`Ho letto e accettato la Privacy Policy`}
              />
            </Form.Group>
            {/*
            <Form.Field
              id="form-input-control-last-name"
              label="Name"
              name="user_name"
              placeholder="Harry Potter"
              required
              icon="user circle"
              iconPosition="left"
              className="formField"
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="user_email"
              placeholder="harrypotter@hogwarts.com"
              required
              icon="mail"
              iconPosition="left"
              type="email"
              className="formField"
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Do you know anything about the chamber of secrets?"
              required
              type="textArea"
              className="formField textarea"
            />

          */}
            <Button type="submit">Submit</Button>
          </Form>
        </div>

        {/* <SocialIcons /> */}
      </div>
    </>
  );
};

export default Contact;
