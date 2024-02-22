import React from "react";
import Button from "./Button";

const Navbar = (props) => {
  return (
    <>
      <div>I'm Navbar</div>
      <Button counter={props.counter} />
    </>
  );
};

export default Navbar;
