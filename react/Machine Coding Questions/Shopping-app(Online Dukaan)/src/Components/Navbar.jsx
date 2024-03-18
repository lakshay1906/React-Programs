import React from "react";
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-800 text-white h-16 flex items-center justify-between px-5 cursor-default">
        <div className="flex items-center  w-72 font-semibold justify-between">
          <NavLink to="">
            <FcShop size="2rem" className="cursor-pointer" />
          </NavLink>
          <h1 className="text-4xl">Online Dukaan</h1>
        </div>
        <NavLink to="/addToCart">
          <MdOutlineShoppingCart size="2.1rem" className=" cursor-pointer" />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
