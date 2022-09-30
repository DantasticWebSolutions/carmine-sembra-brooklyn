import React from "react";
// import CartScreen from "../screens/CartScreen";
import "bootstrap/dist/css/bootstrap.css";

import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
// import { Modal } from "react-bootstrap";

// import { Link } from "react-router-dom";
import {
  // Row,
  // Col,
  // ListGroup,
  // Image,
  // Form,
  // Button,
  // Card,
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
// import Message from "../components/Message";
// import { addToCart, removeFromCart } from "../actions/cartActions";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import { FiUser } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { GiTShirt, GiPartyPopper } from "react-icons/gi";
import logo from "../asset/logo/logo.png";

function NavbarContainer() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const expand = "lg";
  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        expand={expand}
        // className="px-3"
        // sticky="top"
      >
        <div className="navbar-contenitor">
          <Container fluid className="mb-1">
            <Nav.Link href="/shop" className="icon-navbar">
              <BsShop size="1.5em" />
              <span>Shop</span>
            </Nav.Link>
            <Navbar.Brand href="/">
              {/* <span className="logo-text" style={{ alignText: "center" }}>
                Carmine
                <br /> Sembra <br />
                Brooklyn{" "}
              </span> */}
              <img src={logo} alt="logo" className="logo-img" />
            </Navbar.Brand>

            {/*
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
                  <Nav.Link href="/shop" className="icon-navbar">
                    <BsShop size="1.5em" />
                    <span>Shop</span>
                  </Nav.Link> */}

            {/* END CART MODAL */}
            {/* {userInfo ? (
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
              )} */}
            {/* {userInfo && userInfo.isAdmin && (
                <div className="d-flex flex-row justify-content-start">
                  <MdOutlineAdminPanelSettings className="mr-2" size="1.5em" />{" "}
                  <NavDropdown title="Admin" id="adminmenu">
                    <NavDropdown.Item href="/admin/orderlist">
                      <RiMoneyEuroCircleLine className="mr-2" size="1.5em" />
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
              )} */}
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
            {/* </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}

            <div className="d-flex flex-row justify-content-center align-items-center">
              {userInfo ? (
                <div className="d-flex flex-row justify-content-start">
                  <NavDropdown
                    title={userInfo.name.charAt(0)}
                    id="username"
                    className="mr-2 px-2 py-1 w-100"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgb(233, 209, 255)",
                      color: "black",
                      textAlign: "center !important",
                      // display: "inline",
                    }}
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
                </div>
              ) : (
                <Nav.Link
                  href="/login"
                  className="mr-2 px-2 py-2"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgb(233, 209, 255)",
                    color: "#000 !important",
                    padding: "5px !important",
                  }}
                >
                  <FiUser size="1.5em" />
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="d-flex flex-row justify-content-start">
                  {/* <MdOutlineAdminPanelSettings className="mr-2" size="1.5em" />{" "} */}
                  <NavDropdown
                    className="mr-2 px-2 py-1"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgb(233, 209, 255)",
                      color: "black",
                      textAlign: "center !important",
                      // display: "inline",
                    }}
                    title={userInfo.name.charAt(0)}
                    id="adminmenu"
                  >
                    <NavDropdown.Item href="/admin/orderlist">
                      <RiMoneyEuroCircleLine className="mr-2" size="1.5em" />
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
              <Nav.Link href="/cart">
                <AiOutlineShoppingCart className="mr-2" size="1.5em" />
              </Nav.Link>
            </div>
          </Container>
          <div className="search-navbar-desktop">
            <Route render={({ history }) => <SearchBox history={history} />} />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarContainer;
