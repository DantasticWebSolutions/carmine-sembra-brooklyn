import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./bootstrap.min.css";
import "./index.css";
// eslint-disable-next-line
// import 'swiper/css/bundle';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// create a root
const root = ReactDOM.createRoot(document.getElementById("root"));
//render app to root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//   <App />
// </Provider>
// ,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
