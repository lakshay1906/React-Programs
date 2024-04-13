import React, { useContext, useEffect } from "react";
import QuizContext from "../Context/QuizContext";
import OptionBtn from "./OptionBtn";

const Quiz = () => {
  const {
    apiData,
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
    load,
    error,
    setError,
  } = useContext(QuizContext);

  function onOptionClick(e) {
    if (e.target.innerText === apiData.results[quesCounter].correct_answer) {
      setScore(score + 1);
      e.target.style.backgroundColor = "#00C04B";
      setbgColor("#00C04B");
      console.log("Right Answer");
    } else {
      e.target.style.backgroundColor = "#FF3535";
      setbgColor("#FF3535");
      console.log("Wrong answer!!");
    }
    setError(false);
    setDisable(true);
  }

  function onNextClick(e) {
    if (!disable) {
      setError(true);
    } else {
      setQuesCounter(quesCounter + 1);
      setDisable(false);
      setShuffledArray(shuffle(apiData, quesCounter));
    }
  }

  function shuffle() {
    let arr = [
      apiData.results[quesCounter].correct_answer,
      ...apiData.results[quesCounter].incorrect_answers,
    ];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  // useEffect(() => {
  //   if (load) setTimeout(() => setShuffledArray(shuffle()), 500);
  //   else setShuffledArray(shuffle());
  // }, [quesCounter]);

  return load ? (
    quesCounter < noQues ? (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-10/12 min-h-5/6 border border-white flex flex-col items-center rounded-xl bg-white gap-y-20 py-5 relative">
          <div
            id="score"
            className="absolute top-1 right-2 text-xl font-semibold"
          >
            Score : {`${score} / ${noQues}`}
          </div>
          <h1 id="question" className=" w-full text-left text-2xl px-5 py-2">
            {apiData.results[quesCounter].question}
          </h1>
          {error && (
            <div className=" bg-[#FF5308] w-[90%] px-2 text-center text-xl py-2 rounded-md -my-16 font-semibold text-white">
              Please select any option to proceed
            </div>
          )}
          <div className="flex flex-col border border-rose-700 w-8/12 justify-center items-center h-60 gap-y-20 text-[1.35rem]">
            <div className=" w-full flex justify-around">
              <OptionBtn
                onOptionClickFunc={onOptionClick}
                data={shuffledArray[0]}
              />
              <OptionBtn
                onOptionClickFunc={onOptionClick}
                data={shuffledArray[1]}
              />
            </div>
            <div className=" w-full flex justify-around">
              <OptionBtn
                onOptionClickFunc={onOptionClick}
                data={shuffledArray[2]}
              />
              <OptionBtn
                onOptionClickFunc={onOptionClick}
                data={shuffledArray[3]}
              />
            </div>
          </div>
          <button
            className="text-2xl bg-slate-800 text-white px-4 py-1 rounded-lg hover:scale-105 transition-all"
            onClick={(e) => onNextClick(e)}
            // disabled={!disable}
          >
            Next
          </button>
        </div>
      </div>
    ) : (
      load && (
        <div className="w-8/12 h-screen m-auto flex justify-center items-center">
          <div className="text-6xl w-full h-[45%] flex justify-center items-center bg-white rounded-3xl">
            Your Score is : {score} / {noQues}
          </div>
        </div>
      )
    )
  ) : (
    <div
      id="container"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-56 h-56 border-8 rounded-[500%] border-t-black animate-spin"></div>
    </div>
  );
};

export default Quiz;

// Next button last question prr jaate hi submit btn bn jae
