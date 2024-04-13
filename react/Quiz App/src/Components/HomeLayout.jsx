import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import QuizContext from "../Context/QuizContext";
import { shuffleFunction } from "../Context/ShuffleFunctionContext";

const HomeLayout = () => {
  const [noQues, setNoQues] = useState(10);
  const [categoryValue, setCategoryValue] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [apiData, setApiData] = useState({});
  const [quesCounter, setQuesCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [load, setLoad] = useState(false);
  const [shuffledArray, setShuffledArray] = useState([]);
  const [disable, setDisable] = useState(false);
  const [bgColor, setbgColor] = useState("none");
  const [error, setError] = useState(false);

  function shuffle(data, counter) {
    let arr = [
      data.results[counter].correct_answer,
      ...data.results[counter].incorrect_answers,
    ];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log(counter);
    return arr;
  }

  return (
    <>
      <QuizContext.Provider
        value={{
          noQues,
          setNoQues,
          categoryValue,
          setCategoryValue,
          difficulty,
          setDifficulty,
          apiData,
          setApiData,
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
          setLoad,
          error,
          setError,
        }}
      >
        <shuffleFunction.Provider value={shuffle}>
          <Outlet />
        </shuffleFunction.Provider>
      </QuizContext.Provider>
    </>
  );
};

export default HomeLayout;
