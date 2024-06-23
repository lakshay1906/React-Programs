import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  empData: [],
  qualified: [],
};

export const empReducer = createSlice({
  name: "empReducer",
  initialState,
  reducers: {
    setEmpData: (state, action) => {
      state.empData = action.payload;
    },
    setQualifiedEmp: (state, action) => {
      const emp = { ...action.payload, age: 35 };
      state.qualified.push(emp);
    },
    removeQualified: (state, action) => {
      state.qualified = state.qualified.filter(
        (ele) => ele.id !== action.payload
      );
    },
  },
});

export const { setEmpData, setQualifiedEmp, removeQualified } =
  empReducer.actions;

export default empReducer.reducer;
