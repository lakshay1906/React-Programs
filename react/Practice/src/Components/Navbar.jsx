import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Cart from "./Add_to_Cart";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

  function handleOnClick() {
    setTheme((prev) => {
      return (prev = !prev);
    });
    console.log(theme);
  }
  return (
    <>
      <nav style={{ backgroundColor: theme ? "green" : "red" }}>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/contact_us">
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <h2 onClick={handleOnClick}>Theme</h2>
        <Cart />
      </nav>
    </>
  );
};

export default Navbar;
