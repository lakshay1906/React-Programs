import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { CartCounter } from "../../Contexts/CartCounter";
import { dataContext } from "../../Contexts/DataContext";

const HomeLayout = () => {
  const [counter, SetCounter] = useState(5);
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);

  async function fetchData() {
    let rawData = await fetch("https://dummyjson.com/products?limit=100");
    let data = await rawData.json();
    setData(data);
    // console.log(data);
    setShowCards(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {showCards && (
        <dataContext.Provider value={data}>
          <CartCounter.Provider value={{ counter, SetCounter }}>
            <Navbar />
            <Outlet />
          </CartCounter.Provider>
        </dataContext.Provider>
      )}
    </>
  );
};

export default HomeLayout;
