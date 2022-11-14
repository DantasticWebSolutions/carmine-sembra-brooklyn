import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = (props) => {
  var templateParams = {
    name: props.name,
    email: props.email,
    notes: props.message,
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_299obb8",
        "template_w7rrujp",
        templateParams,
        "user_y1ftUXLPd92Uw3SY8iLtJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <button onClick={sendEmail}></button>
    </div>
  );
};

export default Email;
