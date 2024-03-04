import { useState, useEffect } from "react";
import Card from "./Components/Card";
import { counterContext } from "./Context/Context";

console.log("Radhe Radhe");
function App() {
  const [count, setCount] = useState(0);
  const [apiData, setData] = useState(null);
  const [question, setQuestion] = useState("");

  async function getData() {
    const raw_data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    );
    const data = await raw_data.json();
    console.log(data);
    setData(data);
    console.log(data.results[count].question);
    setQuestion(data.results[count].question);
  }
  useEffect(() => {
    getData();
  }, []);

  function iterate() {
    console.log(apiData);
    // setQuestion(apiData.results);
  }
  useEffect(() => {
    iterate();
  }, [count]);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <div
        id="body"
        className="w-full h-screen bg-[url('https://wallpapercave.com/wp/wp7422937.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center"
      >
        <Card question={question} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Counter {count}
        </button>
      </div>
    </counterContext.Provider>
  );
}

export default App;
