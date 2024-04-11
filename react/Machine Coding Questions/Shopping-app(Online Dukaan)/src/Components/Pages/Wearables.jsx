import React from "react";
import Card from "../Card";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

const Wearables = () => {
  const data = useContext(DataContext);
  const OnCartClickFunction = useContext(OnCartClick);

  return (
    <>
      <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto mt-16">
        {data.products
          .filter((ele) => {
            return (
              ele.category === "womens-dresses" ||
              ele.category === "tops" ||
              ele.category === "mens-shirts" ||
              ele.category === "mens-shoes" ||
              ele.category === "womens-shoes" ||
              ele.category === "mens-watches" ||
              ele.category === "womens-watches" ||
              ele.category === "womens-jewellery" ||
              ele.category === "sunglasses"
            );
          })
          .map((ele) => {
            // console.log(ele.id);
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

export default Wearables;
