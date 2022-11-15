import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTelephone, BsPinMap, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
// import { FaFacebookF } from "react-icons/fa";
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
                  <span className="footer-sector-title">CONTATTI</span>
                  <a
                    href="tel:+393669905410"
                    aria-label="Call Carmine Sembra Brooklyn at +39366905410"
                  >
                    <BsTelephone className="mr-1" size="1.5em" />
                    <span className="mx-1">Chiama</span>
                  </a>
                  <a
                    href="https://wa.link/63ph6e"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Text Carmine Sembra Brooklyn on whatsapp"
                  >
                    <BsWhatsapp className="mr-1" size="1.5em" />
                    <span className="mx-1">WhatsApp</span>
                  </a>

                  <a
                    href="mailto:carminesembrabrooklyn@gmail.com"
                    aria-label="Send email to Carmine Sembra Brooklyn at carminesembrabrooklyn@gmail.com"
                  >
                    <HiOutlineMail className="mr-1" size="1.5em" />
                    <span className="mx-1">Email</span>
                  </a>
                </div>
                <div className="footer-sector">
                  <span className="footer-sector-title">LEGALE</span>

                  <Link to="/privacy-policy">
                    <u className="mx-1">Privacy Policy</u>
                  </Link>

                  <Link to="/terms-conditions">
                    <u className="mx-1">Termini di Servizio</u>
                  </Link>
                  <span>
                    <BsPinMap className="mr-1" size="1.5em" />
                    <span className="mx-1">
                      <span>Via Antonio Allegri 53</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="social-icons">
              {/* <FaFacebookF
                size="1em"
                style={{
                  backgroundColor: "rgb(233, 209, 255)",
                  color: "#202020",
                  borderRadius: "50px",
                }}
              /> */}
              <a
                href="https://www.instagram.com/carmine.brklyn/"
                aria-label="Camine Sembra Brooklyn's Instagram account"
              >
                <AiOutlineInstagram
                  size="1.7em"
                  style={{
                    backgroundColor: "rgb(233, 209, 255)",
                    color: "#202020",
                    borderRadius: "50px",
                  }}
                />
              </a>
              <a
                href="https://wa.link/63ph6e"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Text Carmine Sembra Brooklyn on whatsapp"
              >
                <BsWhatsapp
                  size="1em"
                  style={{
                    backgroundColor: "rgb(233, 209, 255)",

                    color: "#202020",
                    borderRadius: "50px",
                  }}
                />
              </a>
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
                    color: "rgb(120,120,120)",
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Payments 100% secured
                </span>
              </div>
            </div>
            <hr />
            Carmine Sembra Brooklyn &copy; {new Date().getFullYear()}
            <br />
            Tutti i diritti riservati
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
              <hr style={{ width: "150%" }} />
            </div>
            Powered by{" "}
            <a
              href="https://dantastic.dev/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Dantastic Web Solutions"
            >
              Dantastic Web Solutions
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
