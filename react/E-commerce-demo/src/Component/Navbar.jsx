import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink className="flex items-center" to={""}>
          <img
            src="../src/assets/cart-logo.jpg"
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <span className="text-xl font-semibold text-gray-800">MyStore</span>
        </NavLink>
        <div className="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
            Search
          </button>
        </div>
        <div>
          <NavLink
            to="/cart"
            className="text-gray-800 hover:text-gray-700 duration-300 flex items-center gap-1 transition-all group hover:bg-slate-100 rounded-lg px-4 py-1"
          >
            <MdOutlineShoppingCart size={"1.5rem"} />
            <span className="text-lg font-semibold group-hover:font-bold">
              Cart
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
