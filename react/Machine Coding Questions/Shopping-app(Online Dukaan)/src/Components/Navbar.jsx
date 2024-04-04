import React, { useContext } from "react";
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartCounter } from "../Contexts/CartCounter";

const Navbar = () => {
  const { counter, setCounter } = useContext(CartCounter);

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
          <div className="relative mt-2">
            <MdOutlineShoppingCart size="2.5rem" className=" cursor-pointer " />
            <span
              className="text-xl text-white absolute -top-4 -right-2 bg-slate-400 rounded-full w-6 h-6 flex justify-center items-center "
              style={{
                display: counter ? "" : "none",
                padding: counter < 10 ? "0px" : "14px",
                // padding: "13px",
              }}
            >
              {counter}
            </span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
