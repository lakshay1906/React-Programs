import React, { useReducer, useState } from "react";
import { Outlet } from "react-router-dom";
import QuizContext from "../Context/QuizContext";

const HomeLayout = () => {
  const [noQues, setNoQues] = useState(10);
  const [categoryValue, setCategoryValue] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [apiData, setApiData] = useState({});
  const [quesCounter, setQuesCounter] = useState(0);
  const [optionArr, setOptionArr] = useState([
    "option 1 , option 2 , option 3 , option 4",
  ]);

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
          optionArr,
          setOptionArr,
        }}
      >
        <Outlet />
      </QuizContext.Provider>
    </>
  );
};

export default HomeLayout;
