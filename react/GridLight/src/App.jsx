import { useEffect, useState } from "react";
import "./App.css";

function Cell({ onClick, filled }) {
  return (
    <button
      className={`w-full h-full border border-black ${
        filled && "bg-[rgb(1,113,1)]"
      }`}
      onClick={onClick}
      disabled={filled}
    ></button>
  );
}

function App() {
  const [order, setOrder] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  function handleOnclick(idx) {
    let newOrder = [...order, idx];
    setOrder(newOrder);

    if (newOrder.length == config.flat().filter(Boolean).length)
      deactivatingCells();
  }
  const arr = [1, 2, 3, 4, 5];
  function deactivatingCells() {
    // let temp;
    setOrder(() => {
      order.pop();
      return order;
    });
    // console.log(temp);
    // let popedVar = arr.pop();
    // console.log(popedVar);
    // console.log(arr);
  }

  useEffect(() => console.log(order), [order]);

  return (
    <div className="bg-gray-300 w-[40%] h-[34rem] m-auto grid grid-cols-3 gap-5 p-10 my-[2%]">
      {config
        .flat()
        .map((ele, idx) =>
          ele ? (
            <Cell
              key={idx}
              onClick={() => handleOnclick(idx)}
              filled={order.includes(idx)}
            />
          ) : (
            <span key={idx}></span>
          )
        )}
    </div>
  );
}

export default App;
