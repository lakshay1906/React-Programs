import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import Card from "../Card";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

const Electronic_Vehicle = () => {
  const data = useContext(DataContext);
  const OnCartClickFunction = useContext(OnCartClick);

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
                onCartClick={OnCartClickFunction}
              />
            );
          })}
      </div>
    </>
  );
};

export default Electronic_Vehicle;
