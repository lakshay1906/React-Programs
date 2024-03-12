import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <nav className="bg-slate-700 text-white flex h-14 items-center justify-between px-6">
        <h2 className="text-[2rem]">Shopping Cart</h2>
        <input
          type="text"
          className="text-black h-8 w-60 py-1 px-2 text-xl rounded-lg"
          placeholder="Search items...."
        />
        <FaShoppingCart size="1.5rem" className="mr-6" />
      </nav>
      <div id="container" className="flex h-[calc(100vh-3.5rem)]">
        <div id="left" className=" bg-slate-600 w-[23%] h-full">
          <div className="filters mx-20 mt-10 flex flex-col gap-2">
            <div>
              <input type="radio" name="price" id="ascending" />
              <label htmlFor="ascending">Ascending</label>
            </div>
            <div>
              <input type="radio" name="price" id="descending" />
              <label htmlFor="descending">Descending</label>
            </div>
            <div>
              <input type="checkbox" name="" id="out-of delivery" />
              <label htmlFor="out-of delivery">Out of delivery</label>
            </div>
            <div>
              <label htmlFor="rating">Rating: </label>
              <select id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
              </select>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="bg-blue-200 w-[77%] h-full flex flex-wrap justify-center overflow-y-auto p-10 gap-y-8 gap-x-8"
        >
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
          <Card
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
            title="Titan Watch"
            price="20"
            delivery="4 days delivery"
            rating="5 star"
            cart="Add to cart"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
