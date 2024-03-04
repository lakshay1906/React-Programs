// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div id="container" className="">
//         <div id="left">
//           <img src="https://i.ytimg.com/vi/lvU8fMNVivY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBvSKzMsEU7nd6UsbWmuP7hUvi88A" />
//         </div>
//         <div id="right" className="">
//           <h2>
//             Server Action in Next.js | Sigma Web Development Course -
//             Tutorial#125
//           </h2>
//           <p>CodeWithHarry . 4.5K views . 10 hours ago</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="container"
        className="w-3/6 flex justify-center gap-x-2 overflow-hidden bg-gray-800 text-white rounded-lg"
      >
        <div id="left">
          <img
            src="https://i.ytimg.com/vi/lvU8fMNVivY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBvSKzMsEU7nd6UsbWmuP7hUvi88A"
            class="rounded-xl"
          />
        </div>
        <div id="right" className="flex flex-col gap-y-2 align-top">
          <h2>
            Server Action in Next.js | Sigma Web Development Course -
            Tutorial#125
          </h2>
          <p class="text-sm text-gray-300">
            CodeWithHarry . 4.5K views . 10 hours ago
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
