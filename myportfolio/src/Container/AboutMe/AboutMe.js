import React from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
export default function AboutMe(props) {
  let fadeInScreenHandler =(screen)=>{
      if (screen.fadeScreen !== props.id)
      return
      Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    return (
    <div className="about-me screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      </div>
    </div>
  );
}
