import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Cart from "./Add_to_Cart";

const Navbar = () => {
  return (
    <>
      <nav>
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
        <Cart />
      </nav>
    </>
  );
};

export default Navbar;
