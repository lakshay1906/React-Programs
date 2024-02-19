import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.userId}</h1>
        <h1>{props.id}</h1>
        <p>{props.title}</p>
        <p>{props.body}</p>
      </div>
    </>
  );
};

export default Card;
