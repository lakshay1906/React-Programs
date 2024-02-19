import React from "react";
import { useEffect } from "react";
import "./Navbar.css";
const ChangeColor = (props) => {
  useEffect(() => {
    alert("navbar: helloo..");
  }, []);
  useEffect(() => {
    alert("Hey.. Navbar this side ");
  }, [props.color]);

  // cleanup function

  useEffect(() => {
    return () => {
      alert("The navbar is umounted or removed");
    };
  }, []);

  // The return function in above useEffect hook will run only when the component is removed or unmounted

  return (
    <>
      <div className="navbar" style={{ backgroundColor: props.color }}>
        {props.title}
      </div>
    </>
  );
};

export default ChangeColor;
