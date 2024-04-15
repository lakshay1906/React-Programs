import { useContext, useState } from "react";
import Options from "./Components/Options";
import Categories from "./Data/Category";
import { FaHandPointDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import QuizContext from "./Context/QuizContext";
import { shuffleFunction } from "./Context/ShuffleFunctionContext";

function App() {
  console.log("Radhe Radhe");

  const {
    noQues,
    setNoQues,
    categoryValue,
    setCategoryValue,
    difficulty,
    setDifficulty,
    setApiData,
    setLoad,
    quesCounter,
    setQuesCounter,
    setScore,
    setShuffledArray,
  } = useContext(QuizContext);
  const shuffle = useContext(shuffleFunction);

  async function fetchData() {
    setQuesCounter(0);
    setScore(0);
    console.log(noQues, categoryValue, difficulty);
    const rawData = await fetch(
      `https://opentdb.com/api.php?amount=${noQues}&category=${categoryValue}&difficulty=${difficulty}&type=multiple`
    );
    const data = await rawData.json();
    console.log(data);
    setLoad(true);
    setApiData(data);
    setShuffledArray(shuffle(data, quesCounter));
    console.log("Data fetched");
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        id="left"
        className="w-4/12  h-full flex justify-center items-center"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
          alt=""
          className="w-11/12 rounded-2xl img-shadow transition-all"
        />
      </div>
      <div
        id="right"
        className="w-7/12 h-full flex flex-col items-center gap-12"
      >
        <h1 className="text-[2.5rem] font-semibold mt-10 flex items-center gap-x-1 underline underline-offset-4">
          Select your choice <FaHandPointDown className="mt-3" />
        </h1>
        <div
          id="form-container"
          className="flex flex-col text-xl w-full h-fit px-10 py-5"
        >
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-y-6"
          >
            <div id="NumberOfQues" className="flex flex-col gap-1">
              <label htmlFor="quesAmount">Number of Questions: </label>
              <input
                type="number"
                min={1}
                max={50}
                name="quesAmount"
                className="border border-black px-2 py-1"
                onChange={(e) => setNoQues(e.target.value)}
                value={noQues}
                required
              />
            </div>
            <div id="category" className="flex flex-col gap-1">
              <label htmlFor="category">Select Category: </label>
              <select
                name="category"
                className="border border-black px-2 py-1"
                onChange={(e) => setCategoryValue(e.target.value)}
                required
              >
                {Categories.map((ele) => (
                  <Options
                    key={ele.category}
                    title={ele.category}
                    value={ele.value}
                  />
                ))}
              </select>
            </div>
            <div id="difficulty" className="flex flex-col gap-1">
              <label htmlFor="difficulty">Select Difficulty Level: </label>
              <select
                name="difficulty"
                className="border border-black px-2 py-1"
                onChange={(e) => setDifficulty(e.target.value)}
                required
              >
                <Options title={"Easy"} value={"easy"} />
                <Options title={"Medium"} value={"medium"} />
                <Options title={"Hard"} value={"hard"} />
              </select>
            </div>
            <NavLink to={"/quiz"} className="w-fit m-auto">
              <input
                type="submit"
                value={"Generate Quiz"}
                className="bg-slate-700 text-white text-[1.4rem] w-fit m-auto px-3 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all img-shadow "
                onMouseDown={() => fetchData()}
              />
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
