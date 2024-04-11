import React, { useState, useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import QuizContext from "../Context/QuizContext";

const Quiz = () => {
  const {
    apiData,
    setApiData,
    noQues,
    categoryValue,
    difficulty,
    quesCounter,
    setQuesCounter,
    optionArr,
    setOptionArr,
  } = useContext(QuizContext);
  const [load, setLoad] = useState(false);

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  let shuffledArray = [];
  let optionArray = [
    data.results[quesCounter].correct_answer,
    ...data.results[quesCounter].incorrect_answers,
  ];
  async function fetchData() {
    console.log(noQues, categoryValue, difficulty);
    const rawData = await fetch(
      `https://opentdb.com/api.php?amount=${noQues}&category=${categoryValue}&difficulty=${difficulty}&type=multiple`
    );
    const data = await rawData.json();
    console.log(data);

    shuffledArray = optionArray;
    console.log(shuffledArray);

    setApiData(data);
    setLoad(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    load && (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-10/12 min-h-5/6 border border-white flex flex-col items-center rounded-xl bg-white gap-y-20 py-5">
          <h1
            id="question"
            className="border border-black w-full text-left text-2xl px-5 py-2"
          >
            {apiData.results[quesCounter].question}
          </h1>
          <div className="flex flex-col border border-rose-700 w-8/12 justify-center items-center h-60 gap-y-20 text-[1.35rem]">
            <div className=" w-full flex justify-around">
              <button className="bg-slate-300 rounded-md px-4 py-2 hover:bg-blue-600 transition-all hover:scale-105 img-shadow">
                {shuffledArray[0] ? "hello" : "not available"}
              </button>
              <button className="bg-slate-300 rounded-md px-4 py-2 hover:bg-blue-600 transition-all hover:scale-105 img-shadow">
                {shuffledArray[1]}
              </button>
            </div>
            <div className=" w-full flex justify-around">
              <button className="bg-slate-300 rounded-md px-4 py-2 hover:bg-blue-600 transition-all hover:scale-105 img-shadow">
                {shuffledArray[2]}
              </button>
              <button className="bg-slate-300 rounded-md px-4 py-2 hover:bg-blue-600 transition-all hover:scale-105 img-shadow">
                {shuffledArray[3]}
              </button>
            </div>
          </div>
          <button
            className="text-2xl bg-slate-800 text-white px-4 py-1 rounded-lg hover:scale-105 transition-all"
            onClick={() => setQuesCounter(quesCounter + 1)}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
};

export default Quiz;

// export const fetchData = async function (state, dispatch) {
//   const rawData = await fetch(
//     `https://opentdb.com/api.php?amount=${state.noQues}&category=${state.categoryValue}&difficulty=${state.difficulty}&type=multiple`
//   );
//   const data = await rawData.json();
//   //   dispatch({ type: "API_DATA", nextApiData: data });
//   console.log(state, dispatch);
//   return data;
// };
