import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Value Incremented");
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      console.log("Value Decremented");
      return { ...state, count: state.count - 1 };
    case "HIDDEN":
      !state.hidden
        ? console.log("Value is Hidden")
        : console.log("Value is not Hidden");
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    hidden: false,
  });
  return (
    <>
      <div>
        <h1 style={{ display: state.hidden ? "none" : "" }}>
          Value: {state.count}
        </h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "HIDDEN" });
          }}
        >
          Hidden
        </button>
      </div>
    </>
  );
}

export default App;
