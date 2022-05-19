import React from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import './AboutMe.css'
export default function AboutMe(props) {
  let fadeInScreenHandler =(screen)=>{
      if (screen.fadeScreen !== props.id)
      return
      Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  
  const SCREEN_CONSTANTS ={
      description: "I am a full stack developer with a vast array of knowledge in different front end and back end languages, responsive frameworks, databases, and best code practices.",
highlights:{
    bullets:[
        "Full stack Web and mobile development",
        "Interactive Front End as per design",
        "React and React native",
        "Redux for state mangement",
        "Building Rest API",
        "Managing database",        
    ],
    heading: "Here are a Few Highlists:"
}
  }

  const renderHighlight = () => {
      return (
          SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
              <div className="highlight" key={i}>
                  <div className= "highlight- blop"></div>
                  <span>
                      {value}
                  </span>
              </div>
          ))
      )
  }
    return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
            <div className="about-me-profile"></div> 
            <div className="about-me-details">
                <span className="about-me-description">
                    {SCREEN_CONSTANTS.description}
                </span>
                <div className="about-me-highlights">
                     <div className="highlight-heading">
                         <span>
                             {SCREEN_CONSTANTS.highlights.heading}
                         </span>
                     </div>
                     {renderHighlight()}
                </div>
                <div className="about-me-options">
                <button className="btn primary-btn">Hire Me</button>
            <a href="resume21.pdf" download="Rajat resume21.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
                    </div>

            </div>

        </div>
      </div>
    </div>
  ); 
}
