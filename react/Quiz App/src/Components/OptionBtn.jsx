import React, { useContext } from "react";
import QuizContext from "../Context/QuizContext";

function OptionBtn(props) {
  const { disable } = useContext(QuizContext);
  return (
    <>
      <button
        className="bg-slate-300 rounded-md px-4 py-2 hover:bg-blue-600 transition-all hover:scale-105 img-shadow"
        onClick={(e) => props.onOptionClickFunc(e)}
        disabled={disable}
        style={{ backgroundColor: !disable && "#CBD5E1" }}
      >
        {props.data}
      </button>
    </>
  );
}

export default OptionBtn;
