import ColorContainer from "../features/colors/ColorContainer";
import FontContainer from "../features/fonts/FontContainer";
import Timers from "../features/timers/Timers";
import ApplyBtn from "./ApplyBtn";
import SettingsHeader from "./SettingsHeader";

function SettingsContainer({ onToggle, isSettingsOpen }) {
  const containerStyle = {
    transform: isSettingsOpen ? "translateY(0%)" : "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <div
        className="w-full absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center mobile:px-8 mobile:py-20"
        style={containerStyle}
      >
        <div className="max-w-[54rem] w-full rounded-[2.5rem] mobile:rounded-3xl bg-white p-16 flex flex-col mobile:py-8 mobile:px-6">
          <SettingsHeader onToggle={onToggle} />
          <Timers />
          <FontContainer />
          <ColorContainer />
          <ApplyBtn onToggle={onToggle} />
        </div>
      </div>
      <div
        className={`${
          isSettingsOpen && "w-full h-full fixed top-0 left-0 bg-overlay"
        }`}
      ></div>
    </>
  );
}

export default SettingsContainer;
