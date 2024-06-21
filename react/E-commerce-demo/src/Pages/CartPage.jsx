import React, { useEffect, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { HiTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCartProducts } from "../Features/ProductReducer";

function CartPage() {
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setdeliveryCharge] = useState(40);
  const [tax, setTax] = useState(0);
  const productData = useSelector((state) => state.productData.productData);
  const cartProducts = useSelector((state) => state.productData.cartProducts);
  const dispatch = useDispatch();

  function calcSubTotal() {
    setSubTotal(() => {
      return cartProducts
        .map((product) => product.price * product.qty)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    });
  }
  function calcTax() {
    const total = subTotal + deliveryCharge;
    setTax(() => {
      return (total * 18) / 100;
    });
  }
  // function increaseQty(qty) {
  //   // if (qty >= 6) return;
  //   // else {
  //   //   qty = qty + 1;
  //   //   console.log(qty);
  //   // }
  //   console.log(qty);
  // }
  // function decreaseQty(qty) {
  //   // if (qty <= 0) return;
  //   // else qty--;
  //   console.log(qty);
  // }

  function onQuantityChangeFunc(id, op) {
    let index = -1;
    let a = cartProducts.map((product) => {
      if (product.id == id) {
        product.qty += op;
      }
    });
  }
  // function onRemove(product) {
  //   let cloneArr = [...cartProducts];
  //   let temp = cloneArr.filter((ele) => ele.id != product.id);
  //   console.log(temp);
  //   console.log(cloneArr);
  //   dispatch(setCartProducts(...temp));
  // }

  useEffect(() => {
    calcSubTotal();
    calcTax();
    if (subTotal > 500) setdeliveryCharge(0);
  }, [cartProducts]);

  return (
    <>
      {Boolean(cartProducts.length) ? (
        <div className="px-4 px-lg-0 z-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-2xl mb-5">
                  {/* <!-- Shopping cart table --> */}
                  <div className="">
                    <div className="grid grid-cols-[56%_14%_18%_12%] border border-black text-[1.10rem] font-bold h-16 uppercase">
                      <div className="ml-3 place-content-start self-center">
                        Product
                      </div>
                      <div className="place-self-center">Price</div>
                      <div className="place-self-center">Quantity</div>
                      <div className="place-self-center">Remove</div>
                    </div>
                    <div>
                      {cartProducts.map((product) => {
                        return (
                          <div
                            key={product.id}
                            id={product.id}
                            className="grid grid-cols-[56%_14%_18%_12%] border border-black text-[1.09rem] font-semibold py-2"
                          >
                            <div className="ml-3 place-content-start self-center">
                              <div className="w-20">
                                <img
                                  src={product.image}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                              <div className="uppercase">{product.title}</div>
                              <div className="bg-gray-200 w-fit px-3 py-1 rounded-3xl text-[#494949] text-sm">
                                Category: {product.category}
                              </div>
                            </div>
                            <div className="place-self-center text-lg">
                              ₹ {Number(product.price).toFixed(0)}
                            </div>
                            <div className="place-self-center text-lg flex gap-2 items-center">
                              <span
                                className="cursor-pointer"
                                onClick={() =>
                                  onQuantityChangeFunc(product.id, -1)
                                }
                              >
                                <FaCircleMinus size={"1.4rem"} />
                              </span>
                              <span className="text-xl">{product.qty}</span>
                              <span
                                className="cursor-pointer"
                                onClick={() =>
                                  onQuantityChangeFunc(product.id, 1)
                                }
                              >
                                <FaCirclePlus size={"1.4rem"} />
                              </span>
                            </div>
                            <div
                              className="place-self-center"
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                            >
                              <HiTrash size={"1.6rem"} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* <!-- End --> */}
                </div>
              </div>

              <div className="row py-5 p-4 bg-white rounded shadow-xl">
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have a coupon code, please enter it in the box
                      below
                    </p>
                    <div className="input-group mb-4 border rounded-pill p-2">
                      <input
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                        className="form-control border-0"
                      />
                      <div className="input-group-append border-0">
                        <button
                          id="button-addon3"
                          type="button"
                          className="btn btn-dark px-4 rounded-pill"
                        >
                          <i className="fa fa-gift mr-2"></i>Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instructions for seller
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have some information for the seller you can leave
                      them in the box below
                    </p>
                    <textarea
                      name=""
                      cols="30"
                      rows="2"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-2">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    {subTotal < 500 ? (
                      <p className="text-red-600 font-semibold">
                        Add ₹
                        <span className="underline font-bold">
                          {Number(500 - subTotal).toFixed(0)}
                        </span>{" "}
                        worth of items more to get free delivery charges
                      </p>
                    ) : (
                      <p className="text-green-600 font-semibold">
                        Enjoy free delivery..!!
                      </p>
                    )}
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>₹ {subTotal}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>₹ {Number(deliveryCharge).toFixed(2)}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax (18%)</strong>
                        <strong>₹ {Number(tax).toFixed(2)}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">
                          ₹ {Number(subTotal + deliveryCharge + tax).toFixed(2)}
                        </h5>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-5.7rem)] flex items-center justify-center text-[3rem] font-bold">
          Your cart is empty..!!
        </div>
      )}
    </>
  );
}

export default CartPage;
