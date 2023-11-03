function SettingsBtn({ onToggle }) {
  return (
    <svg className="w-[3rem] h-[3rem]" onClick={onToggle}>
      <use
        xlinkHref="/icon-settings.svg#setting"
        className="cursor-pointer fill-pale-blue hover:fill-[#fff] hover:opacity-100"
      ></use>
    </svg>
  );
}

export default SettingsBtn;
