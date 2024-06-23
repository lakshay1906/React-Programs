import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartProducts,
  setNotification,
  setNotificationTimer,
  setSingleProduct,
} from "../Features/ProductReducer";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.productData.cartProducts);

  function onCartClick() {
    let cart = false;
    cart = cartProducts.filter((prod) => prod.id === data.id);
    if (!cart.length) {
      dispatch(setCartProducts(data));
      dispatch(setNotification(true));
    } else {
      dispatch(setNotification(false));
      dispatch(setNotificationTimer(true));
      setTimeout(() => dispatch(setNotificationTimer(false)), 2000);
    }
  }
  return (
    <>
      <div
        id={data.id}
        className="w-60 bg-[#292929] text-white flex flex-col m-auto rounded h-[28rem]"
      >
        <NavLink
          to={"/pdp"}
          className=" w-full h-full flex flex-col m-auto gap-y-1 mb-1 pt-3 rounded"
          onClick={(e) => dispatch(setSingleProduct(data))}
        >
          <div className="w-11/12 m-auto h-36">
            <img
              src={data.image}
              className="m-auto rounded h-full w-full aspect-[1/1]"
            />
          </div>
          <div className="w-full px-2 mb-2">
            <p className="w-fit m-auto text-xl text-center underline-offset-1">
              {data.title.length >= 35
                ? data.title.slice(0, 36) + "...."
                : data.title}
            </p>
          </div>
          <div className="w-full px-2">
            <p className=" text-center text-lg leading-6">
              {data.description.length >= 85
                ? data.description.slice(0, 88) + "...."
                : data.description}
            </p>
          </div>
          <h2 className="m-auto text-lg">₹ {Number(data.price).toFixed(0)}</h2>
          {/* <h2 className="m-auto text-lg">⭐⭐⭐⭐</h2> */}
        </NavLink>
        <button
          className="m-auto text-xl bg-blue-800 rounded w-full h-8 -mt-1 focus-visible:outline-none focus-visible:border-none"
          onClick={onCartClick}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
