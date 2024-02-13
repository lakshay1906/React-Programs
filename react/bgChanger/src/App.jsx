import "./App.css";
import { useState } from "react";

function App() {
  let [color, changeColor] = useState("red");
  function colorChanger() {
    let randomNum = Math.round(Math.random() * 1000000);
    let num = new String(randomNum);
    let num_1 = num.padStart(6, "f");
    changeColor("#" + num_1);
  }
  return (
    <>
      <h1>Radhe Radhe</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <button
        onClick={() => {
          colorChanger();
        }}
      >
        Random
      </button>
    </>
  );
}

export default App;
