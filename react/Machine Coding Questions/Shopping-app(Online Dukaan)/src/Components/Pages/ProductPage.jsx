import React, { useState, useContext, useEffect } from "react";
import { ProductObj } from "../../Contexts/ProductObj";
import { DataContext } from "../../Contexts/DataContext";
import ImageCarousel from "../ImageCarousel";
import { IoIosStar } from "react-icons/io";
import { FaTags } from "react-icons/fa";
import { OnCartClick } from "../../Contexts/OnCartClickFunction";

function ProductPage() {
  const data = useContext(DataContext);
  const { productId } = useContext(ProductObj);
  const [product, setProduct] = useState({});
  const [carousel, setCarousel] = useState(false);
  const OnCartClickFunction = useContext(OnCartClick);

  function fetchProduct() {
    setProduct(...data.products.filter((ele) => ele.id == productId));
    setCarousel(true);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div
      id="ProductPage"
      className="text-xl max-w-full h-[calc(100vh-4rem)] flex items-center mt-16 justify-center select-none"
    >
      <div
        id="left"
        className=" h-fit flex flex-col justify-center items-center px-5 py-5 select-none"
      >
        <ImageCarousel data={product} load={carousel} />
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-gray-300 px-20 py-2 text-[1.3rem] rounded"
            onClick={(e) => OnCartClickFunction(product.id, e)}
          >
            Add to Cart
          </button>
          <button className="bg-gray-300 px-20 py-2 rounded text-[1.3rem]">
            Buy Now
          </button>
        </div>
      </div>
      <div
        id="ProductPageRight"
        className=" h-[92%] w-7/12 text-xl flex flex-col relative my-10 px-5"
      >
        <div className="flex flex-col mt-[3.2rem] gap-y-1">
          <div id="productTitle">{product.title}</div>
          <div id="productDesc">{product.description}</div>
          <div
            id="rating"
            className="text-base bg-green-600 w-fit px-[0.37rem] rounded-md flex items-center gap-x-1 text-white"
          >
            {product.rating}
            <IoIosStar />
          </div>
          <div id="productPrice" className="flex flex-col w-fit mt-2">
            <div className="text-base text-green-700 font-semibold">
              Special Price
            </div>
            <div className="flex gap-x-2 justify-center items-center">
              <span>₹{product.price}</span>
              <span className="text-base line-through font-semibold text-[#9C9C9C]">
                ₹
                {Math.floor(
                  product.price /
                    (1 - Math.round(product.discountPercentage) / 100)
                )}
              </span>
              <span className="text-lg text-green-800 font-semibold">
                {Math.round(product.discountPercentage)}% off
              </span>
            </div>
          </div>
          <div id="bankOffers" className="flex flex-col gap-y-2 w-fit mt-2">
            <h2 className="text-lg font-semibold">Available Offers</h2>
            <ul className="flex flex-col gap-1 text-lg pr-5">
              <li className="flex gap-x-1 items-center">
                <FaTags className="text-green-600" size={"1.3rem"} />
                <span>
                  <span className="font-semibold">Bank Offer</span> 5% Cashback
                  on Flipkart Axis Bank Card{" "}
                  <span className="text-[#2874F0] hover:cursor-pointer">
                    T&C
                  </span>
                </span>
              </li>
              <li className="flex gap-x-1 items-center">
                <FaTags
                  className="text-green-600 text-[1.5rem]"
                  size={"1.6rem"}
                />
                <span>
                  <span className="font-semibold">Bank Offer</span> 10% off on
                  Citi-branded Credit Card EMI Transactions, up to ₹2,000 on
                  orders of ₹5,000 and above{" "}
                  <span className="text-[#2874F0] hover:cursor-pointer">
                    T&C
                  </span>
                </span>
              </li>
              <li className="flex gap-x-1 items-center">
                <FaTags className="text-green-600" size={"1.6rem"} />
                <span>
                  <span className="font-semibold">Bank Offer</span> Flat ₹1,250
                  off on HDFC Bank Credit Card EMI Txns on 6 and 9 months
                  tenure, Min. Txn Value: ₹15,000{" "}
                  <span className="text-[#2874F0] hover:cursor-pointer">
                    T&C
                  </span>
                </span>
              </li>
              <li className="flex gap-x-1 items-center">
                <FaTags className="text-green-600" size={"1.3rem"} />
                <span>
                  <span className="font-semibold">Special Price</span> Get extra
                  62% off (price inclusive of cashback/coupon){" "}
                  <span className="text-[#2874F0] hover:cursor-pointer">
                    T&C
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div id="stock" className="absolute top-2 right-2 text-red-600">
            {" "}
            Hurry up only {product.stock} quatities left
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

// difference between useEffect and IIFE
