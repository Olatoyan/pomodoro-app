import { useDispatch, useSelector } from "react-redux";
import { changeFont } from "./FontSlice";

function FontSelection() {
  const primaryFont = useSelector((store) => store.font.primaryFont);
  const dispatch = useDispatch();

  function handleFontChange(font) {
    dispatch(changeFont(font));
  }

  const fontOptions = ["kumbh", "roboto", "space"];
  return (
    <div className="flex items-center gap-6">
      {fontOptions.map((fonts, index) => (
        <div
          key={index}
          onClick={() => handleFontChange(fonts)}
          className={`h-[4rem] w-[4rem] rounded-full cursor-pointer flex items-center justify-center font-${fonts}  text-[1.5rem] font-bold ${
            primaryFont === fonts
              ? "text-white bg-dark-blue-black"
              : "bg-light-grey text-dark-blue-black hover:border-2 hover:border-solid  hover:border-light-grey"
          }`}
        >
          Aa
        </div>
      ))}
    </div>
  );
}

export default FontSelection;
