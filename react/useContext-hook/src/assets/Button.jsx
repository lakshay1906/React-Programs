import React, { useContext } from "react";
import { CounterContext } from "../Context/context";

const Button = () => {
  const value = useContext(CounterContext);
  return (
    <>
      <button onClick={() => {}}>
        This is taken directly from App.jsx {value.count}
      </button>
    </>
  );
};

export default Button;
