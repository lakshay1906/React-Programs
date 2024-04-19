import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../Contexts/DataContext";
import { ProductObj } from "../../Contexts/ProductObj";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";
import { onDeleteFunction } from "../../Contexts/DeleteFromCart";

const HomeLayout = () => {
  console.log("Radhe Radhe");
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [productId, setProductId] = useState(0);
  const [cartProducts, setCardProducts] = useState([]);
  const [productObj, setProductObj] = useState([]);
  const [disableCartBtn, setDisableCartBtn] = useState(false);

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

  function onCartClick(id, e) {
    productObj.push(...data.products.filter((ele) => ele.id == id));
    cartCounter >= 20
      ? alert("Your cart is full now!!\nPlease proceed to checkout first")
      : setCartCounter(cartCounter + 1);
    setDisableCartBtn(true);
    e.target.disabled = true;
  }
  // when I click on add to cart button that button get disabled in second time. why so ?

  function removeElementById(id) {
    let index = productObj.findIndex((obj) => obj.id === id);
    productObj.splice(index, 1);
    cartCounter <= 0
      ? alert("Your Cart is empty" + cartCounter)
      : setCartCounter(cartCounter - 1);
  }

  return (
    <>
      {showCards && (
        <DataContext.Provider value={data}>
          <ProductObj.Provider
            value={{
              productObj,
              cartCounter,
              setCartCounter,
              productId,
              setProductId,
              cartProducts,
              disableCartBtn,
              setDisableCartBtn,
            }}
          >
            <OnCartClick.Provider value={onCartClick}>
              <onDeleteFunction.Provider value={removeElementById}>
                <Navbar />
                <Outlet />
              </onDeleteFunction.Provider>
            </OnCartClick.Provider>
          </ProductObj.Provider>
        </DataContext.Provider>
      )}
    </>
  );
};

export default HomeLayout;

// replace add to cart from delete from cart
