import React, { useContext, useMemo } from "react";
import { ProductObj } from "../../Contexts/ProductObj";
import CartObject from "../CartObject";
import { DataContext } from "../../Contexts/DataContext";

const AddToCart = () => {
  const { productObj, cartCounter, setCartCounter } = useContext(ProductObj);
  const data = useContext(DataContext);
  let eleName = "";

  function onDelete(e) {
    eleName = e.target.parentElement.innerText.split("\n")[0];
    console.log(
      ...data.products.filter(
        (ele) => ele.title.toLowerCase() === eleName.toLowerCase()
      )
    );
    console.log(eleName);
    e.target.parentElement.parentElement.remove();
  }

  return (
    <>
      {productObj.current.length && (
        <div className="flex justify-left items-center gap-x-5 my-16">
          <div className="flex flex-col justify-center mt-5 ml-5 w-[50rem] items-center gap-y-5 border border-black ">
            {productObj.current.map((ele) => {
              return (
                <CartObject
                  key={ele.id}
                  value={ele.id}
                  imgLink={ele.thumbnail}
                  title={ele.title}
                  desc={ele.description}
                  price={ele.price}
                  discount={ele.discountPercentage}
                  onDelete={onDelete}
                />
              );
            })}
          </div>
          <div
            id="billing"
            className="border border-green-800 w-[30rem] h-[calc(100vh-12rem)] fixed top-[5.3rem] right-5"
          ></div>
        </div>
      )}
      {!productObj.current.length && (
        <div className="text-4xl text-center text-[#292929] font-semibold">
          You haven't added anything in cart
        </div>
      )}
    </>
  );
};

export default AddToCart;
