import React from "react";

const Category_cards = (props) => {
  return (
    <div
      className="bg-pink-400 h-52 w-52 flex justify-center items-center rounded-[20px] overflow-hidden bg-center bg-cover relative cursor-pointer px-3 transition-all group z-0"
      style={{ backgroundImage: props.bgImg }}
    >
      <div className="text-[1.7rem] text-center group-hover:scale-110 transition-all w-full h-full flex items-center justify-center text-white z-10 ">
        {props.category}
      </div>
      <div className=" absolute bg-black w-full h-full top-0 opacity-50"></div>
    </div>
  );
};

export default Category_cards;
