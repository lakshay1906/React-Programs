import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBtnDisable,
  setQuesCounter,
  setScore,
  setShuffledArray,
} from "../Features/QuizSlice";
import { NavLink } from "react-router-dom";

function Quiz() {
  // Get the Data from Redux Store
  const [greenColor, setGreenColor] = useState("bg-green-700");
  const apiData = useSelector((state) => state.apiData);
  const noQues = useSelector((state) => state.noQues);
  const quesCounter = useSelector((state) => state.quesCounter);
  const score = useSelector((state) => state.score);
  const shuffledArray = useSelector((state) => state.shuffledArray);
  const userName = useSelector((state) => state.userName);
  const btnDisable = useSelector((state) => state.btnDisable);

  // Get update the store through reducer function
  const dispatch = useDispatch();

  if (apiData.hasOwnProperty("results")) console.log(apiData);

  // This function checks wheather the answer is correct or not
  function handleAnswerOptionClick(e, option) {
    if (apiData.results[quesCounter].correct_answer === option) {
      dispatch(setScore(score + 1));
      e.target.classList.add(greenColor);
      e.target.classList.remove("hover:bg-gray-300");
      console.dir(e.target);
    }
    dispatch(setBtnDisable(true));
  }

  // This function increase the quescounter and takes the user to the next question
  function onNextClick() {
    setGreenColor("bg-gray-200");
    dispatch(setQuesCounter(quesCounter + 1));
    dispatch(setBtnDisable(false));
  }

  // This function performs shuffling between the options
  function shuffle() {
    if (quesCounter + 1 <= noQues) {
      let arr = [
        apiData.results[quesCounter].correct_answer,
        ...apiData.results[quesCounter].incorrect_answers,
      ];
      return arr.sort(() => Math.random() - 0.5);
    }
  }

  // Function onTryAgain click
  function onTryAgain() {
    dispatch(setScore(0));
    dispatch(setQuesCounter(0));
  }

  useEffect(() => {
    if (apiData.hasOwnProperty("results"))
      dispatch(setShuffledArray(shuffle()));
    console.log(quesCounter);
  }, [apiData, quesCounter]);
  return (
    <>
      {apiData.hasOwnProperty("results") ? (
        <>
          {quesCounter + 1 <= noQues ? (
            <>
              <div className="flex justify-center items-center h-screen ">
                <div className="w-full max-w-[60%] max-h-[100%]  p-5 bg-white rounded-lg shadow-md overflow-y-auto">
                  <div className="mb-4 max-w-full h-fit">
                    <h2 className="text-2xl font-semibold text-gray-700 max-w-full h-fit">
                      <span className="mr-4">
                        Ques:{" "}
                        <span className="font-bold">{quesCounter + 1}</span>
                      </span>
                      {apiData.results[quesCounter].question}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-lg">
                    {shuffledArray.map((option, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleAnswerOptionClick(e, option)}
                        className="w-full p-4 text-left bg-gray-200 rounded-lg hover:bg-gray-300"
                        // style={{backgroundColor: }}
                        disabled={btnDisable}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      onClick={onNextClick}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                    >
                      {quesCounter === noQues - 1 ? "Submit" : "Next"}
                    </button>
                  </div>
                </div>
                <div className="fixed top-3 right-5 w-fit px-3 py-1 bg-white rounded text-lg">
                  Score: <span className=" font-semibold">{score}</span>
                </div>
              </div>
            </>
          ) : (
            <div className=" h-screen flex justify-center items-center">
              <div className="w-full max-w-xl p-5 bg-white rounded-lg shadow-md text-center text-2xl flex flex-col gap-10">
                <h2 className="text-[2.5rem] font-semibold text-gray-700">
                  Scoreboard
                </h2>
                <div className="flex flex-col gap-1 text-2xl">
                  <p className=" text-gray-600 grid grid-cols-2">
                    <span className="text-right">Username:</span>{" "}
                    <span className="font-bold text-left pl-7">{userName}</span>
                  </p>
                  <p className=" text-gray-600 grid grid-cols-2">
                    <span className="text-right">Score:</span>{" "}
                    <span className="font-bold text-left pl-7">{score}</span>
                  </p>
                </div>
                <NavLink to={"/"}>
                  <button
                    onClick={onTryAgain}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Try Again
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div
            id="loader"
            className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-40 w-40"
          ></div>
        </div>
      )}
    </>
  );
}

export default Quiz;
