import React, { useContext, useEffect, useState } from "react";
import { ProductObj } from "../../Contexts/ProductObj";
import CartObject from "../CartObject";
import { onDeleteFunction } from "../../Contexts/DeleteFromCart";

const AddToCart = () => {
  const { productObj, nothing } = useContext(ProductObj);
  const removeElementById = useContext(onDeleteFunction);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    // setPrice(productObj.map((ele) => ele.price * ele.qty));
    setTax(
      Math.trunc(
        (productObj
          .map((ele) => ele.price * ele.qty)
          .reduce((a, b) => a + b, 0) *
          18) /
          100
      )
    );
  }, [productObj, nothing]);

  return (
    <>
      {productObj.length ? (
        <div className="flex justify-left items-center gap-x-5 mt-16">
          <div className="mt-5 ml-5 w-7/12 h-[calc(100vh-7rem)] items-center overflow-y-auto">
            <div className="w-full px-2 flex flex-col items-center justify-center gap-y-5">
              {productObj.map((ele) => {
                return (
                  <CartObject
                    key={ele.id}
                    id={ele.id}
                    imgLink={ele.thumbnail}
                    title={ele.title}
                    desc={ele.description}
                    price={ele.price}
                    rating={ele.rating}
                    stock={ele.stock}
                    discount={ele.discountPercentage}
                    quantity={ele.qty}
                    onDelete={removeElementById}
                  />
                );
              })}
            </div>
          </div>
          <div
            id="billing"
            className="bg-[#292929] w-[37%] h-[calc(100vh-8rem)] text-white text-xl overflow-y-auto"
          >
            <h2 className="my-2 ml-5">
              <span className=" underline underline-offset-4">Total Bill</span>{" "}
              :
            </h2>
            <div id="purchasedItems">
              {productObj.map((ele) => {
                return (
                  <div key={ele.id} className="flex justify-between mx-5">
                    <span>{ele.title}</span>
                    <span>
                      = {"  "}
                      {ele.price * ele.qty}
                      {`(${ele.qty})`}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="w-[95%] h-1 bg-slate-400 m-auto rounded-2xl my-2"></div>
            <div className="flex justify-between mx-5">
              <span>Amount Before Tax</span>
              <span>
                = {"  "}
                {productObj
                  .map((ele) => ele.price * ele.qty)
                  .reduce((a, b) => a + b, 0)}
              </span>
            </div>
            <div className="w-[95%] h-1 bg-slate-400 m-auto rounded-2xl my-2"></div>
            <div className="flex justify-between mx-5">
              <span>(18% GST)</span>
              <span>
                = {"  "}
                {tax}
              </span>
            </div>
            <div className="w-[95%] h-1 bg-slate-400 m-auto rounded-2xl my-2"></div>
            <div className="flex justify-between mx-5 mb-4">
              <span>Grand Total</span>
              <span>
                = {"  "}
                <span className="underline underline-offset-4 decoration-double decoration-green-500 ">
                  {productObj
                    .map((ele) => ele.price * ele.qty)
                    .reduce((a, b) => a + b, 0) + tax}
                </span>
              </span>
            </div>
            <div className="w-[30%] h-1 bg-slate-400 m-auto rounded-2xl my-1"></div>
            <div className="w-[30%] h-1 bg-slate-400 m-auto rounded-2xl my-1 mb-3"></div>
            <div className="w-full flex justify-center items-center py-1 mt-6">
              <button className="m-auto w-fit bg-blue-600 rounded-md px-3 py-1 hover:scale-105 transition-all ">
                Proceed to Purchase
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-5xl text-center text-[#292929] font-semibold w-full h-[calc(100vh-1.5rem)] flex justify-center items-center">
          Cart is empty !!
        </div>
      )}
    </>
  );
};

export default AddToCart;

// Add a proceed to buy button after bill
