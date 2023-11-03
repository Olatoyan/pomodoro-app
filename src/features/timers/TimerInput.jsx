import { useSelector } from "react-redux";

function TimerInput({ name, time, onIncrease, onDecrease }) {
  const { isTimerRunning } = useSelector((store) => store.timer);

  function handleIncrease() {
    if (isTimerRunning) return;
    onIncrease();
  }
  function handleDecrease() {
    if (isTimerRunning) return;
    onDecrease();
  }

  return (
    <div className="w-full mobile:flex mobile:items-center">
      <p className="text-[1.2rem] font-bold opacity-40 text-dark-blue pb-3 mobile:w-full">
        {name}
      </p>
      <div className="bg-light-grey p-6 rounded-2xl flex justify-between mobile:w-full">
        <p className="text-[1.4rem] font-bold text-dark-blue ">{time / 60}</p>
        <div className="flex flex-col items-center gap-4">
          <img
            src="/icon-arrow-up.svg"
            alt="increase button"
            className={`${
              isTimerRunning ? "cursor-not-allowed" : "cursor-pointer"
            } `}
            onClick={handleIncrease}
          />

          <img
            src="/icon-arrow-down.svg"
            alt="decrease button"
            className={`${
              isTimerRunning ? "cursor-not-allowed" : "cursor-pointer"
            } `}
            onClick={handleDecrease}
          />
        </div>
      </div>
    </div>
  );
}

export default TimerInput;
