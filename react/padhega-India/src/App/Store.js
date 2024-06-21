import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Features/ThemeReducer";
import booksDataReducer from "../Features/BooksDataReducer";
import functionReducer from "../Features/FunctionsReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  BooksData: booksDataReducer,
  functions: functionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
