import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounter, setData } from "../Redux/Features/ObjData/ObjData";

function Data() {
  let obj = [
    {
      Name: "Lakshay",
      status: "Mingle",
    },
    {
      Name: "Ishita",
      status: "Mingle",
    },
  ];

  const count = useSelector((state) => state.objData.counter);
  const data = useSelector((state) => state.objData.objData);
  const dispatch = useDispatch();
  //   dispatch(setData(obj));
  function updateCounter() {
    return count + 1;
  }
  return (
    <>
      <h1>{`Counter is ${count}`}</h1>
      <button onClick={() => dispatch(setCounter(updateCounter))}>+</button>
    </>
  );
}

export default Data;
