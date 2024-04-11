import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Options from "./Options";
import { CorrectAnswer } from "../Context/CorrectAnswer";
import { counterContext } from "../Context/CounterContext";

const Card = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [result, setResult] = useState(0);
  console.log(data);

  let optionArr = [
    data.results[counter].correct_answer,
    ...data.results[counter].incorrect_answers,
  ];
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  const shuffledArray = shuffle(optionArr);

  return (
    <>
      {!showScore && (
        <counterContext.Provider
          value={{ counter, btnDisabled, setBtnDisabled, result, setResult }}
        >
          <CorrectAnswer.Provider value={data.results[counter].correct_answer}>
            <div
              id="container"
              className="w-10/12 min-h-4/5 p-5 text-invert backdrop-blur-xl rounded-3xl flex flex-col items-center gap-8 border border-black "
            >
              <div id="question" className=" w-11/12 bg-white p-3 rounded-lg">
                <h1 className="text-4xl">{data.results[counter].question}</h1>
              </div>
              <div
                id="options"
                className="border border-red-700 w-10/12 flex flex-col flex-wrap items-center justify-center min-h-2/4 bg-white rounded-lg gap-y-10 px-10 py-5"
              >
                <div className="w-full flex justify-center items-center gap-x-[30%]">
                  <Options text={shuffledArray[0]} />
                  <Options text={shuffledArray[1]} />
                </div>
                <div className="w-full flex justify-center items-center gap-x-[30%]">
                  <Options text={shuffledArray[2]} />
                  <Options text={shuffledArray[3]} />
                </div>
              </div>
              <button
                id="next"
                className="text-3xl bg-white hover:scale-110 transition-all p-px px-3 rounded-lg flex justify-center items-center  duration-75"
                onClick={() => {
                  setCounter(counter + 1);
                  if (counter > 9) {
                    setShowScore(true);
                    console.log(counter);
                  }
                }}
              >
                Next {counter}
              </button>
            </div>
          </CorrectAnswer.Provider>
        </counterContext.Provider>
      )}
      {showScore && (
        <div>
          You Have Scored {result}/{data.results.length}
        </div>
      )}
    </>
  );
};

export default Card;
