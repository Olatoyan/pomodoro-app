import FontHeading from "./FontHeading";
import FontSelection from "./FontSelection";

function FontContainer() {
  return (
    <div className="flex justify-between items-center py-10 border-b border-border-color mobile:flex-col mobile:gap-4">
      <FontHeading />
      <FontSelection />
    </div>
  );
}

export default FontContainer;
