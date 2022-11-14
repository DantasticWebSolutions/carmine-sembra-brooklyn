import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

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
      <Navbar bg="black" variant="dark" expand={expand}>
        <div className="navbar-contenitor">
          <div className="navbar-elements-contenitor">
            <Nav.Link href="/shop" className="icon-navbar">
              <BsShop size="1.5em" />
              <span>Shop</span>
            </Nav.Link>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" className="logo-img" />
            </Navbar.Brand>

            <div className="d-flex flex-row justify-content-center align-items-center">
              {userInfo ? (
                <div className="d-flex flex-row justify-content-start">
                  <NavDropdown
                    title={userInfo.name.charAt(0)}
                    id="username"
                    aria-label="User"
                    className="noselect"
                    style={{
                      height: "31px",
                      width: "31px",
                      lineHeight: "22px",
                      margin: "0px 5px",
                      padding: "9px 10px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(233, 209, 255)",
                      color: "black",
                      textAlign: "center !important",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <NavDropdown.Item href="/orders">
                      <RiMoneyEuroCircleLine
                        style={{ marginRight: "5px" }}
                        size="1.5em"
                      />
                      Ordini
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profile">
                      <AiOutlineUser
                        style={{ marginRight: "5px" }}
                        size="1.5em"
                      />
                      Profilo
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      <FiLogOut
                        style={{ marginRight: "5px", marginLeft: "2.5px" }}
                        size="1.5em"
                      />
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <Nav.Link
                  href="/login"
                  aria-label="Login"
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
                  <NavDropdown
                    className="noselect"
                    aria-label="Admin"
                    style={{
                      height: "31px",
                      width: "31px",
                      lineHeight: "22px",
                      margin: "0px 5px",
                      padding: "9px 10px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(233, 209, 255)",
                      color: "black",
                      textAlign: "center !important",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    title={userInfo.name.charAt(0)}
                    id="adminmenu"
                  >
                    <NavDropdown.Item href="/admin/orderlist">
                      <RiMoneyEuroCircleLine
                        style={{ marginRight: "5px" }}
                        size="1.5em"
                      />
                      Ordini
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/admin/userlist">
                      <FiUsers style={{ marginRight: "5px" }} size="1.5em" />
                      Utenti
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/productlist">
                      <GiTShirt style={{ marginRight: "5px" }} size="1.5em" />
                      Prodotti
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/fotolist">
                      <MdAddAPhoto
                        style={{ marginRight: "5px" }}
                        size="1.5em"
                      />
                      Foto
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/eventlist">
                      <GiPartyPopper
                        style={{ marginRight: "5px" }}
                        size="1.5em"
                      />
                      Eventi
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              )}
              <Nav.Link href="/cart" aria-label="Cart">
                <AiOutlineShoppingCart
                  style={{ marginLeft: "5px" }}
                  size="1.5em"
                />
              </Nav.Link>
            </div>
          </div>
          {/* </Container> */}
          <div className="search-navbar-desktop">
            <Route render={({ history }) => <SearchBox history={history} />} />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarContainer;
