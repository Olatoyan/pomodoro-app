import { useSelector } from "react-redux";

function Loading() {
  const { isModalOpen } = useSelector((store) => store.timer);

  const containerStyle = {
    transform: isModalOpen ? "translateY(0%)" : "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      className={
        " fixed z-10 top-0 w-full flex justify-center items-center h-full"
      }
      style={containerStyle}
    >
      <div className="text-dark-blue text-[2rem] bg-white p-16 rounded-[3rem] text-center max-w-[54rem] w-full">
        <p>A timer is running. Pause it to change mode</p>
      </div>
    </div>
  );
}

export default Loading;
