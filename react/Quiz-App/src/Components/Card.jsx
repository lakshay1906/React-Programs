import React from "react";
import Options from "./Options";
import { counterContext } from "../Context/Context";
import { useContext } from "react";

const Card = (props) => {
  const counter = useContext(counterContext);
  return (
    <div
      id="container"
      className="w-10/12 h-4/5 p-5 text-invert backdrop-blur-xl rounded-3xl flex flex-col items-center gap-8 border border-black relative"
    >
      <div id="question" className=" w-11/12 bg-white p-3 rounded-lg">
        <h1 className="text-4xl">{props.question}</h1>
      </div>
      <div
        id="options"
        className="border border-white w-10/12 flex flex-wrap items-center h-2/4 bg-white rounded-lg"
      >
        <Options text="Washington" />
        <Options text="New Mexico" />
        <Options text="Colorado" />
        <Options text="Arizona" />
      </div>
      <button
        id="next"
        className="text-3xl bg-white hover:scale-110 transition-all p-px px-3 rounded-lg flex justify-center items-center  duration-75"
        onClick={() => {
          counter.setCount(counter.count + 1);
        }}
      >
        Next {counter.count}
      </button>
    </div>
  );
};

export default Card;
