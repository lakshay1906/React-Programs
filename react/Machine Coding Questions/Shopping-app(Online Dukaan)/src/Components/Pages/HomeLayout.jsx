import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../Contexts/DataContext";
import { ProductObj } from "../../Contexts/ProductObj";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";
import { onDeleteFunction } from "../../Contexts/DeleteFromCart";
import { onQuantityChange } from "../../Contexts/onQuantityChangeFunction";

const HomeLayout = () => {
  // console.log("Radhe Radhe");
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [productId, setProductId] = useState(0);
  const [cartProducts, setCardProducts] = useState([]);
  const [productObj, setProductObj] = useState([]);
  const [cartWarning, setCartWarning] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [nothing, setNothing] = useState(0);
  const [isCartFull, setIsCartFull] = useState(false);
  const [cartFullWarning, setCartFullWarning] = useState(false);

  async function fetchData() {
    let rawData = await fetch("https://dummyjson.com/products?limit=100");
    let data = await rawData.json();
    setData(data);
    setShowCards(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function onCartClick(id) {
    if (productObj.length > 19) {
      setIsCartFull(true);
      setCartFullWarning(true);
      setTimeout(() => setCartFullWarning(false), 2000);
    } else setIsCartFull(false);
    if (!isCartFull) {
      if (productObj.filter((ele) => ele.id === id).length) {
        // alert("This item already exist in cart");
        setAddedToCart(false);
        setCartWarning(true);
        setTimeout(() => setCartWarning(false), 2000);
      } else {
        const obj = { ...data.products.filter((ele) => ele.id == id)[0] };
        obj.qty = 1;
        productObj.push(obj);
        setCartWarning(false);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
      }
    }
    setNothing(nothing - 1);
  }
  // when I click on add to cart button that button get disabled in second time. why so ?

  function removeElementById(id) {
    let index = productObj.findIndex((obj) => obj.id === id);
    productObj.splice(index, 1);
    setNothing(nothing + 1);
  }

  function onQuantityChangeFunc(id, op) {
    let index = -1;
    productObj.map((ele, idx) => {
      if (ele.id == id) index = idx;
    });
    const tempArr = productObj;
    tempArr[index].qty += op;
    setProductObj(tempArr);
    setNothing(nothing + 1);
  }
  return (
    <div className="relative min-w-full">
      {showCards && (
        <DataContext.Provider value={data}>
          <ProductObj.Provider
            value={{
              productObj,
              productId,
              setProductId,
              cartProducts,
              nothing,
            }}
          >
            <OnCartClick.Provider value={onCartClick}>
              <onDeleteFunction.Provider value={removeElementById}>
                <onQuantityChange.Provider value={onQuantityChangeFunc}>
                  <Navbar />
                  <Outlet />
                  {!isCartFull && cartWarning && (
                    <div className="bg-red-700 text-white font-semibold self-center justify-self-center w-fit m-auto fixed top-[15%] left-[40%] shadow-normalShadow px-3 py-2 text-xl rounded-md transition-all">
                      This item already exist in cart !!
                    </div>
                  )}
                  {!isCartFull && addedToCart && (
                    <div className="bg-green-700 text-white font-semibold self-center justify-self-center w-fit m-auto fixed top-[15%] left-[40%] shadow-normalShadow px-3 py-2 text-xl rounded-md transition-all">
                      Product Added Successfully in Cart.. :)
                    </div>
                  )}
                  {cartFullWarning && (
                    <div className="bg-red-700 text-white font-semibold self-center justify-self-center w-fit m-auto fixed top-[15%] left-[40%] shadow-normalShadow px-3 py-2 text-xl rounded-md transition-all">
                      Your Cart is Full..
                    </div>
                  )}
                </onQuantityChange.Provider>
              </onDeleteFunction.Provider>
            </OnCartClick.Provider>
          </ProductObj.Provider>
        </DataContext.Provider>
      )}
    </div>
  );
};

export default HomeLayout;

// replace add to cart from delete from cart
