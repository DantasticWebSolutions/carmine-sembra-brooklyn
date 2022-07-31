import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import CustomersOrdersScreen from "./screens/CustomersOrdersScreen";

// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import FotoListScreen from "./screens/FotoListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import LandingPage from "./screens/LandingPage";
import FotoEditScreen from "./screens/FotoEditScreen";
import EventListScreen from "./screens/Events/EventListScreen";
import EventEditScreen from "./screens/Events/EventEditScreen";
import NavbarContainer from "./components/NavbarContainer";
import OrdersScreen from "./screens/OrdersScreen";
import PaymentScreen from "./screens/PaymentScreen";
import AdminOrderListScreen from "./screens/AdminOrderListScreen";
import AdminUserListScreen from "./screens/AdminUserListScreen";
import AdminProductListScreen from "./screens/AdminProductListScreen";

const App = () => {
  return (
    <Router>
      <NavbarContainer />
      {/* <Header /> */}

      {/* <Container> */}
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/orders" component={CustomersOrdersScreen} />
      {/* <Route path="/orders" component={OrdersScreen} /> */}
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      {/* USER */}
      <Route path="/admin/userlist" component={AdminUserListScreen} />
      <Route path="/admin/user/:id/edit" component={UserEditScreen} />
      {/* PRODUCT */}
      {/* <Route path="/admin/productlist" component={ProductListScreen} exact />
      <Route
        path="/admin/productlist/:pageNumber"
        component={ProductListScreen}
        exact
      /> */}
      <Route
        path="/admin/productlist"
        component={AdminProductListScreen}
        exact
      />
      <Route
        path="/admin/productlist/:pageNumber"
        component={AdminProductListScreen}
        exact
      />
      <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
      {/* FOTO */}
      <Route path="/admin/fotolist" component={FotoListScreen} exact />
      <Route
        path="/admin/fotolist/:pageNumber"
        component={FotoListScreen}
        exact
      />
      <Route path="/admin/fotos/:id/edit" component={FotoEditScreen} />
      {/* EVENTS */}
      <Route path="/admin/eventlist" component={EventListScreen} exact />
      <Route
        path="/admin/eventlist/:pageNumber"
        component={EventListScreen}
        exact
      />
      <Route path="/admin/event/:id/edit" component={EventEditScreen} />
      {/* ORDER */}
      <Route path="/admin/orderlist" component={AdminOrderListScreen} />
      <Route path="/search/:keyword" component={HomeScreen} exact />
      <Route path="/page/:pageNumber" component={HomeScreen} exact />
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={HomeScreen}
        exact
      />
      <Route path="/shop" component={HomeScreen} />
      <Route path="/" component={LandingPage} exact />
      {/* </Container> */}
      <Footer />
    </Router>
  );
};

export default App;
