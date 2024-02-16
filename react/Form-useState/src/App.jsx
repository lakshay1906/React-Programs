import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [str, changeEmail] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name....."
        id="name"
        onChange={() => {
          setCount(document.querySelector("#name").value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Email....."
        id="email"
        onChange={() => {
          changeEmail(document.querySelector("#email").value);
        }}
      />
      <h2>
        {count} and on{str}
      </h2>
    </>
  );
}

export default App;
