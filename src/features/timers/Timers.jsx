import { useDispatch, useSelector } from "react-redux";
import TimerInput from "./TimerInput";
import {
  decreaseLongBreak,
  decreasePomodoro,
  decreaseShortBreak,
  increaseLongBreak,
  increasePomodoro,
  increaseShortBreak,
} from "./TimerSlice";

function Timers() {
  const { pomodoro, shortBreak, longBreak, isTimerRunning } = useSelector(
    (store) => store.timer
  );
  // useSelector(store =)

  const dispatch = useDispatch();

  function handleIncPomodoro() {
    dispatch(increasePomodoro());
  }
  function handleDecPomodoro() {
    dispatch(decreasePomodoro());
  }

  function handleIncShortBreak() {
    dispatch(increaseShortBreak());
  }
  function handleDecShortBreak() {
    dispatch(decreaseShortBreak());
  }

  function handleIncLongBreak() {
    dispatch(increaseLongBreak());
  }
  function handleDecLongBreak() {
    dispatch(decreaseLongBreak());
  }

  return (
    <div className="py-10 border-b border-border-color">
      <p className="text-dark-blue text-[1.3rem] mobile:text-[1.1rem] font-bold tracking-[0.5rem] mobile:tracking-[0.4231rem] uppercase pb-9 mobile:text-center">
        Time (minutes)
      </p>
      <div className="flex items-center gap-8 mobile:flex-col">
        <TimerInput
          name="pomodoro"
          time={pomodoro}
          onIncrease={handleIncPomodoro}
          onDecrease={handleDecPomodoro}
        />
        <TimerInput
          name="short break"
          time={shortBreak}
          onIncrease={handleIncShortBreak}
          onDecrease={handleDecShortBreak}
        />
        <TimerInput
          name="long break"
          time={longBreak}
          onIncrease={handleIncLongBreak}
          onDecrease={handleDecLongBreak}
        />
      </div>
      {isTimerRunning && (
        <p className="text-red-600 pt-6 text-[1.2rem] font-bold">
          A Timer is running. Pause it to change mode
        </p>
      )}
    </div>
  );
}

export default Timers;
