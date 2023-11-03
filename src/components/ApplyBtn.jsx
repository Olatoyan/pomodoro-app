import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../features/colors/ColorSlice";
import { updateFont } from "../features/fonts/FontSlice";

function ApplyBtn({ onToggle }) {
  const { chosenColor, primaryColor } = useSelector((store) => store.color);
  const { primaryFont } = useSelector((store) => store.font);
  const dispatch = useDispatch();
  function updateClasses() {
    dispatch(updateColor(primaryColor));
    dispatch(updateFont(primaryFont));
    onToggle();
  }
  return (
    <button
      className={`text-white  py-6 px-20 text-[1.6rem] font-bold rounded-[2.65rem] hover:bg-[#ff9696]  transition-all duration-300 -mb-24 mobile:-mb-16 self-center`}
      onClick={updateClasses}
      style={{
        backgroundColor: chosenColor,
      }}
    >
      Apply
    </button>
  );
}

export default ApplyBtn;
