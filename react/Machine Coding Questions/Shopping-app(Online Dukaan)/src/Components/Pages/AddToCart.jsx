import React, { useContext, useMemo } from "react";
import { ProductObj } from "../../Contexts/ProductObj";
import { DataContext } from "../../Contexts/DataContext";
import CartObject from "../CartObject";

const AddToCart = () => {
  const { productObj, setProductObj } = useContext(ProductObj);
  const data = useContext(DataContext);

  return (
    <div className="flex justify-center w-full mt-8 h-screen">
      {/* <h1>AddToCart</h1> */}
      <CartObject />
    </div>
  );
};

export default AddToCart;

// {https://react-bootstrap.netlify.app/docs/components/carousel/} for corousel
