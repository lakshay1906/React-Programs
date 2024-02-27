import { useState, useMemo } from "react";
import "./App.css";

let nums = new Array(90_000_00).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 89_000_00,
  };
});
function App() {
  const [numbers, setNumber] = useState(nums);
  const [count, setCount] = useState(0);
  // console.log(arr);
  const magical = useMemo(() => {
    numbers.find((item) => item.isMagical === true);
  }, [numbers]);
  return (
    <>
      <h1>Radhe Radhe</h1>
      <span>Magical Number is: {magical}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count == 15) {
            new Array(100_000_00).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 99_000_00,
              };
            });
          }
        }}
      >
        Click {count}
      </button>
    </>
  );
}

export default App;
