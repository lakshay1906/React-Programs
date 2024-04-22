import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../Contexts/DataContext";
import { ProductObj } from "../../Contexts/ProductObj";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";
import { onDeleteFunction } from "../../Contexts/DeleteFromCart";
import { onQuantityChange } from "../../Contexts/onQuantityChangeFunction";

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
    const obj = { ...data.products.filter((ele) => ele.id == id)[0] };
    obj.qty = 1;
    productObj.push(obj);
    cartCounter >= 20
      ? alert("Your cart is full now!!\nPlease proceed to checkout first")
      : setCartCounter(cartCounter + 1);
    console.log(productObj);
    // setDisableCartBtn(true);
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

  function onQuantityChangeFunc(id, op) {
    let index = -1;
    productObj.forEach((ele, idx) => {
      if (ele.id == id) index = idx;
    });
    const tempArr = productObj;
    tempArr[index].qty += op;
    setProductObj(tempArr);
    console.log(tempArr);
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
                <onQuantityChange.Provider value={onQuantityChangeFunc}>
                  <Navbar />
                  <Outlet />
                </onQuantityChange.Provider>
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
