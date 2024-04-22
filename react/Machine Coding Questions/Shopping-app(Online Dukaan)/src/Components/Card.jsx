import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductObj } from "../Contexts/ProductObj";

const Card = (props) => {
  const { setProductId, disableCartBtn } = useContext(ProductObj);

  return (
    <>
      <div
        id={props.id}
        className="w-60 bg-gray-500 text-white flex flex-col m-auto rounded h-[28rem]"
      >
        <NavLink
          to={"/productPage"}
          className=" w-full h-full flex flex-col m-auto gap-y-2 mb-1 pt-3 rounded"
          onClick={(e) => setProductId(props.id)}
        >
          <div className="w-11/12 m-auto h-36">
            <img
              src={props.imgLink}
              alt={props.productName}
              className="m-auto rounded h-full w-full aspect-[1/1]"
            />
          </div>
          <h1 className="w-fit m-auto text-xl text-center">
            {props.brandName}
          </h1>
          <div className="max-h-16 whitespace-pretty overflow-hidden overflow-ellipsis w-full px-0">
            <p className="w-fit m-auto text-xl text-center underline-offset-1">
              {props.productName}
            </p>
          </div>
          <div className=" h-[3.2rem] whitespace-pretty overflow-hidden overflow-ellipsis w-full px-1">
            <p className=" text-center text-lg leading-6">{props.desc}</p>
          </div>
          <h2 className="m-auto text-lg">₹{props.price}</h2>
          <h2 className="m-auto text-lg">⭐⭐⭐⭐</h2>
        </NavLink>
        <div>
          {disableCartBtn ? (
            <button className="m-auto text-xl bg-red-700 rounded w-full h-8 -mt-1">
              Remove From Cart
            </button>
          ) : (
            <button
              className="m-auto text-xl bg-blue-800 rounded w-full h-8 -mt-1"
              onClick={(e) => {
                props.onCartClick(props.id, e);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
