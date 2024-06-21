import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/FunctionsReducer";

function SingleBook({ data, idxId }) {
  const dispatch = useDispatch();

  return (
    <div id={idxId} className="w-full h-full flex flex-col items-center">
      <div className="w-10/12 relative group overflow-hidden">
        <img src={data.bookImage} className="w-full" />
        <div className="bg-[#000000d8] absolute -bottom-9 text-white w-full text-center text-lg group-hover:bottom-0 transition-all h-9 bg-black hover:-bottom-10 ">
          <div className="relative cart-hover flex justify-center items-center ">
            <div className="py-[5px] flex justify-center items-center">
              Add To Cart
            </div>
            <div
              className="w-full bg-orange-600 pt-[5px] pb-[6px] flex justify-center items-center absolute bottom-0 hover:cursor-pointer"
              onClick={() => dispatch(addToCart(data))}
            >
              {/* bottom-0 */}
              <CiShoppingCart size={"1.7rem"} className="font-bold" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="capitalize text-center text-[0.9rem] font-semibold mt-2 px-3">
        {data.bookTitle}
      </h2>
      <h2>
        <span className="text-sm line-through text-gray-500 mr-1">₹800</span>
        <span className="text-orange-600 font-semibold">₹699</span>
      </h2>
      <h2 className="text-orange-600 text-sm">Save 30%</h2>
    </div>
  );
}

export default SingleBook;
