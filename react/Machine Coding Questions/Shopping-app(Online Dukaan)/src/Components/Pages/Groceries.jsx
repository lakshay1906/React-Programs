import React from "react";
import Card from "../Card";
import { useContext } from "react";
import { dataContext } from "../../Contexts/DataContext";

const Groceries = () => {
  const data = useContext(dataContext);

  return (
    <>
      <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto">
        {data.products
          .filter((ele) => {
            return (
              ele.category === "groceries" || ele.category === "fragrances"
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

export default Groceries;
