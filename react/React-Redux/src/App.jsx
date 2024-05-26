import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Increment,
  Decrement,
  Multiply,
  IncrementByAmount,
  Hide,
} from "./Redux/Features/Counter/CounterSlice";
import Data from "./Components/Data";

function App() {
  const count = useSelector((state) => state.counter.value);
  const hide = useSelector((state) => state.counter.hidden);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex">
        <button onClick={() => dispatch(Decrement())}>
          <h1>-</h1>
        </button>
        <h1 style={{ display: hide && "none" }}>{count}</h1>
        <button onClick={() => dispatch(Increment())}>
          <h1>+</h1>
        </button>
      </div>
      <button onClick={() => dispatch(IncrementByAmount(2))}>+5</button>
      <button
        onClick={() => {
          dispatch(Hide());
          console.log(hide);
        }}
      >
        Hide
      </button>
      <Data />
    </>
  );
}

export default App;

/* npm install @reduxjs/toolkit
   npm install react-redux */
