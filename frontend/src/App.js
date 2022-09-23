import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Shop from "./screens/Shop";
import ProductScreen from "./screens/Cart/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";
import LoginScreen from "./screens/User/LoginScreen";
import RegisterScreen from "./screens/User/RegisterScreen";
import ProfileScreen from "./screens/User/ProfileScreen";
import ShippingScreen from "./screens/Cart/ShippingScreen";
import CustomersOrdersScreen from "./screens/User/CustomersOrdersScreen";
import PlaceOrderScreen from "./screens/Cart/PlaceOrderScreen";
import OrderScreen from "./screens/Cart/OrderScreen";
import UserEditScreen from "./screens/Admin/UserEditScreen";
import FotoListScreen from "./screens/Admin/FotoListScreen";
import ProductEditScreen from "./screens/Admin/ProductEditScreen";
import LandingPage from "./screens/LandingPage";
import FotoEditScreen from "./screens/Admin/FotoEditScreen";
import EventListScreen from "./screens/Events/EventListScreen";
import EventEditScreen from "./screens/Events/EventEditScreen";
import NavbarContainer from "./components/NavbarContainer";
import PaymentScreen from "./screens/Cart/PaymentScreen";
import AdminOrderListScreen from "./screens/Admin/AdminOrderListScreen";
import AdminUserListScreen from "./screens/Admin/AdminUserListScreen";
import AdminProductListScreen from "./screens/Admin/AdminProductListScreen";

const App = () => {
  return (
    <Router>
      <NavbarContainer />
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
      <Route path="/search/:keyword" component={Shop} exact />
      <Route path="/page/:pageNumber" component={Shop} exact />
      <Route path="/search/:keyword/page/:pageNumber" component={Shop} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/" component={LandingPage} exact />
      {/* </Container> */}
      <Footer />
    </Router>
  );
};

export default App;
