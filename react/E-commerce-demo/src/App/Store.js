import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Features/ProductReducer";

const rootReducer = combineReducers({
  productData: ProductReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
