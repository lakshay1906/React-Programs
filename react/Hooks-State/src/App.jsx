import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(10);
  return (
    <>
      <h1>Radhe Radhe</h1>
      <div>The value of count is {count}</div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Update count
      </button>
    </>
  );
}

export default App;
