import React from "react";
import Card from "./Card";
import "./Product.css";

const Product = () => {
  let arr_data = {
    src: [
      "./src/Assets/Titan Blue Dial Watch.jpg",
      "./src/Assets/Leriya_Fashion_Shirt.jpg",
      "./src/Assets/U.S POLO Sneaker.jpg",
    ],
    title: ["Watch", "Shirt", "Sneaker"],
    desc: ["Titan Blue Dial Watch", "Leriya Fashion Shirt", "U.S POLO Sneaker"],
    price: ["2499", "499", "4999"],
  };
  // let src_arr = [];
  // let title_arr = [];
  // let desc_arr = [];
  // let price_arr = [];

  return (
    <>
      <div id="card-container">
        {/* <Card
          src={"./src/Assets/Titan Blue Dial Watch.jpg"}
          title="Watch"
          desc="Titan Blue Dial Watch"
          price="2499"
        />
        <Card
          src={arr_data.src[0]}
          title="Shirt"
          desc="Leriya Fashion Shirt"
          price="499"
        />
        <Card
          // src={src_arr[2]}
          title="Sneaker"
          desc="U.S POLO Sneaker"
          price="4999"
        /> */}
        {arr_data.src.map((item) => {
          return <Card src={item} />;
        })}
        {/* {arr_data.title.map((item) => {
          return <Card title={item} />;
        })}
        {arr_data.desc.map((item) => {
          return <Card desc={item} />;
        })}
        {arr_data.price.map((item) => {
          return <Card price={item} />;
        })} */}
      </div>
    </>
  );
};

export default Product;
