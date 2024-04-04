import React, { useContext } from "react";
import Component1 from "./Component_1";
import { counterContext } from "../../Context/context";

const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        I am a button
        <span>
          <Component1 />
        </span>
      </button>
    </div>
  );
};

export default Button;
