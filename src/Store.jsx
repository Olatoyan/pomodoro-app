import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/colors/ColorSlice";
import fontReducer from "./features/fonts/FontSlice";
import timerReducer from "./features/timers/TimerSlice";
const store = configureStore({
  reducer: {
    color: colorReducer,
    font: fontReducer,
    timer: timerReducer,
  },
});

export default store;
