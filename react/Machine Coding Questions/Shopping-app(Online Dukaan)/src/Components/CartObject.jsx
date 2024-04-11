import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartObject = (props) => {
  return (
    <div
      id={props.value}
      className="border border-black bg-[#292929] text-white w-full max-h-68 flex justify-center items-center py-4 gap-x-4 rounded-2xl px-2"
    >
      <div className="max-w-60 border border-white mx-2">
        <img src={props.imgLink} alt="" className="w-full" />
      </div>
      <div className="w-9/12 h-full text-xl gap-y-1 flex flex-col overflow-y-auto items-start">
        <div>
          <h2 className=" capitalize">{props.title}</h2>
          <h2 className=" capitalize">{props.desc}</h2>
        </div>
        <h2>
          {props.price} <span>{props.discount}%</span>
        </h2>
        <h2>⭐⭐⭐⭐</h2>
        <h2 className="text-green-500">In stock</h2>
        <button
          className="flex items-center justify-center gap-x-1 hover:text-red-600 transition-all text-xl"
          onClick={(e) => props.onDelete(e)}
        >
          Delete
          <MdOutlineDeleteOutline size={"1.45rem"} />
        </button>
      </div>
    </div>
  );
};

export default CartObject;
