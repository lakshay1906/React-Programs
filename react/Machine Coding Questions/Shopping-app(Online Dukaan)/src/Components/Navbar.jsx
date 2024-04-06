import React, { useContext } from "react";
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ProductObj } from "../Contexts/ProductObj";

const Navbar = () => {
  const array = useContext(ProductObj);
  return (
    <>
      <div className="bg-slate-800 text-white h-16 flex items-center justify-between px-5 cursor-default">
        <div className="w-72 font-semibold">
          <NavLink to="" className={"flex items-center justify-between w-full"}>
            <FcShop size="2rem" className="cursor-pointer" />
            <h1 className="text-4xl">Online Dukaan</h1>
          </NavLink>
        </div>
        <NavLink to="/addToCart">
          <div className="relative mt-2">
            <MdOutlineShoppingCart size="2.5rem" className=" cursor-pointer " />
            <span
              className="text-xl text-white absolute -top-4 -right-2 bg-slate-400 rounded-full w-6 h-6 flex justify-center items-center "
              style={{
                display: array.current.length ? "" : "none",
                padding: array.current.length < 10 ? "0px" : "14px",
                // padding: "13px",
              }}
            >
              {array.current.length}
            </span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
