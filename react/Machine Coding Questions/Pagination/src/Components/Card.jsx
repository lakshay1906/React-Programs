import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        id="cardContainer"
        className="w-2/12 bg-gray-500 text-white flex flex-col m-auto rounded pt-3 p-x-2 gap-y-1"
      >
        <div className="w-11/12 m-auto h-36">
          <img
            src={props.imgLink}
            alt="iphone 9"
            className="m-auto rounded h-full w-full"
          />
        </div>
        <h1 className="w-fit m-auto text-xl">{props.brandName}</h1>
        <h1 className="w-fit m-auto text-xl">{props.productName}</h1>
        <p className=" text-center text-lg leading-6">{props.desc}</p>
        <h2 className="m-auto text-lg">₹{props.price}</h2>
        <h2 className="m-auto text-lg">⭐⭐⭐⭐</h2>
        <button className="m-auto text-xl bg-blue-800 rounded w-full h-8">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
