import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primaryColor: "#f87070",
  chosenColor: "#f87070",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor(state, action) {
      state.primaryColor = action.payload;
    },
    updateColor(state, action) {
      state.chosenColor = action.payload;
    },
  },
});

export default colorSlice.reducer;

export const { changeColor, updateColor } = colorSlice.actions;
