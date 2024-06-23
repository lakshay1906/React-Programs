import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from "../Features/EmpReducer";

export const store = configureStore({
  reducer: EmpReducer,
});
