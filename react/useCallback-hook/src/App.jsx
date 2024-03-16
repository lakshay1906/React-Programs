import { useState } from "react";
import "./App.css";
import { useMemo } from "react";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  useCallback(() => {
    alert("Hello");
    confirm(count);
  }, [count]);
  return (
    <>
      <h1>Radhe Radhe</h1>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </>
  );
}

export default App;
