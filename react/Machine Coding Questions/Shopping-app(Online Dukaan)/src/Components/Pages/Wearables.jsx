import React from "react";
import Card from "../Card";
import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

const Wearables = () => {
  const data = useContext(DataContext);
  const OnCartClickFunction = useContext(OnCartClick);
  const [page, setPage] = useState(1);

  return (
    <div className="pb-10 reduce-bottom-margin">
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
          .slice(page * 10 - 10, page * 10)
          .map((ele) => {
            // console.log(ele.id);
            return (
              <Card
                key={ele.id}
                id={ele.id}
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
      <div
        id="pages"
        className="bg-[#292929] w-fit h-fit m-auto mb-9 flex justify-center gap-x-5 items-center text-xl rounded-3xl select-none px-10 py-px"
      >
        {[
          ...Array(
            Math.ceil(
              data.products.filter((ele) => {
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
              }).length / 10
            )
          ),
        ].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx + 1)}
            className="text-xl m-1 bg-white px-2 rounded-md"
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Wearables;
