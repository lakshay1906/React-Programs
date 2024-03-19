import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CounterContext } from "../context/context";

const Cart = () => {
  const value = useContext(CounterContext);
  return (
    <>
      <FaCartPlus size={"3rem"} />
      <span>{value.counter}</span>
    </>
  );
};

export default Cart;
