import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCart: [],
};

export const functionReducer = createSlice({
  name: "function reducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productCart.push(action.payload);
    },
  },
});

export const { addToCart } = functionReducer.actions;

export default functionReducer.reducer;
