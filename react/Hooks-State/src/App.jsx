import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(10);
  console.log("Radhe Radhe");
  return (
    <>
      <h1>Radhe Radhe</h1>
      <div>The value of count is {count}</div>
      <button
        onClick={() => {
          count === 20 ? setcount(20) : setcount(count + 1);
        }}
      >
        Update count
      </button>
      <button
        onClick={() => {
          count === 0 ? setcount(0) : setcount(count - 1);
        }}
      >
        Decrease State
      </button>
      {/* the useState is used to change the state of a variable or a value. In the syntax count is used to store the initial value and that initial value is passed in the "useState(0)" here 0 is the initial value. And setCount is a function which is used to change the state  eg:- increament, decrement, multiply, divide and many more task we can pass in the setCount function.....count, setCount aren't keywords we can replace anyother name instead of this but we are using this for more clarity.*/}
    </>
  );
}

export default App;
