import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primaryFont: "kumbh",
  chosenFont: "kumbh",
};

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    changeFont(state, action) {
      state.primaryFont = action.payload;
    },
    updateFont(state, action) {
      state.chosenFont = action.payload;
    },
  },
});

export default fontSlice.reducer;

export const { changeFont, updateFont } = fontSlice.actions;
