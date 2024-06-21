import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data/BooksData";

const initialState = {
  booksData: data,
  bookReviews: [],
};

export const booksDataReducer = createSlice({
  name: "Books Data Reducer",
  initialState,
  reducers: {
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
    setBookReviews: (state, action) => {
      state.bookReviews = action.payload;
    },
  },
});

export const { setBooksData, setBookReviews } = booksDataReducer.actions;

export default booksDataReducer.reducer;
