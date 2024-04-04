import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { CartCounter } from "../../Contexts/CartCounter";
import { DataContext } from "../../Contexts/DataContext";
import { ProductObj } from "../../Contexts/ProductObj";

const HomeLayout = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  const [productObj, setProductObj] = useState([]);

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
        <DataContext.Provider value={data}>
          <CartCounter.Provider value={{ counter, setCounter }}>
            <ProductObj.Provider value={{ productObj, setProductObj }}>
              <Navbar />
              <Outlet />
            </ProductObj.Provider>
          </CartCounter.Provider>
        </DataContext.Provider>
      )}
    </>
  );
};

export default HomeLayout;
