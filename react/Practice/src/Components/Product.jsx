import React from "react";
import Card from "./Card";
import "./Product.css";

const Product = () => {
  let arr_data = {
    products: [
      {
        title: "Watch",
        src: "./src/Assets/Titan Blue Dial Watch.jpg",
        desc: "Titan Blue Dial Watch",
        price: 2499,
      },
      {
        title: "Shirt",
        src: "./src/Assets/U.S POLO Sneaker.jpg",
        desc: "U.S POLO Sneaker",
        price: 4999,
      },
      {
        title: "Sneaker",
        src: "./src/Assets/Titan Blue Dial Watch.jpg",
        desc: "Titan Blue Dial Watch",
        price: 2499,
      },
    ],
  };

  return (
    <>
      <div id="card-container">
        {arr_data.products.map((item) => {
          return (
            <Card
              src={item.src}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;

// let arr_data = {
//   src: [
//     "./src/Assets/Titan Blue Dial Watch.jpg",
//     "./src/Assets/Leriya_Fashion_Shirt.jpg",
//     "./src/Assets/U.S POLO Sneaker.jpg",
//   ],
//   title: ["Watch", "Shirt", "Sneaker"],
//   desc: ["Titan Blue Dial Watch", "Leriya Fashion Shirt", "U.S POLO Sneaker"],
//   price: ["2499", "499", "4999"],
// };
// Bad way of writing Json data ☝️
