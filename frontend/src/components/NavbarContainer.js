import React, { useState, useEffect } from "react";
import CartScreen from "../screens/CartScreen";
import "bootstrap/dist/css/bootstrap.css";

import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Offcanvas,
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { MdOutlineAdminPanelSettings, MdAddAPhoto } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { GiTShirt, GiPartyPopper } from "react-icons/gi";

function NavbarContainer() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  // CART MODULE
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="black"
          variant="dark"
          expand={expand}
          className="px-3"
        >
          <Container fluid>
            <Navbar.Brand href="/">Carmine Sembra Brooklyn</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton placement="end">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CARMINE SEMBRA BROOKLYN
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="black" variant="dark">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Route
                    render={({ history }) => <SearchBox history={history} />}
                  />
                  <Nav.Link href="/shop">
                    <BsShop className="mr-1" size="1.5em" /> Negozio
                  </Nav.Link>
                  <Nav.Link href="/cart">
                    <AiOutlineShoppingCart className="mr-2" size="1.5em" />
                    Carello
                  </Nav.Link>

                  {/* END CART MODAL */}
                  {userInfo ? (
                    <NavDropdown
                      title={userInfo.name}
                      id="username"
                      className="mr-5"
                    >
                      <NavDropdown.Item href="/orders">
                        <RiMoneyEuroCircleLine className="mr-2" size="1.5em" />
                        Ordini
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/profile">
                        <AiOutlineUser className="mr-2" size="1.5em" />
                        Profilo
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logoutHandler}>
                        <FiLogOut className="mr-2 ml-1" size="1.5em" />
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="/login">
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <div className="d-flex flex-row justify-content-start ">
                      <MdOutlineAdminPanelSettings
                        className="mr-2"
                        size="1.5em"
                      />{" "}
                      <NavDropdown title="Admin" id="adminmenu">
                        <NavDropdown.Item href="/admin/orderlist">
                          <RiMoneyEuroCircleLine
                            className="mr-2"
                            size="1.5em"
                          />
                          Ordini
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/admin/userlist">
                          <FiUsers className="mr-2" size="1.5em" />
                          Utenti
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/admin/productlist">
                          <GiTShirt className="mr-2" size="1.5em" />
                          Prodotti
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/admin/fotolist">
                          <MdAddAPhoto className="mr-2" size="1.5em" />
                          Foto
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/admin/eventlist">
                          <GiPartyPopper className="mr-2" size="1.5em" />
                          Eventi
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  )}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarContainer;
