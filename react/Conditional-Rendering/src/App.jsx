import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [render, ChangeRender] = useState(true);
  const [todos, updateTodos] = useState([
    {
      title: "Task 1",
      desc: "Go to college",
    },
    {
      title: "Task 2",
      desc: "Study",
    },
    {
      title: "Task 3",
      desc: "Back to home",
    },
    {
      title: "Task 4",
      desc: "Coding....",
    },
  ]);

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
        <button onClick={() => ChangeRender(!render)}>count is {count}</button>
        {/* {render ? <div>Hello</div> : <div>Render is false</div>} */}
        {/* {render && <div>Hello</div>} */}
        {/* There only two method to perform conditional rendering that are mentioned above */}

        {/* MAP Method */}

        {todos.map((todo) => {
          return (
            <div className="todo-container">
              <div className="title">{todo.title}</div>
              <div className="desc">{todo.desc}</div>
            </div>
          );
        })}

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
