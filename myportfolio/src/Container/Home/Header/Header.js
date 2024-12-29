import React, { useEffect, useState } from "react";
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from "../../../utilities/comman.ts";
import ScrollService from "../../../utilities/ScrollService.ts";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import rglogo1 from "../../../images/rglogo1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className="header-option-seperator header-option selct-option"
onClick={Screen.screen_name==="Home" ? window.location.reload.bind(window.location): () => switchScreen(i, Screen)}
      >
        <span>
          {Screen.screen_name === "AboutMe"
            ? "About  Me"
            : Screen.screen_name === "ContactMe"
            ? "Contact  Me"
            : Screen.screen_name}
        </span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    // if (selectedScreen === index)
    // classes += "selected-header-option";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div
      className="header-container"
      onClick={() => showHeaderOptions ? setShowHeaderOptions(!showHeaderOptions) : ""}
    >
      <div className="header-parent ">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div ><span> <img className="header-logo"src={rglogo1} alt="not found" />
</span></div>
      

             
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options "
              : "header-options "
          }
        >
          <div className={  showHeaderOptions
              ? "options_container "
              : "header-options"}>
          {getHeaderOptions()}
        </div>
         </div>
      </div>
    </div>
  );
}
