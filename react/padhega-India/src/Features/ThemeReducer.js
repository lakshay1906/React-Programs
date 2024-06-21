import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const themeReducer = createSlice({
  name: "Theme Reducer",
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { setIsDarkMode } = themeReducer.actions;

export default themeReducer.reducer;
