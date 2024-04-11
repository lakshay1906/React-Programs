import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objData: {},
  counter: 0,
};

export const ObjDataSlice = createSlice({
  name: "Object_Data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.objData = action.payload;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { setData, setCounter } = ObjDataSlice.actions;

export default ObjDataSlice.reducer;
