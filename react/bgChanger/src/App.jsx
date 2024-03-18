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
      <h1>React BG Changer</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <button
        onClick={() => {
          colorChanger();
        }}
        style={{
          padding: "10px",
          fontSize: "18px",
          margin: "10px",
          border: "none",
          borderRadius: "18px",
          background: color,
        }}
      >
        Random
      </button>
    </>
  );
}

export default App;
