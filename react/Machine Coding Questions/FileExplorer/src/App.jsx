// import { useState } from "react";
import "./App.css";
import Explorer from "./Components/Explorer";
import explorer from "./assets/folder";

function App() {
  // const [count, setCount] = useState(0);
  // console.log(explorer);

  return (
    <>
      <Explorer src={explorer} />
    </>
  );
}

export default App;
