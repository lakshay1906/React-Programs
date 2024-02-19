import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let a = useRef(0);
  let b = 0;

  useEffect(() => {
    a.current++;
    b++;
    console.log(`Rerendering.... ${a.current} and value of b is ${b}`);
  });

  // Variable b is not able to persist its value because its a normal variable and whenever count is changing the page rerender itself But on the other hand varibale a is able persist it value because value in variable a is going through useRef hook. useRef hook is used to persist value of a variable. When a page or a component rerender useRef hook help the varibale to persist its value.

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <button onClick={()=> a.current=a.current+1}>Value of a is {a}</button> */}
        {/* The above line is working in backend but we will not be able to see the changes because the value is changing but the page isn't rerendering and that's why value isn't updated on screen on onclick */}
        {/* useref is similar as useState hook but it is different because useState is responsible for two task first is changing the value of variable and second task is to update it by rerendering. On the other hand useRef hook is only responsible for changing the value of variable and persisting the value even if the component is rerender.*/}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
