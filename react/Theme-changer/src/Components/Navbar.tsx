import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <div className="bg-blue-700 text-white text-lg h-12 flex items-center justify-between px-10">
      <ul className="flex gap-5">
        <Link to={""}>
          <li className="hover:cursor-pointer">Home</li>
        </Link>
        <Link to={"/product"}>
          <li className="hover:cursor-pointer">Product</li>
        </Link>
        <Link to={"/service"}>
          <li className="hover:cursor-pointer">Services</li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:cursor-pointer">About</li>
        </Link>
      </ul>
      <div onClick={() => setIsDarkMode((pre: boolean) => !pre)}>
        {isDarkMode ? <IoSunny /> : <IoMoon />}
      </div>
    </div>
  );
}

export default Navbar;
