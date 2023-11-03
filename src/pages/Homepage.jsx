import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import SettingsContainer from "../components/SettingsContainer";
import HomepageSelectOptionBox from "../components/HomepageSelectOptionBox";
import SettingsBtn from "../components/SettingsBtn";
import Loading from "../components/Loading";

function Homepage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const { chosenFont } = useSelector((store) => store.font);
  function handleToggle() {
    setIsSettingsOpen((prev) => !prev);
  }

  let fontFamily = "Kumbh Sans, sans-serif";
  if (chosenFont === "kumbh") {
    fontFamily = "Kumbh Sans, sans-serif";
  } else if (chosenFont === "roboto") {
    fontFamily = "Roboto Slab, serif";
  } else if (chosenFont === "space") {
    fontFamily = "Space Mono, monospace";
  }

  const fontStyles = {
    fontFamily: fontFamily,
  };

  return (
    <div
      className={`w-full text-white flex flex-col items-center  pt-16 gap-20 font-${chosenFont} relative overflow-y-hidden`}
      style={fontStyles}
    >
      <Header />
      <HomepageSelectOptionBox />
      <SettingsBtn onToggle={handleToggle} />
      <SettingsContainer
        onToggle={handleToggle}
        isSettingsOpen={isSettingsOpen}
      />
      <Loading />
    </div>
  );
}

export default Homepage;
