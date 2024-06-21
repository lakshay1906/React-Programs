import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMoon, IoSunny } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode } from "../Features/ThemeReducer";

function NavBar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <nav className="flex items-center justify-between px-12 text-lg py-2">
        <div className="w-52 bg-[#fff]">
          <img src="../assets/logo.webp" className="w-full" />
        </div>
        <div
          className={`${
            isDarkMode ? "bg-white" : "bg-[#dfdfdf]"
          } h-[3.2rem] flex items-center justify-between pl-3 rounded-[3rem] w-[28rem]`}
        >
          <button className="w-6 h-6 text-black">
            <IoSearch size={"1.4rem"} />
          </button>
          <input
            type="text"
            className="bg-inherit focus-visible:outline-none text-[#000000] text-[0.98rem] w-[90%] h-full rounded-r-[3rem]"
            placeholder="Search by Book, Author, Publisher or ISBN"
          />
        </div>
        <div className="flex gap-x-3 text-base items-center">
          <div className="flex gap-1 items-center">
            <LuUser2 size={"1.5rem"} />
            <p>Login/Register</p>
          </div>
          <div
            id="vertical-seperator"
            className="bg-gray-400 w-[2px] h-6"
          ></div>
          <div className="flex gap-1 items-center">
            <CiShoppingCart size={"1.7rem"} fontWeight={"900"} />
            {1}/ {" ₹" + 3599}
          </div>
        </div>
      </nav>
      <div
        id="lower-nav"
        className={`w-full h-[3.5rem] shadow-y grid grid-cols-3 items-center sticky top-0 z-20 ${
          isDarkMode ? "bg-[#292929]" : "bg-white"
        }`}
      >
        <div
          onClick={() => dispatch(setIsDarkMode())}
          className={`${
            isDarkMode ? "bg-white" : "bg-black"
          } w-fit rounded-full flex justify-center items-center ml-12`}
        >
          {isDarkMode ? (
            <IoSunny
              color="black"
              style={{ margin: "0.5rem" }}
              size={"1.1rem"}
            />
          ) : (
            <IoMoon color="white" style={{ margin: "0.5rem" }} />
          )}
        </div>
        <ul className="flex gap-2 items-center text-[0.9rem] justify-self-center">
          <li>HOME</li>
          <div
            id="vertical-seperator"
            className="bg-gray-400 w-[1px] h-5"
          ></div>
          <li>SHOP</li>
          <div
            id="vertical-seperator"
            className="bg-gray-400 w-[1px] h-5"
          ></div>
          <li>DISCOVER</li>
          <div
            id="vertical-seperator"
            className="bg-gray-400 w-[1px] h-5"
          ></div>
          <li>ABOUT</li>
        </ul>
        <div className="flex items-center gap-2 text-[0.9rem] justify-self-end mr-5">
          <button className="w-fit px-5 py-3 bg-orange-500 rounded-3xl text-white">
            PI WALLET
          </button>
          <div
            id="vertical-seperator"
            className="bg-gray-400 w-[1px] h-5"
          ></div>
          <button className="w-fit px-5 py-3 bg-orange-500 rounded-3xl text-white">
            REQUEST A BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
