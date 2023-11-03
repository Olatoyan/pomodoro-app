import { useState } from "react";
import HomepageSelectOption from "./HomepageSelectOption";
import PomodoroTimer from "./PomodoroTimer";

function HomepageSelectOptionBox() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="relative flex flex-col justify-center items-center">
      <HomepageSelectOption setIsLoading={setIsLoading} isLoading={isLoading} />
      <PomodoroTimer />
    </div>
  );
}

export default HomepageSelectOptionBox;
