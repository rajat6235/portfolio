import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarausalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
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
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logosrc: "education.svg" },
    { label: "Work History ", logosrc: "work-history.svg" },
    { label: "Programming Skills", logosrc: "programming-skills.svg" },
    { label: "Projects", logosrc: "projects.svg" },
    { label: "Interests", logosrc: "interests.svg" },
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
        <div className="experience-description">
          <spam className="resume-decription-text">
            - Worked on company's multiple products like Vectio Home- Health and
            Vectio Client Portal.
          </spam>
          <br/>
          <spam className="resume-decription-text">
          Built reusable components using javaScript libraries like react
 big-calendar, react ag-grid, redux, graphql, redux-saga etc.
          </spam>
          <br/>
          <spam className="resume-decription-text">
          - Implemented new features on existing product which are
 now in production and being used by multiple clients.
          </spam>
          <br/>
          <spam className="resume-decription-text">
        - Created products with mobile-responsive and mobile-
 adaptive Ul.
          </spam>
          <br/>
          <spam className="resume-decription-text">
         - Improved the performance of the existing products by
 refactoring legacy code
          </spam>
          <br/>
          </div>
        </div>,
        <div className="resume-screen-container programming-skills-container" 
        key ="programming-skills">
            {programmingSkillDetails.map((skill,index)=>(
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet">
                        <span>
                            {skill.skill}
                        </span>
                        <div className="skill-percentage">
                            <div style={{width: skill.ratingPercentage + "%"}}
                            className='active-percentage'>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>,
        <div className="resume-screen-container" key ="projects">
            {projectDetails.map((projectDetails,index)=>(
                <ResumeHeading
                key={index}
                heading={projectDetails.title}
                subHeading={projectDetails.subHeading}
                description={projectDetails.description}
                fromDate={projectDetails.duration.fromDate}
                toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key ="interests">
<ResumeHeading
heading='Gyming'
description= 'Apart from being tech ethusiast and coder, I also love to work-out in gym and stay fit.'
/>
<ResumeHeading
heading='Cooking'
description= 'I like to cook healthy food.'
/>
<ResumeHeading
heading='Video Games'
description= 'I like to play video-games in my free time.'
/>
</div>
      </div>
    
  ];
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
