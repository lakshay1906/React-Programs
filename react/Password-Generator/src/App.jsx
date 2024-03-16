import { useState, useMemo } from "react";
import "./App.css";

console.log("Radhe Radhe");
function App() {
  const [password, setPassword] = useState("_Ypk^*RrwZvgKM");
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [capital, setCapital] = useState(false);

  function generatePass() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (capital) str += "ABCDEFGHIJKLMNPOQRSTUVWXYZ";
    if (number) str += "0123456789";

    console.log(str);
    for (let i = 0; i < range; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }

  useMemo(() => generatePass(), [range, number, capital]);

  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <h1 className="text-center">Password Generator</h1>

      <div className="container">
        <div id="input-container" className="flex items-center">
          <input
            type="text"
            value={password}
            id="display"
            className="text-5xl px-2 rounded w-40"
            readOnly
          />
          <button
            onClick={() => {
              generatePass();
            }}
          >
            click
          </button>
        </div>
        <div className="flex items-center justify-center text-xl gap-x-2">
          <input
            type="range"
            id="range"
            min={8}
            max={20}
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
          <label htmlFor="range"> Range {range}</label>
        </div>

        <div className="flex justify-center items-center text-xl gap-x-2">
          <input
            type="checkbox"
            name="capital"
            id="capital"
            onClick={(e) => {
              setCapital(e.target.checked);
              console.log(e.target.checked);
              // validation();
            }}
          />
          <label htmlFor="capital">Capital Letters</label>
        </div>
        <div className="flex justify-center items-center text-xl gap-x-2">
          <input
            type="checkbox"
            name="number"
            id="number"
            onClick={(e) => {
              setNumber(e.target.checked);
              console.log(e.target.checked);
              // validation();
            }}
          />
          <label htmlFor="number">Number</label>
        </div>
      </div>
    </div>
  );
}

export default App;

// why we are not able to enter function in dependencies ....?
// What to do so that password will generate in onclick of button

// import { useState, useCallback } from "react";
// import "./App.css";

// function App() {
//   const [str, setStr] = useState("abcdefghijklmnopqrstuvwxyz");
//   const [password, setPassword] = useState("_Ypk^*RrwZvgKM");
//   const [range, setCount] = useState(8);

//   useCallback(() => {
//     let pass = "";

//     for (let i = 0; i < range; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass = pass + str.charAt(char);
//     }
//     setPassword(pass);
//   }, [str, range]);

//   function validation() {
//     if (document.getElementById("capital").checked) {
//       if (document.getElementById("symbol").checked) {
//         setStr(
//           "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ!@#$%^&*_+~"
//         );
//       } else {
//         setStr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPOQRSTUVWXYZ");
//       }
//     } else {
//       if (document.getElementById("symbol").checked) {
//         setStr("abcdefghijklmnopqrstuvwxyz!@#$%^&*_+~");
//       } else {
//         setStr("abcdefghijklmnopqrstuvwxyz");
//       }
//     }
//   }
//   return (
//     <>
//       <h1 onChange={() => alert("Jai Siya Ram")}>Radhe Radhe</h1>

//       <div className="container">
//         <input type="text" value={password} id="display" readOnly />
//         <button onClick={() => validation()}>click</button>
//         <input
//           type="range"
//           id="range"
//           min={8}
//           max={20}
//           value={range}
//           onChange={(e) => {
//             setCount(e.target.value);
//             validation();
//           }}
//         />
//         <label htmlFor="range"> Range {range}</label>
//         <br />
//         <input
//           type="checkbox"
//           name="capital"
//           id="capital"
//           onClick={() => validation()}
//         />
//         <label htmlFor="capital">Capital Letters</label>
//         <br />
//         <input
//           type="checkbox"
//           name="symbol"
//           id="symbol"
//           onClick={() => validation()}
//         />
//         <label htmlFor="symbol">Symbols</label>
//       </div>
//     </>
//   );
// }

// export default App;
