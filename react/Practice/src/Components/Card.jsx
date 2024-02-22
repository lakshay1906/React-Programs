import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div id="card">
        <img src={props.src} alt="" />
        {console.log(props.src)}
        <p>{props.title}</p>
        <p>{props.desc}</p>
        <p>₹ {props.price}</p>
        <div id="buttons">
          <button id="buy">Buy</button>
          <button id="cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
