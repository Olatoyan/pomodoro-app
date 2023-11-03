import { AiOutlineCheck } from "react-icons/ai";
import { changeColor } from "./ColorSlice";
import { useDispatch, useSelector } from "react-redux";

function ColorSelection() {
  const colorOptions = ["#f87070", "#70F3F8", "#D881F8"];
  const selectedColor = useSelector((store) => store.color.primaryColor);
  const dispatch = useDispatch();

  function handleColorChange(color) {
    dispatch(changeColor(color));
  }

  return (
    <div className="flex items-center gap-6">
      {colorOptions.map((color, index) => (
        <div
          key={index}
          onClick={() => handleColorChange(color)}
          style={{
            backgroundColor: color,
          }}
          className={` w-[4rem] h-[4rem] rounded-full cursor-pointer flex items-center justify-center`}
        >
          {color === selectedColor && (
            <AiOutlineCheck size={20} color="black" />
          )}
        </div>
      ))}
    </div>
  );
}

export default ColorSelection;
