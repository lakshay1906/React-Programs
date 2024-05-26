import { configureStore } from "@reduxjs/toolkit";
import ApiReducer from "../Features/ApiDataSlice";

export const store = configureStore({
  reducer: ApiReducer,
});
