import { useState } from "react";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <h1 className="text-3xl font-semibold">Radhe Radhe</h1> */}
    </>
  );
}

export default App;
