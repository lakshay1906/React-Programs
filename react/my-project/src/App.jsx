import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState([]);
  const [counter, setCounter] = useState(0);
  // setCount((pre) => pre.push(5, 6, 7, 8));
  useEffect(() => {
    count.push(1, 2, 3, 4);
  }, []);
  return (
    <>
      <div>
        {count.map((ele) => (
          <span key={ele}>{ele}</span>
        ))}
      </div>
      <button
        onClick={() => {
          count.push(10);
          console.log("Radhe Radhe");
          setCounter(counter + 1);
        }}
      >
        Button {counter}
      </button>
    </>
  );
}

export default App;
