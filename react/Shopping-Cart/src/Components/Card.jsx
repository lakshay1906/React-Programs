import React from "react";

const Card = (props) => {
  return (
    <div className=" w-72 flex flex-col gap-y-px text-lg">
      <img src={props.src} className="w-full" />
      <h1 className="text-2xl">{props.title}</h1>
      <p>$ {props.price}</p>
      <p>{props.delivery}</p>
      <p>{props.rating}</p>
      <button className="w-fit">{props.cart}</button>
    </div>
  );
};

export default Card;
