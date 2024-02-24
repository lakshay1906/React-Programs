import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let capital = document.getElementById("capital");
  let range = document.getElementById("range");
  let display = document.getElementById("display");

  function generate_pass(string) {
    let str = string;
    let pass = "";

    for (let i = 0; i < range.value; i++) {
      let char = Math.round(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }

    let random = range.value - pass.length;
    let remain = "";

    for (let i = 0; i < random; i++) {
      let char = Math.round(Math.random() * str.length);
      remain = remain + str.charAt(char);
    }

    pass = pass.padEnd(range.value, remain);
    display.value = pass;
  }
  function validation() {
    if (document.getElementById("capital").checked) {
      if (document.getElementById("symbol").checked) {
        generate_pass(
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ!@#$%^&*_+~"
        );
      } else {
        generate_pass("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ");
      }
    } else {
      if (document.getElementById("symbol").checked) {
        generate_pass("abcdefghijklmnopqrstuvwxyz!@#$%^&*_+~");
      } else {
        generate_pass("abcdefghijklmnopqrstuvwxyz");
      }
    }
  }
  return (
    <>
      <h1 onChange={() => alert("Jai Siya Ram")}>Radhe Radhe</h1>

      <div className="container">
        <input type="text" value={""} id="display" readOnly />
        <button onClick={() => validation()}>click</button>
        <input type="range" id="range" min={8} max={20} />
        <label htmlFor="range"> Range</label>
        <br />
        <input
          type="checkbox"
          name="capital"
          id="capital"
          onClick={() => validation()}
        />
        <label htmlFor="capital">Capital Letters</label>
        <br />
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          onClick={() => validation()}
        />
        <label htmlFor="symbol">Symbols</label>
      </div>
    </>
  );
}

export default App;
