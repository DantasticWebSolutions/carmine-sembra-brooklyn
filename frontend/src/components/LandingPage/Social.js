import React from "react";
// React Icons
import { BsWhatsapp, BsTelephone, BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="container">
      <span className="social-title">Seguici sui Social</span>
      <div className="social-icon-container">
        <BsInstagram />
        <BsWhatsapp />
        <BsTelephone />
      </div>
    </div>
  );
};

export default Social;
