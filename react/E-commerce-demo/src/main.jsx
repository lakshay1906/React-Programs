import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./App/Store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import PDP from "./Pages/PDP.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pdp" element={<PDP />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
