import { useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="container"
        className="bg-slate-600 flex justify-center items-center text-black"
      >
        <div id="left">
          <img src="https://i.ytimg.com/vi/lvU8fMNVivY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBvSKzMsEU7nd6UsbWmuP7hUvi88A" />
        </div>
        <div id="right">
          <h2>
            Server Action in Next.js | Sigma Web Development Course -
            Tutorial#125
          </h2>
          <p>CodeWithHarry . 4.5K views . 10 hours ago</p>
        </div>
      </div>
    </>
  );
}

export default App;
