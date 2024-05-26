import { createSlice } from "@reduxjs/toolkit";
import { initialSong, playlistTracks } from "../Data/Constants";

const initialState = {
  featured: {},
  categories: {},
  newRelease: {},
  allCardsData: {},
  songTracks: {},
  singleSong: {},
  navHeading: false,
};

export const ApiDataSlice = createSlice({
  name: "ApiData",
  initialState,
  reducers: {
    setFeatured: (state, action) => {
      state.featured = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setNewRelease: (state, action) => {
      state.newRelease = action.payload;
    },
    setAllCardsData: (state, action) => {
      state.allCardsData = action.payload;
    },
    setSongTracks: (state, action) => {
      state.songTracks = action.payload;
    },
    setSingleSong: (state, action) => {
      state.singleSong = action.payload;
    },
    setNavHeading: (state, action) => {
      state.navHeading = action.payload;
    },
  },
});

export const {
  setFeatured,
  setCategories,
  setNewRelease,
  setAllCardsData,
  setSongTracks,
  setSingleSong,
  setNavHeading,
} = ApiDataSlice.actions;
export default ApiDataSlice.reducer;
