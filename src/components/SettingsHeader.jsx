function SettingsHeader({ onToggle }) {
  return (
    <div className="flex justify-between items-center pb-12 border-b border-border-color">
      <h2 className="text-[2.8rem] mobile:text-[2rem] text-dark-blue-black font-bold">
        Settings
      </h2>
      <img
        src="/icon-close.svg"
        alt="close button"
        onClick={onToggle}
        className="cursor-pointer"
      />
    </div>
  );
}

export default SettingsHeader;
