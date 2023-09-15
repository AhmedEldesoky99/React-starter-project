import React from "react";
import ReactDOM from "react-dom/client";
//redux
import { Provider } from "react-redux";
import { Store } from "./store/store.js";
//components
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import "./Translation/index.js";
//styles
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
// import "./sass/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ToastContainer autoClose="2000" position="top-left" />
    <RouterProvider router={router} />
  </Provider>
);
