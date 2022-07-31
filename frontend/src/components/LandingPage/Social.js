import React from "react";
// React Icons
import { BsWhatsapp, BsTelephone, BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Seguici sui Social</h1>
      <div className="social-icon-container">
        <BsInstagram />
        <BsWhatsapp />
        <BsTelephone />
      </div>
    </div>
  );
};

export default Social;
