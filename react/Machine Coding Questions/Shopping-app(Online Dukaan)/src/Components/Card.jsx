import React, { useContext, useRef, useState } from "react";
import { CartCounter } from "../Contexts/CartCounter";
import { ProductObj } from "../Contexts/ProductObj";
import { DataContext } from "../Contexts/DataContext";
import { CartData } from "../Contexts/CartData";

const Card = (props) => {
  const { counter, setCounter } = useContext(CartCounter);
  // const CartData = useContext(CartData);

  const data = useContext(DataContext);
  let productName = "";
  let arr = useRef([]);

  function onCartClick(e) {
    productName = e.target.parentNode.innerText.split("\n")[1];
    arr.current.push(
      ...data.products.filter((ele) => ele.title === productName)
    );
    counter >= 20
      ? alert("Your cart is full now!!\nPlease proceed to checkout first")
      : setCounter(arr.current.length);
    console.log(arr);
  }

  return (
    <>
      <div
        id="cardContainer"
        className="w-56 bg-gray-500 text-white flex flex-col m-auto rounded pt-3 p-x-2 gap-y-1"
        key={props.productName}
      >
        {/* <h1>{cartData.length}</h1> */}
        <div className="w-11/12 m-auto h-36">
          <img
            src={props.imgLink}
            alt={props.productName}
            className="m-auto rounded h-full w-full"
          />
        </div>
        <h1 className="w-fit m-auto text-xl text-center">{props.brandName}</h1>
        <div className="h-16 whitespace-pretty overflow-hidden overflow-ellipsis w-full px-1">
          <h1 className="w-fit m-auto text-xl text-center underline-offset-1">
            {props.productName}
          </h1>
        </div>
        <div className=" h-[3.2rem] whitespace-pretty overflow-hidden overflow-ellipsis w-full px-1">
          <p className=" text-center text-lg leading-6">{props.desc}</p>
        </div>
        <h2 className="m-auto text-lg">₹{props.price}</h2>
        <h2 className="m-auto text-lg">⭐⭐⭐⭐</h2>
        <button
          className="m-auto text-xl bg-blue-800 rounded w-full h-8"
          onClick={(e) => {
            onCartClick(e);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
