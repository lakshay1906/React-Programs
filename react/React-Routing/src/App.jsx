import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Services/:username",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/ContactUs",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
