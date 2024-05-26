import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Left from "./components/Left.jsx";
import Right from "./components/Right.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LeftPage1 from "./components/LeftPage1.jsx";
import LeftPage2 from "./components/LeftPage2.jsx";
import RightPage1 from "./components/RigthPage1.jsx";
import RigthPage2 from "./components/RightPage2.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Left />}>
          <Route path="/left/leftpage1" element={<LeftPage1 />} />
          <Route path="/leftpage2" element={<LeftPage2 />} />
        </Route>
        <Route path="" element={<Right />}>
          <Route path="/rightpage1" element={<RightPage1 />} />
          <Route path="/rightpage2" element={<RigthPage2 />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
