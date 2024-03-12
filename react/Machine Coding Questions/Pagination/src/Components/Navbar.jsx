import React from "react";
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-800 text-white h-16 flex items-center justify-between px-5 cursor-default">
        <div className="flex items-center  w-72 font-semibold justify-between">
          <FcShop size="2rem" className="cursor-pointer" />
          <h1 className="text-4xl">Online Dukaan</h1>
        </div>
        <MdOutlineShoppingCart size="2.1rem" className=" cursor-pointer" />
      </div>
    </>
  );
};

export default Navbar;
