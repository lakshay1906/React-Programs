import React, { useState } from "react";

const Filter_btn = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <button
        className="text-[1.4rem] bg-fuchsia-800 text-white p-px rounded m-2 mb-0 px-2"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filters
      </button>
      {showFilter && (
        <div
          id="allFilters"
          className="bg-slate-100 w-fit px-8 h-[calc(100vh-4rem)] fixed transition-smooth flex flex-col gap-y-5 text-lg" // add transition
        >
          <div id="rating" className="flex flex-col gap-y-1 mt-5">
            Rating:
            <div id="stars" className="flex flex-col gap-y-1 w-fit">
              <button className="w-fit">⭐⭐⭐⭐ & up</button>
              <button className="w-fit">⭐⭐⭐ & up</button>
              <button className="w-fit">⭐⭐ & up</button>
              <button className="w-fit">⭐ & up</button>
            </div>
          </div>
          <div id="price" className="flex flex-col">
            Price :<button className="w-fit">below ₹1000</button>
            <button className="w-fit">₹1000 - ₹5000</button>
            <button className="w-fit">₹5000 - ₹20000</button>
            <button className="w-fit">₹20000 - ₹50000</button>
            <button className="w-fit">₹50000 - ₹100000</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter_btn;
