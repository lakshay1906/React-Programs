import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartProducts } from "../Features/ProductReducer";

function PDP() {
  const product = useSelector((state) => state.productData.singleProduct);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4 w-56 flex items-center justify-center">
          <img src={product.image} className="w-[50%]" />
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm">
            By{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              ABC Company
            </a>
          </p>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">₹</span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {Number(product.price).toFixed(0)}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">Save 12%</p>
              <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <p className="text-gray-500">{product.description}</p>

          <div className="flex py-4 space-x-4">
            <button
              type="button"
              className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              onClick={() => dispatch(setCartProducts(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDP;
