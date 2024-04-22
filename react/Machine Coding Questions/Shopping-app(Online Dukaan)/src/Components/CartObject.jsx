import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { ProductObj } from "../Contexts/ProductObj";
import { onQuantityChange } from "../Contexts/onQuantityChangeFunction";

const CartObject = (props) => {
  // const { productObj } = useContext(ProductObj);
  const onQuantityClick = useContext(onQuantityChange);

  console.log(props.quantity);
  // function onQuantityIncrease(e) {
  //   const obj = productObj.filter((ele) => ele.id == props.id)[0];
  //   if (obj.qty <= 5) obj.qty += 1;
  //   console.log(obj);
  // }
  // function onQuantityDecrease() {
  //   const obj = productObj.filter((ele) => ele.id == props.id)[0];
  //   if (obj.qty >= 2) obj.qty -= 1;
  //   console.log(obj);
  // }
  return (
    <div
      id={props.id}
      className="bg-[#232323] text-white w-full max-h-68 flex justify-center items-center py-4 gap-x-4 rounded-2xl px-2"
    >
      <div id="left" className="max-w-60 mx-2">
        <img
          src={props.imgLink}
          alt=""
          className="w-full aspect-square object-contain"
        />
      </div>
      <div
        id="right"
        className="w-9/12 h-full text-[1.3rem] gap-y-2 flex flex-col overflow-y-auto items-start"
      >
        <div className="flex flex-col gap-y-0">
          <div>
            <h2 className=" capitalize">{props.title}</h2>
          </div>
          <h2>{props.price}</h2>
        </div>
        <div
          id="rating"
          className="text-base bg-green-600 w-fit px-[0.37rem] rounded-md flex items-center gap-x-1 text-white"
        >
          {props.rating}
          <IoIosStar />
        </div>
        <div>
          <label htmlFor="qty">Quantity</label>
          <button
            onClick={() => props.quantity > 1 && onQuantityClick(props.id, -1)}
          >
            ◀️
          </button>
          <span>{props.quantity}</span>
          <button
            onClick={() => props.quantity < 6 && onQuantityClick(props.id, +1)}
          >
            ▶️
          </button>
        </div>
        <div>
          <h2
            className="text-green-500"
            style={{ display: props.stock > 1 ? "" : "none" }}
          >
            In stock
          </h2>
          <button
            className="flex items-center justify-center gap-x-1 hover:text-red-600 transition-all text-xl"
            onClick={(e) => props.onDelete(props.id)}
          >
            Delete
            <MdOutlineDeleteOutline size={"1.45rem"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartObject;
