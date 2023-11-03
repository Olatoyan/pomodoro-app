import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { displayModal, setTimerRunning } from "../features/timers/TimerSlice";

function PomodoroTimer() {
  const dispatch = useDispatch();
  const selectedTimer = useSelector((store) => store.timer.selectedTimer);
  const { pomodoro, shortBreak, longBreak } = useSelector(
    (store) => store.timer
  );
  const selectedColor = useSelector((store) => store.color.chosenColor);

  const [timer, setTimer] = useState(pomodoro);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const getSelectedTimerDuration = () => {
    if (selectedTimer === "pomodoro") {
      return pomodoro;
    } else if (selectedTimer === "short Break") {
      return shortBreak;
    } else if (selectedTimer === "long Break") {
      return longBreak;
    }
  };

  const selectedTimerDuration = getSelectedTimerDuration();

  useEffect(() => {
    if (selectedTimer === "pomodoro") {
      setTimer(pomodoro);
    } else if (selectedTimer === "short Break") {
      setTimer(shortBreak);
    } else if (selectedTimer === "long Break") {
      setTimer(longBreak);
    }
  }, [selectedTimer, pomodoro, shortBreak, longBreak]);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
      setIsFinished(true);
      dispatch(setTimerRunning(false));
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer, dispatch]);

  useEffect(() => {
    if (isFinished && timer === 0) {
      setIsActive(false);
      dispatch(displayModal(false));
      dispatch(setTimerRunning(false));
    }
  }, [isFinished, timer, dispatch]);

  function toggleTimer() {
    if (!isActive) {
      if (isFinished) {
        setTimer(selectedTimerDuration);
        setIsFinished(false);
      }
      setIsActive(true);
      dispatch(setTimerRunning(true));
    } else {
      setIsActive(!isActive);
      dispatch(setTimerRunning(!isActive));
    }
  }

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const seconds = time % 60;
    const pad = (value) => (value < 10 ? `0${value}` : value);
    return `${pad(mins)}:${pad(seconds)}`;
  };

  const radius = window.innerWidth < 460 ? 117 : 170;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset =
    ((selectedTimerDuration - timer) / selectedTimerDuration) * circumference;

  return (
    <div className="w-[41rem] h-[41rem] mobile:w-[30rem] mobile:h-[30rem] rounded-full bg-timer shadow-timer flex justify-center items-center">
      <div className="w-[36.6rem] h-[36.6rem] mobile:w-[24.8rem] mobile:h-[24.8rem] rounded-full relative flex justify-center items-center flex-col bg-dark-blue-black ">
        <svg className="h-full w-full absolute rotate-[270deg]">
          <circle
            cy="50%"
            cx="50%"
            r={radius}
            className="circle"
            stroke={selectedColor}
            strokeWidth={10}
            fill="none"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: isFinished ? 0 : strokeOffset,
            }}
          />
        </svg>
        <p className="text-[10rem] mobile:text-[7rem] font-bold tracking-[-0.5rem] mobile:tracking-[-0.4rem]  text-pale-blue z-[2]">
          {formatTime(timer)}
        </p>
        <button
          className={`text-[1.6rem] mobile:text-[1.4rem]  font-bold tracking-[1.5rem] mobile:tracking-[1.3125rem]   uppercase z-[3] `}
          style={{
            color: selectedColor,
          }}
          onClick={toggleTimer}
        >
          {isActive ? "Pause" : isFinished ? "restart" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
