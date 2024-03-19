import React, { useContext } from "react";
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartCounter } from "../Contexts/CartCounter";

const Navbar = () => {
  const value = useContext(CartCounter);

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
          <span className="text-2xl text-white">{value.counter}</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
