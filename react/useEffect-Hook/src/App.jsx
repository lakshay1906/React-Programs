// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";
import "./App.css";
import ChangeColor from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [color, changeColor] = useState("red");
  let arr = ["red", "blue", "green", "yellow", "purple", "voilet", "gray"];

  // This useEffect will run when there's a change in count
  useEffect(() => {
    alert(`Jai SiyaRam ${count}`);
    changeColor(arr[count]);
  }, [count]);
  useEffect(() => {
    alert("I'm running because color is change");
  }, [color]);

  // In the above case the second useEffect is running on every change in count because when we are changing count color is also changing.

  // This useEffect will run on first render only.
  // useEffect(() => {
  //   alert(`I will run on first time render`);
  // }, []);

  // // This useEffect will run on every render.
  // useEffect(() => {
  //   alert(`I will run on every render`);
  // });

  // useEffect hook is used to trigger a task on a particular change for eg : In the above hook count is the trigger for useEffect hook when ever count will change task defined in useEffect hook will run. And if we don't define the trigger for useEffect hook it means that hook will run only once when the page will render(like accept cookies or terms and conditions)

  return (
    <>
      {/* <ChangeColor color={color} title="Jai Siya Ramm" /> */}
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
