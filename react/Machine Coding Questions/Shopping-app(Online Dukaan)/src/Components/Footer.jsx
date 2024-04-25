import React from "react";

function Footer() {
  return (
    <div className="w-full text-black text-xl flex justify-center flex-col items-center mt-8 mb-2">
      <div className="h-[0.25rem] w-6/12 bg-slate-800 rounded-lg"></div>
      <div className="my-1">
        -- Made By{" "}
        <a
          href="https://myportfolio1906.netlify.app/"
          target="_black"
          className="text-blue-700 font-semibold"
        >
          Lakshay
        </a>
        ❤️ --
      </div>
      <div className="h-[0.25rem] w-10/12 bg-slate-800 rounded-lg"></div>
    </div>
  );
}

export default Footer;
