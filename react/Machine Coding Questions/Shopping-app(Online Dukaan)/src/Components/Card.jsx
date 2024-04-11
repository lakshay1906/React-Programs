import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  window.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      if (e.target.tagName === "A") console.log(e.target.parentNode.id);
      else if (e.target.tagName === "IMG" || e.target.tagName === "P")
        console.log(e.target.parentNode.parentNode.parentNode.id);
      else console.log(e.target.parentNode.parentNode.id);
    }
  });
  return (
    <>
      <div
        id={props.keyId}
        className="w-56 bg-gray-500 text-white flex flex-col m-auto rounded"
      >
        <NavLink
          // to={"/productPage"}
          className=" w-full h-full flex flex-col m-auto gap-y-2 mb-1 border border-white pt-3"
        >
          <div className="w-11/12 m-auto h-36">
            <img
              src={props.imgLink}
              alt={props.productName}
              className="m-auto rounded h-full w-full"
            />
          </div>
          <h1 className="w-fit m-auto text-xl text-center">
            {props.brandName}
          </h1>
          <div className="max-h-16 whitespace-pretty overflow-hidden overflow-ellipsis w-full px-1">
            <h1 className="w-fit m-auto text-xl text-center underline-offset-1">
              {props.productName}
            </h1>
          </div>
          <div className=" h-[3.2rem] whitespace-pretty overflow-hidden overflow-ellipsis w-full px-1">
            <p className=" text-center text-lg leading-6">{props.desc}</p>
          </div>
          <h2 className="m-auto text-lg">₹{props.price}</h2>
          <h2 className="m-auto text-lg">⭐⭐⭐⭐</h2>
        </NavLink>
        <button
          className="m-auto text-xl bg-blue-800 rounded w-full h-8 -mt-1"
          onClick={(e) => {
            props.onCartClick(e);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
