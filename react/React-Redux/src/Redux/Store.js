import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Features/Counter/CounterSlice";
import ObjData from "./Features/ObjData/ObjData";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    objData: ObjData,
  },
});
