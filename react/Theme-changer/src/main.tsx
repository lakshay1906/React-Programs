import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Pages from "./Components/Pages.tsx";
import App from "./App.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path=""
          element={
            <Pages
              heading="Home Page"
              description="Welcome to home page ...."
            />
          }
        />
        <Route
          path="/product"
          element={
            <Pages
              heading="Product Page"
              description="Welcome to Product page ...."
            />
          }
        />
        <Route
          path="/service"
          element={
            <Pages
              heading="Service Page"
              description="Welcome to Service page ...."
            />
          }
        />
        <Route
          path="/about"
          element={
            <Pages
              heading="About Page"
              description="Welcome to About page ...."
            />
          }
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
