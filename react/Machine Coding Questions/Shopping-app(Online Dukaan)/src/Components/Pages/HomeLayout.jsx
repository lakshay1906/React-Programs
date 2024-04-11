import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../Contexts/DataContext";
import { ProductObj } from "../../Contexts/ProductObj";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

const HomeLayout = () => {
  console.log("Radhe Radhe");
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const productObj = useRef([]);
  let productId = "";

  async function fetchData() {
    let rawData = await fetch("https://dummyjson.com/products?limit=100");
    let data = await rawData.json();
    setData(data);
    setShowCards(true);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function onCartClick(e) {
    productId = e.target.parentNode.id;
    productObj.current.push(
      ...data.products.filter((ele) => ele.id == productId)
    );
    cartCounter >= 20
      ? alert("Your cart is full now!!\nPlease proceed to checkout first")
      : setCartCounter(cartCounter + 1);
  }

  return (
    <>
      {showCards && (
        <DataContext.Provider value={data}>
          <ProductObj.Provider
            value={{ productObj, cartCounter, setCartCounter }}
          >
            <OnCartClick.Provider value={onCartClick}>
              <Navbar />
              <Outlet />
            </OnCartClick.Provider>
          </ProductObj.Provider>
        </DataContext.Provider>
      )}
    </>
  );
};

export default HomeLayout;
