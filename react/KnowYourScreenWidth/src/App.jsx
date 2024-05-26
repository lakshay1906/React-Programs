import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>Your Screen Width is {innerWidth}</h1>
    </>
  );
}

export default App;
