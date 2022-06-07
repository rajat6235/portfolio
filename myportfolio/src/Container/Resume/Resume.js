import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import "./Resume.css" 
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarausalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
      return(
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span> {props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>
    )
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History ", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Express Js", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: " Technologies Used : React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: " Technologies Used : React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: " Technologies Used : React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"U.I.E.T Panjab University, Chandigarh"}
        subHeading={"BACHELOR'S OF ENGINEERING IN INFORMATION TECHNOLOGY"}
        fromDate={"2013"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"PML S.D public school, Chandigarh"}
        subHeading={"Class 12th non-medical science (CBSE))"}
        fromDate={"2012"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"PML S.D public school, Chandigarh"}
        subHeading={"Class 12th non-medical science (CBSE))"}
        fromDate={"2012"}
        toDate={"2013"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Proelio Technologies"}
        subHeading={"Front End Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Worked as Front End Developer
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-decription-text">
          - Worked on company's multiple products like Vectio Home- Health and
          Vectio Client Portal.
        </span>
        <br />
        <span className="resume-decription-text">
          Built reusable components using javaScript libraries like react
          big-calendar, react ag-grid, redux, graphql, redux-saga etc.
        </span>
        <br />
        <span className="resume-decription-text">
          - Implemented new features on existing product which are now in
          production and being used by multiple clients.
        </span>
        <br />
        <span className="resume-decription-text">
          - Created products with mobile-responsive and mobile- adaptive Ul.
        </span>
        <br />
        <span className="resume-decription-text">
          - Improved the performance of the existing products by refactoring
          legacy code
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet">
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Gyming"
          description="Apart from being tech ethusiast and coder, I also love to work-out in gym and stay fit."
        />
        <ResumeHeading
          heading="Cooking"
          description="I like to cook healthy food."
        />
        <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while playing competitive games."
        />
      </div>
    </div>,
  ];
  const handleCrousal = (index) => {
    let offSetHeight = 360;
    let newCrousalOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" },
    };
    setCarausalOffSetStyle(newCrousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div onClick={() => handleCrousal(index)}
      className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
     key={index}>
         <img className="bullet-logo"
         src ={require(`../../assets/Resume/${bullet.logoSrc}`).default}
         alt="B"/>
     <span className="bullet-label">{bullet.label}</span>
     </div>
    ));
  }
  const getResumeScreen = () =>{
      return(
          <div
          style={carousalOffSetStyle.style}
          className='resume-details-carousal'>
              {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
      )
  }


  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className='bullet-icons'></div>
                    <div className='bullets'>{getBullets()}</div>
                </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
