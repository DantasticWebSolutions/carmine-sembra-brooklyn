import React from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  // Row,
  // Col,
  // ListGroup,
  // Image,
  // Form,
  // Button,
  // Card,
  Offcanvas,
  NavDropdown,
  //   Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar">
      <Link to="/shop" className="navbar-icon">
        <BsShop className="mr-1" size="1.5em" />
        <span>SHOP</span>
      </Link>
      <Link to="/" className="navbar-icon">
        <BiHomeSmile className="mr-1" size="1.5em" />
        <span>HOME</span>
      </Link>
      <div className="navbar-icon logo-icon">
        <div className="logo-icon">
          <span>CARMINE SEMBRA BROOKLYN</span>
        </div>
      </div>
      <Link to="/cart" className="navbar-icon">
        <AiOutlineShoppingCart className="mr-2" size="1.5em" />
        <span>CART</span>
      </Link>
      <Link to="/profile" className="navbar-icon">
        <AiOutlineUser className="mr-2" size="1.5em" />
        {/* <span>PROFILO</span> */}
        {userInfo ? userInfo.name : "Sign In"}

        {userInfo ? (
          <NavDropdown title={userInfo.name} id="username" className="mr-5">
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
      </Link>
    </div>
  );
};

export default Navbar;
