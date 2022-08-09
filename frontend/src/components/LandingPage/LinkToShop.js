import React from "react";
// IMGs
import LogoBrooklyn from "../../asset/logoB.png";
import tshirt from "../../asset/tshirt.png";
// React Icons
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const LinkToShop = () => {
  return (
    <div className="link-container reverse">
      <div className="link-left">
        <h1>Visita il nostro negozio </h1>
        <div
          className="img-container contain"
          style={{ background: `url(${LogoBrooklyn})` }}
        ></div>
      </div>
      <div className="link-right">
        <div className="img-container" style={{ background: `url(${tshirt})` }}>
          <div className="link-date">
            <span className="link-date-title">Compra ora</span>

            <div className="link-date-day-container">
              <div className="link-day-date">€20.00</div>
            </div>
            {/* <div className="about-address">
              <FiMapPin style={{ marginRight: "5px" }} />
              <span>Latte +</span>
            </div> */}
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et
          eveniet quam. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </div>
        <div className="button-container">
          <button className="thirdButton">
            <AiOutlineShoppingCart className="button-icon" />
            &nbsp;
            <span>Scopri</span>
          </button>

          <button className="fourthButton">
            <BsWhatsapp className="button-icon" />
            &nbsp;
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkToShop;
