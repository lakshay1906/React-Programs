import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  hidden: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state) => {
      state.value += 1;
    },
    Decrement: (state) => {
      state.value -= 1;
    },
    Multiply: (state) => {
      state.value *= 1;
    },
    IncrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    Hide: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { Increment, Decrement, Multiply, IncrementByAmount, Hide } =
  counterSlice.actions;

export default counterSlice.reducer;
