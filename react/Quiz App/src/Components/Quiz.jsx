import React, { useContext, useState, useRef } from "react";
import QuizContext from "../Context/QuizContext";
import { shuffleFunction } from "../Context/ShuffleFunctionContext";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  const {
    apiData,
    setApiData,
    noQues,
    quesCounter,
    setQuesCounter,
    score,
    setScore,
    shuffledArray,
    setShuffledArray,
    disable,
    setDisable,
    bgColor,
    setbgColor,
    setLoad,
    load,
    error,
    setError,
  } = useContext(QuizContext);
  const shuffle = useContext(shuffleFunction);
  const [selected, setSelected] = useState("");
  const optionRef = useRef(null);

  function onOptionClick(option) {
    setSelected(option);
    if (option === apiData.results[quesCounter].correct_answer)
      setScore(score + 1);
    setError(false);
    setDisable(true);
  }

  function handleSelect(option) {
    if (
      selected === option &&
      selected === apiData.results[quesCounter].correct_answer
    ) {
      return "bg-green-700 text-white";
    } else if (
      selected === option &&
      selected !== apiData.results[quesCounter].correct_answer
    ) {
      return "bg-red-700 text-white";
    } else if (option === apiData.results[quesCounter].correct_answer) {
      return "bg-green-700 text-white";
    }
  }

  function onNextClick() {
    setSelected("");
    if (!disable) setError(true);
    else {
      setQuesCounter(quesCounter + 1);
      setDisable(false);
      if (quesCounter + 1 < noQues)
        setShuffledArray(shuffle(apiData, quesCounter + 1));
    }
  }

  function onTryAgainClick() {
    setQuesCounter(0);
    setScore(0);
    setLoad(false);
    setApiData({});
  }

  return load ? (
    quesCounter < noQues ? (
      <div className="max-w-full min-h-screen flex flex-col justify-between items-center pb-28">
        <div
          id="score"
          className="my-2 mt-5 mr-3 text-xl font-semibold bg-white px-2 py-1 rounded self-end w-fit"
        >
          Score : {`${score} / ${noQues}`}
        </div>
        <div className="w-9/12 min-h-5/6 border border-white flex flex-col items-center rounded-xl bg-white gap-y-5 py-5 res-card">
          <div className="mx-3 ml-6 mb-4 h-fit self-start">
            <div className="text-2xl font-semibold text-gray-700  h-fit flex items-start">
              <span className="mr-2 flex">
                <span>Ques:</span>{" "}
                <span className="font-bold">{quesCounter + 1}</span>
              </span>
              <span>{apiData.results[quesCounter].question}</span>
            </div>
          </div>
          {error && (
            <div className=" bg-[#FF5308] w-[90%] px-2 text-center text-xl py-2 rounded-md  font-semibold text-white">
              Please select any option to proceed
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 text-lg  w-8/12 h-fit res-options">
            {shuffledArray.map((option) => (
              <button
                key={option}
                ref={optionRef}
                className={`w-full p-4 text-left bg-gray-200 rounded-lg ${
                  !selected && "hover:bg-gray-300"
                } ${selected && handleSelect(option)}`}
                onClick={() => onOptionClick(option)}
                // style={{ backgroundColor: !disable && "#CBD5E1" }}
                disabled={disable}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="text-2xl bg-slate-800 text-white px-4 py-1 rounded-lg hover:scale-105 transition-all"
            onClick={onNextClick}
          >
            {quesCounter + 2 <= Number(noQues) ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    ) : (
      load && (
        <div
          id="scoreBoard"
          className="w-8/12 h-screen m-auto flex justify-center items-center"
        >
          <div className="text-[3.75em] w-full h-[45%] flex justify-center items-center bg-white rounded-3xl flex-col gap-y-5">
            <div className="flex gap-4 res-scoreBoard-score">
              <p>Your Score is :</p>{" "}
              <span className=" font-semibold">
                {score} / {noQues}
              </span>
            </div>
            <NavLink to={"/"}>
              <button
                onClick={onTryAgainClick}
                className="w-fit bg-blue-600 text-white px-4 py-2 font-semibold text-2xl rounded-md hover:scale-105 transition-all"
              >
                Try Again
              </button>
            </NavLink>
          </div>
        </div>
      )
    )
  ) : (
    <div
      id="container"
      className="max-w-full min-h-screen flex justify-center items-center"
    >
      <div className="w-56 h-56 border-8 rounded-full border-t-black animate-spin"></div>
    </div>
  );
};

export default Quiz;
