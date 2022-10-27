import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
// import "./bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// eslint-disable-next-line
// import App from "./App";
const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense>
      <App />
    </Suspense>
  </Provider>
);
// serviceWorker.unregister();
