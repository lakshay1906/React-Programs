import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Footer() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <footer
      className={`m-12 mt-20 mb-0 pb-12 flex flex-col gap-10 ${
        isDarkMode ? "bg-[#202020]" : "bg-white"
      }`}
    >
      <div className="w-52 bg-white">
        <img src="../assets/logo.webp" className="w-full" />
      </div>
      <div className="flex justify-between px-2">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold hover:text-orange-600">Quick Links</h2>
            <ul
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              } flex flex-col gap-1`}
            >
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Home
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Blog
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold hover:text-orange-600">
              Important Links
            </h2>
            <ul
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              } flex flex-col gap-1`}
            >
              <li className="hover:text-orange-600 hover:cursor-pointer">
                PI Against Piracy
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Refer a friend
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold hover:text-orange-600">
              Our Policies
            </h2>
            <ul
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              } flex flex-col gap-1`}
            >
              <li className="hover:text-orange-600 hover:cursor-pointer">
                Terms of Use / Disclaimer
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                PI Return / Damage Policy
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                PI Shipping Policy
              </li>
              <li className="hover:text-orange-600 hover:cursor-pointer">
                PI Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 mr-10">
          <FaFacebook color="blue" size={"1.6rem"} />
          <FaInstagram color="black" size={"1.6rem"} />
          <FaXTwitter color="black" size={"1.6rem"} />
          <FaYoutube color="red" size={"1.6rem"} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
