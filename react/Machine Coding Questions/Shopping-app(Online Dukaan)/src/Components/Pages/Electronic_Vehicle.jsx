import React, { useState, useEffect, useContext } from "react";
import { dataContext } from "../../Contexts/DataContext";
import Card from "../Card";

const Electronic_Vehicle = () => {
  // console.log("Radhe Radhe");

  const data = useContext(dataContext);
  console.log(data);
  return (
    <>
      <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto">
        {data.products
          .filter((ele) => {
            return (
              ele.category === "smartphones" ||
              ele.category === "laptops" ||
              ele.category === "automotive" ||
              ele.category === "motorcycle"
            );
          })
          .map((ele) => {
            return (
              <Card
                keys={ele.id}
                imgLink={ele.thumbnail}
                brandName={ele.brand}
                productName={ele.title}
                desc={ele.description}
                price={ele.price}
              />
            );
          })}
      </div>
    </>
  );
};

export default Electronic_Vehicle;
