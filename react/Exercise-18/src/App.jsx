import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card_1";

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setData] = useState([]);
  async function fetchData() {
    let rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await rawData.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Get Data
      </button>
      <div className="container">
        {apiData.map((element) => {
          return (
            <Card
              key={element.id}
              userId={element.userId}
              id={element.id}
              title={element.title}
              body={element.body}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
