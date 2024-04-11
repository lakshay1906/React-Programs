import React from "react";
import Card from "../Card";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

const Groceries = () => {
  const data = useContext(DataContext);
  const OnCartClickFunction = useContext(OnCartClick);

  return (
    <>
      <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto mt-16">
        {data.products
          .filter((ele) => {
            return (
              ele.category === "groceries" || ele.category === "fragrances"
            );
          })
          .map((ele) => {
            return (
              <Card
                key={ele.id}
                keyId={ele.id}
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

export default Groceries;
