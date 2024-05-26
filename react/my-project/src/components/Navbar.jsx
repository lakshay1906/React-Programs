import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("red");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setNavbarColor("blue");
    } else {
      setNavbarColor("red");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={`navbar ${navbarColor}`}>Navbar</div>;
};

export default Navbar;
