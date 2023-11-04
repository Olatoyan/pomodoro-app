import { createSlice } from "@reduxjs/toolkit";

const seconds = 60;

const initialState = {
  pomodoro: 25 * seconds,
  shortBreak: 5 * seconds,
  longBreak: 15 * seconds,
  selectedTimer: "pomodoro",
  isTimerRunning: false,
  isModalOpen: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    increasePomodoro(state) {
      if (state.pomodoro < 60 * seconds) {
        state.pomodoro += 60;
      }
    },
    decreasePomodoro(state) {
      if (state.pomodoro > 60) {
        state.pomodoro -= 60;
      }
    },
    increaseShortBreak(state) {
      if (state.shortBreak < 25 * seconds) {
        state.shortBreak += 60;
      }
    },
    decreaseShortBreak(state) {
      if (state.shortBreak > 60) {
        state.shortBreak -= 60;
      }
    },
    increaseLongBreak(state) {
      if (state.longBreak < 45 * seconds) {
        state.longBreak += 60;
      }
    },
    decreaseLongBreak(state) {
      if (state.longBreak > 60) {
        state.longBreak -= 60;
      }
    },
    changeTimer(state, action) {
      state.selectedTimer = action.payload;
    },
    setTimerRunning(state, action) {
      state.isTimerRunning = action.payload;
    },
    displayModal(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export default timerSlice.reducer;

export const {
  increasePomodoro,
  decreasePomodoro,
  increaseShortBreak,
  decreaseShortBreak,
  increaseLongBreak,
  decreaseLongBreak,
  changeTimer,
  setTimerRunning,
  displayModal,
} = timerSlice.actions;
