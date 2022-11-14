import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
// import Footer from "./components/Footer/Footer";
const Footer = React.lazy(() => import("./components/Footer/Footer"));
// import Shop from "./screens/Shop";
const Shop = React.lazy(() => import("./screens/Shop"));
// import ProductScreen from "./screens/Cart/ProductScreen";
const ProductScreen = React.lazy(() => import("./screens/Cart/ProductScreen"));
// import CartScreen from "./screens/Cart/CartScreen";
const CartScreen = React.lazy(() => import("./screens/Cart/CartScreen"));
// import LoginScreen from "./screens/User/LoginScreen";
const LoginScreen = React.lazy(() => import("./screens/User/LoginScreen"));
// import RegisterScreen from "./screens/User/RegisterScreen";
const RegisterScreen = React.lazy(() =>
  import("./screens/User/RegisterScreen")
);
// import ProfileScreen from "./screens/User/ProfileScreen";
const ProfileScreen = React.lazy(() => import("./screens/User/ProfileScreen"));
// import ShippingScreen from "./screens/Cart/ShippingScreen";
const ShippingScreen = React.lazy(() =>
  import("./screens/Cart/ShippingScreen")
);
// import CustomersOrdersScreen from "./screens/User/CustomersOrdersScreen";
const CustomersOrdersScreen = React.lazy(() =>
  import("./screens/User/CustomersOrdersScreen")
);
// import PlaceOrderScreen from "./screens/Cart/PlaceOrderScreen";
const PlaceOrderScreen = React.lazy(() =>
  import("./screens/Cart/PlaceOrderScreen")
);
// import OrderScreen from "./screens/Cart/OrderScreen";
const OrderScreen = React.lazy(() => import("./screens/Cart/OrderScreen"));
// import UserEditScreen from "./screens/Admin/UserEditScreen";
const UserEditScreen = React.lazy(() =>
  import("./screens/Admin/UserEditScreen")
);
// import FotoListScreen from "./screens/Admin/FotoListScreen";
const FotoListScreen = React.lazy(() =>
  import("./screens/Admin/FotoListScreen")
);
// import ProductEditScreen from "./screens/Admin/ProductEditScreen";
const ProductEditScreen = React.lazy(() =>
  import("./screens/Admin/ProductEditScreen")
);
// import LandingPage from "./screens/LandingPage";
const LandingPage = React.lazy(() => import("./screens/LandingPage"));
// import FotoEditScreen from "./screens/Admin/FotoEditScreen";
const FotoEditScreen = React.lazy(() =>
  import("./screens/Admin/FotoEditScreen")
);
// import EventListScreen from "./screens/Events/EventListScreen";
const EventListScreen = React.lazy(() =>
  import("./screens/Events/EventListScreen")
);
// import EventEditScreen from "./screens/Events/EventEditScreen";
const EventEditScreen = React.lazy(() =>
  import("./screens/Events/EventEditScreen")
);
// import NavbarContainer from "./components/NavbarContainer";
const NavbarContainer = React.lazy(() =>
  import("./components/NavbarContainer")
);
// import PaymentScreen from "./screens/Cart/PaymentScreen";
const PaymentScreen = React.lazy(() => import("./screens/Cart/PaymentScreen"));
// import AdminOrderListScreen from "./screens/Admin/AdminOrderListScreen";
const AdminOrderListScreen = React.lazy(() =>
  import("./screens/Admin/AdminOrderListScreen")
);
// import AdminUserListScreen from "./screens/Admin/AdminUserListScreen";
const AdminUserListScreen = React.lazy(() =>
  import("./screens/Admin/AdminUserListScreen")
);
// import AdminProductListScreen from "./screens/Admin/AdminProductListScreen";
const AdminProductListScreen = React.lazy(() =>
  import("./screens/Admin/AdminProductListScreen")
);
// import PrivacyPolicy from "./screens/Legal/PrivacyPolicy";
const PrivacyPolicy = React.lazy(() => import("./screens/Legal/PrivacyPolicy"));
// import TermsAndConditions from "./screens/Legal/TermsAndConditions";
const TermsAndConditions = React.lazy(() =>
  import("./screens/Legal/TermsAndConditions")
);

const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <ScrollToTop>
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/orders" component={CustomersOrdersScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        {/* USER */}
        <Route path="/admin/userlist" component={AdminUserListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        {/* PRODUCT */}
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
        {/* FOOTER */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-conditions" component={TermsAndConditions} />
        {/* ORDER */}
        <Route path="/admin/orderlist" component={AdminOrderListScreen} />
        <Route path="/search/:keyword" component={Shop} exact />
        <Route path="/page/:pageNumber" component={Shop} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={Shop}
          exact
        />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={LandingPage} exact />
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
