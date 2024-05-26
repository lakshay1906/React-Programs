import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Right_body from "./components/Right-body.jsx";
import HomePage from "./components/HomePage.jsx";
import AllCardsPage from "./components/AllCardsPage.jsx";
import SongsTrack from "./components/SongsTrack.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        {/* <Route path="/allcards" element={<AllCardsPage />} /> */}
        <Route path="/songtracks" element={<SongsTrack />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
