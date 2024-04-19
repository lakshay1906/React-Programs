import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./Components/Pages/HomeLayout.jsx";
import Electronic_Vehicle from "./Components/Pages/Electronic_Vehicle.jsx";
import Groceries from "./Components/Pages/Groceries.jsx";
import HomeDecoration from "./Components/Pages/HomeDecoration.jsx";
import Skincare_Bags from "./Components/Pages/Skincare_Bags.jsx";
import Wearables from "./Components/Pages/Wearables.jsx";
import AddToCart from "./Components/Pages/AddToCart.jsx";
import ProductPage from "./Components/Pages/ProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<HomeLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/electronicsAndVehicles" element={<Electronic_Vehicle />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/homeDecoration" element={<HomeDecoration />} />
      <Route path="/skincare_Bags" element={<Skincare_Bags />} />
      <Route path="/wearables" element={<Wearables />} />
      <Route path="/addToCart" element={<AddToCart />} />
      <Route path="/productPage" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
