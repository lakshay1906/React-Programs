import { useState } from "react";
import "./App.css";
import Card from "./Components/Card_1";

function App() {
  const [theme, setTheme] = useState(false);
  const [bodyBg, setBodyBg] = useState("#292929");

  document.body.style.backgroundColor = bodyBg;

  return (
    <>
      <button
        className="theme"
        onClick={(e) => {
          setTheme(!theme);
          theme ? setBodyBg("#292929") : setBodyBg("#fff");
          e.target.style.backgroundColor = theme ? "white" : "black";
          e.target.style.color = theme ? "black" : "white";
          e.target.innerText = theme ? "Light Mode" : "Dark Mode";
        }}
      >
        Light Mode
      </button>
      <Card />
    </>
  );
}

export default App;
