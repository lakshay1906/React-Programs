import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/Home"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/about"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/services"
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/contactUs"
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
