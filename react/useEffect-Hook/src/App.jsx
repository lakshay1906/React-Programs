// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Jai SiyaRam ${count}`);
  }, [count]);

  // useEffect hook is used to trigger a task on a particular change for eg : In the above hook count is the trigger for useEffect hook when ever count will change task defined in useEffect hook will run. And if we don't define the trigger for useEffect hook it means that hook will run only once when the page will render(like accept cookies or terms and conditions)
  return (
    <>
      <h1>Radhe Radhe</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click{count}
      </button>
    </>
  );
}

export default App;
