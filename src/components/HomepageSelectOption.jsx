import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer, displayModal } from "../features/timers/TimerSlice";
function HomepageSelectOption() {
  const dispatch = useDispatch();
  const { pomodoro, shortBreak, longBreak, isTimerRunning } = useSelector(
    (store) => store.timer
  );
  const { chosenColor } = useSelector((store) => store.color);
  const [selectedOption, setSelectedOption] = useState("pomodoro");

  const timerOptions = [
    { name: "pomodoro", time: pomodoro },
    { name: "short Break", time: shortBreak },
    { name: "long Break", time: longBreak },
  ];

  const handleOptionClick = (option) => {
    if (isTimerRunning) {
      dispatch(displayModal(true));

      setTimeout(() => {
        dispatch(displayModal(false));
      }, 2000);
      return;
    }
    setSelectedOption(option);
    dispatch(changeTimer(option));
  };

  return (
    <>
      <nav className="flex gap-6 bg-dark-blue-black rounded-[3.15rem] mb-20 p-4 mobile:gap-0">
        {timerOptions.map((option) => (
          <p
            key={option.name}
            className={`text-[1.4rem] mobile:text-[1.2rem]  font-bold py-6 px-10 mobile:px-8 rounded-[2.65rem] cursor-pointer transition-all duration-300 ${
              selectedOption === option.name
                ? ` text-dark-blue`
                : "text-pale-blue"
            }`}
            style={{
              backgroundColor:
                selectedOption === option.name ? chosenColor : "",
            }}
            onClick={() => handleOptionClick(option.name)}
          >
            {option.name}
          </p>
        ))}
      </nav>
    </>
  );
}

export default HomepageSelectOption;
