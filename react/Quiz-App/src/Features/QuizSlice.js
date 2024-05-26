import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  noQues: 2,
  categoryValue: "9",
  difficulty: "easy",
  apiData: {},
  quesCounter: 0,
  score: 0,
  shuffledArray: [],
  btnDisable: false,
  correctAnswer: false,
};

const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setNoQues: (state, action) => {
      state.noQues = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setQuesCounter: (state, action) => {
      state.quesCounter = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setShuffledArray: (state, action) => {
      state.shuffledArray = action.payload;
    },
    setBtnDisable: (state, action) => {
      state.btnDisable = action.payload;
    },
  },
});

export const {
  setUserName,
  setApiData,
  setNoQues,
  setCategoryValue,
  setDifficulty,
  setQuesCounter,
  setScore,
  setShuffledArray,
  setBtnDisable,
} = quizSlice.actions;
export default quizSlice.reducer;
