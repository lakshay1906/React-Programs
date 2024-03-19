import React from "react";
import "./Card.css";
import { useState } from "react";
import { CounterContext } from "../context/context";

const Card = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <div id="card">
          <img src={props.src} alt="" />
          {console.log(props.src)}
          <p>{props.title}</p>
          <p>{props.desc}</p>
          <p>₹ {props.price}</p>
          <div id="buttons">
            <button id="buy">Buy</button>
            <button id="cart" onClick={() => setCounter(counter + 1)}>
              Add to Cart
            </button>
          </div>
        </div>
      </CounterContext.Provider>
    </>
  );
};

export default Card;
