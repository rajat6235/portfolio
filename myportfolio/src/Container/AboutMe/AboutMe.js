import React from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a highly skilled Full Stack Web Developer, currently based in Mohali, Punjab, India. My primary focus is on Front-End Development, and I bring a comprehensive understanding of various front-end and back-end languages, responsive frameworks, and database management systems. I aspire to excel in the field of web development and make impactful contributions to the ever-evolving technology industry.",
    highlights: {
      bullets: [
        "Full stack Web and mobile development",
        "Interactive Front End as per design",
        "Redux for state mangement",
        "Building Rest API",
        "Managing database",
      ],
      heading: "Here are a Few Highlists:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          {/* <div className="about-me-profile"></div>  */}
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a
                href="RajatGuptaResume2022.pdf"
                download="RajatGuptaResume2022.pdf"
              >
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
