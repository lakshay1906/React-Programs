import React, { useContext, useState } from "react";
import { CorrectAnswer } from "../Context/CorrectAnswer";
import { counterContext } from "../Context/CounterContext";

const Options = (props) => {
  const answer = useContext(CorrectAnswer);
  const cardstates = useContext(counterContext);
  const { result, setResult } = useContext(counterContext);

  return (
    <button
      className={`text-3xl border border-black flex justify-center items-center w-56 h-fit hover:cursor-pointer hover:scale-110 hover:rounded-xl transition-all`}
      onClick={(e) => {
        if (answer === e.target.innerText) {
          e.target.style.backgroundColor = "lightgreen";
          setResult(result + 1);
        } else e.target.style.backgroundColor = "pink";
        e.target.disabled = cardstates.btnDisabled;
        console.log(result);
      }}
    >
      {props.text}
    </button>
  );
};

export default Options;
