import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../Features/QuizSlice";

export const store = configureStore({
  reducer: quizReducer,
});
