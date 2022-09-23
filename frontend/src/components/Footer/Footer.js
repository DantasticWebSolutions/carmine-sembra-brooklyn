import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTelephone, BsPinMap, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import Contact from "./Contact.js";
import logo from "../../asset/logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="px-3">
        <Row>
          <Col className="text-center py-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <span className="logo-icon-footer mt-3 mb-2">
                <img src={logo} alt="logo" className="logo-img" />
                {/* CARMINE SEMBRA BROOKLYN */}
              </span>
              {/* AMEX */}
            </div>
            <div className="footer-responsive">
              <Contact />
              <div className="footer-links">
                <div className="footer-sector">
                  <h4 className="footer-sector-title">CONTATTI</h4>
                  <Link to="/privacy-policy">
                    <BsTelephone className="mr-1" size="1.5em" />
                    <span className="mx-1">3348464318</span>
                  </Link>
                  <Link to="/privacy-policy">
                    <BsWhatsapp className="mr-1" size="1.5em" />
                    <span className="mx-1">WhatsApp</span>
                  </Link>

                  <Link to="/privacy-policy">
                    <HiOutlineMail className="mr-1" size="1.5em" />
                    <span className="mx-1">Email</span>
                  </Link>
                  <span>
                    <BsPinMap className="mr-1" size="1.5em" />
                    <span className="mx-1">Via Milano 12</span>
                  </span>
                </div>
                <div className="footer-sector">
                  <h4 className="footer-sector-title">Legale</h4>
                  <Link to="/privacy-policy">
                    <u className="mx-1">Condizioni Generali</u>
                  </Link>
                  <Link to="/privacy-policy">
                    <u className="mx-1">Privacy Policy</u>
                  </Link>

                  <Link to="/privacy-policy">
                    <u className="mx-1">Termini di Servizio</u>
                  </Link>
                </div>
              </div>
            </div>
            <div className="social-icons">
              <FaFacebookF
                size="1em"
                style={{
                  backgroundColor: "rgb(233, 209, 255)",
                  color: "#202020",
                  borderRadius: "50px",
                }}
              />
              <AiOutlineInstagram
                size="1.7em"
                style={{
                  backgroundColor: "rgb(233, 209, 255)",
                  color: "#202020",
                  borderRadius: "50px",
                }}
              />
              <BsWhatsapp
                size="1em"
                style={{
                  backgroundColor: "rgb(233, 209, 255)",

                  color: "#202020",
                  borderRadius: "50px",
                }}
              />
            </div>
            <div>
              <div className="payment-gateways">
                <img
                  height="24"
                  width="36"
                  alt="Visa"
                  sizes="100vw"
                  src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/img/payment/networks/visa.svg"
                  className="h-auto max-w-full max-h-full"
                />
                <img
                  height="24"
                  width="36"
                  alt="Visa"
                  sizes="100vw"
                  src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/img/payment/networks/mastercard.svg"
                  className="h-auto max-w-full max-h-full"
                />
                <img
                  height="24"
                  width="36"
                  alt="Visa"
                  sizes="100vw"
                  src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/img/payment/methods/paypal.svg"
                  className="h-auto max-w-full max-h-full"
                />
              </div>
              <div>
                <span
                  className="font-bold inline-block my-1 text-1 text-primary-light"
                  style={{
                    color: "#545454",
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Payments 100% secured
                </span>
              </div>
            </div>
            <hr />
            &copy; 2022 Carmine Sembra Brooklyn. Tutti i diritti riservati
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
