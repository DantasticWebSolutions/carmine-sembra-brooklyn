import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// eslint-disable-next-line
// import 'swiper/css/bundle';
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// serviceWorker.unregister();
