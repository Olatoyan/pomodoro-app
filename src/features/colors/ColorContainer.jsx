import ColorHeading from "./ColorHeading";
import ColorSelection from "./ColorSelection";

function ColorContainer() {
  return (
    <div className="flex justify-between items-center pt-8 pb-12  mobile:flex-col mobile:gap-4">
      <ColorHeading />
      <ColorSelection />
    </div>
  );
}

export default ColorContainer;
