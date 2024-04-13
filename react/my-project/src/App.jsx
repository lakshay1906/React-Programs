import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="container"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="w-56 h-56 border-8 rounded-[500%] border-t-black animate-spin"></div>
      </div>
    </>
  );
}

export default App;
