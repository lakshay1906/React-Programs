import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: {},
  cartProducts: [],
  singleProduct: {},
  // onQuantityChange: (id, op, cartData) => {},
};

export const productReducer = createSlice({
  name: "Product API Data",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setCartProducts: (state, action) => {
      const product = { ...action.payload, qty: 1 };
      state.cartProducts.push(product);
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  setProductData,
  setCartProducts,
  setSingleProduct,
  removeFromCart,
} = productReducer.actions;

export default productReducer.reducer;

// function onQuantityChangeFunc(id, op) {
//   let index = -1;
//   productObj.map((ele, idx) => {
//     if (ele.id == id) index = idx;
//   });
//   const tempArr = productObj;
//   tempArr[index].qty += op;
//   setProductObj(tempArr);
//   setNothing(nothing + 1);
// }
