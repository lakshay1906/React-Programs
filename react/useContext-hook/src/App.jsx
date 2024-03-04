import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import { counterContext } from "./Context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </counterContext.Provider>
    </>
  );
}

export default App;
