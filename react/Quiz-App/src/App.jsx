import { useDispatch, useSelector } from "react-redux";
import Categories from "./Data/Category";
import { NavLink } from "react-router-dom";
import {
  setApiData,
  setCategoryValue,
  setDifficulty,
  setNoQues,
  setUserName,
} from "./Features/QuizSlice";
import { FaHandPointDown } from "react-icons/fa";

function App() {
  console.log("Radhe Radhe");

  // Getting States from our Redux Store
  const userName = useSelector((state) => state.userName);
  const noQues = useSelector((state) => state.noQues);
  const categoryValue = useSelector((state) => state.categoryValue);
  const difficulty = useSelector((state) => state.difficulty);

  // Getting dispatch function to set our state in reducer function
  const dispatch = useDispatch();

  // This function will handle the onsubmit task
  function handleOnSubmit() {
    const rawData = fetch(
      `https://opentdb.com/api.php?amount=${noQues}&category=${categoryValue}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((response) => dispatch(setApiData(response)))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center select-none">
        <div
          id="left"
          className="w-96  h-full flex justify-center items-center"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/206/208/non_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
            alt=""
            className="w-11/12 rounded-2xl img-shadow transition-all"
          />
        </div>
        <div id="right" className="w-7/12 h-full flex flex-col items-center ">
          <h1 className="text-[2.5rem] font-semibold flex items-center gap-x-1 underline underline-offset-4">
            Select your choice <FaHandPointDown className="mt-3" />
          </h1>
          <div
            id="form-container"
            className="flex flex-col text-xl w-full h-fit px-10 py-5"
          >
            <form
              action=""
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-y-5"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="username">Enter your name:</label>
                <input
                  type="text"
                  id="username"
                  value={userName}
                  className="border border-black px-2 py-1"
                  required
                  placeholder="Enter name...."
                  onChange={(e) => dispatch(setUserName(e.target.value))}
                />
              </div>
              <div id="NumberOfQues" className="flex flex-col gap-1">
                <label htmlFor="quesAmount">Number of Questions: </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  id="quesAmount"
                  className="border border-black px-2 py-1"
                  onChange={(e) => dispatch(setNoQues(e.target.value))}
                  value={noQues}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="category">Select Category: </label>
                <select
                  id="category"
                  className="border border-black px-2 py-1"
                  onChange={(e) => dispatch(setCategoryValue(e.target.value))}
                  required
                >
                  {Categories.map((ele) => (
                    <option key={ele.category} value={ele.value}>
                      {ele.category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="difficulty">Select Difficulty Level: </label>
                <select
                  id="difficulty"
                  className="border border-black px-2 py-1"
                  onChange={(e) => dispatch(setDifficulty(e.target.value))}
                  required
                >
                  <option value={"easy"}>Easy</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"hard"}>Hard</option>
                </select>
              </div>
              <NavLink
                to={"/quiz"}
                className={"w-fit flex justify-center mx-auto"}
              >
                <input
                  type="submit"
                  value={"Generate Quiz"}
                  className="bg-yellow-400  text-[1.4rem] w-fit m-auto px-4 py-2 mt-3 rounded-lg cursor-pointer hover:scale-105 transition-all img-shadow hover:font-semibold"
                  onMouseDown={handleOnSubmit}
                />
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
