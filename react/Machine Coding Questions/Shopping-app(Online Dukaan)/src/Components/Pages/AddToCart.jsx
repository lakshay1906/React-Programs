import React, { useContext, useMemo } from "react";
import { ProductObj } from "../../Contexts/ProductObj";
import CartObject from "../CartObject";
import { DataContext } from "../../Contexts/DataContext";

const AddToCart = () => {
  const ProductArr = useContext(ProductObj);
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
    // e.target.parentElement.parentElement.remove();
  }

  return (
    <>
      {ProductArr.current.length && (
        <div className="flex flex-col justify-center mt-8 w-full items-center gap-y-5 mb-10">
          {ProductArr.current.map((ele) => {
            return (
              <CartObject
                keys={ele.id}
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
      )}
      {!ProductArr.current.length && (
        <div className="text-4xl text-center text-[#292929] font-semibold">
          You haven't added anything in cart
        </div>
      )}
    </>
  );
};

export default AddToCart;
