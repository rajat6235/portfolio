import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading.tsx";
import ScrollService from "../../utilities/ScrollService.ts";
import Animations from "../../utilities/Animations.ts";
import "./Resume.css";
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [selectedBulletKey, setSelectedBulletKey] = useState("education");

  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading" style={{ paddingTop: "10px" }}>
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span> {props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
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
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg", key: "education" },
    {
      label: "Work History ",
      logoSrc: "work-history.svg",
      key: "work_experience",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
      key: "programming_skills",
    },
    // { label: "Projects", logoSrc: "projects.svg", key: "projects" },
    { label: "Additional Skills", logoSrc: "interests.svg", key: "interests" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "TypeSript", ratingPercentage: 65 },
    { skill: "Next Js", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Redux", ratingPercentage: 85 },
    { skill: "Express Js", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];



  const handleCarousal = (index, bullet) => {
    let offSetHeight = 360;

    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
    setSelectedBulletKey(bullet.key);

    // Scroll to the corresponding screen
    const screenElement = document.getElementById(`screen-${index}`);
    if (screenElement) {
      screenElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      const icon = bullet.logoSrc
        ? require(`../../assets/Resume/${bullet.logoSrc}`)
        : "";
      return (
        <div
          onClick={() => handleCarousal(index, bullet)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img className="bullet-logo" src={icon} alt="B" />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };
  const allDetails = {
    // projects: (
    //   <div className="resume-screen-container" key="projects">
    //     {projectDetails.map((projectsDetails, index) => (
    //       <ResumeHeading
    //         key={index}
    //         heading={projectsDetails.title}
    //         subHeading={projectsDetails.subHeading}
    //         description={projectsDetails.description}
    //         // fromDate={projectsDetails.duration.fromDate}
    //         // toDate={projectsDetails.duration.toDate}
    //       />
    //     ))}
    //   </div>
    // ),
    education: (
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"U.I.E.T Panjab University, Chandigarh"}
          subHeading={"Bachelor's of Engineering in Information Technology"}
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
          heading={"Doon International school, Mohali"}
          subHeading={"Class 10th (CBSE))"}
          fromDate={"2010"}
          toDate={"2011"}
        />
      </div>
    ),
    
  interests: (
    <div className="resume-screen-container additionalskills" key="interests" style={{paddingRight:'10px'}}>
      <ResumeHeading
        heading="Communication & Interpersonal skills"
        description="Have the ability to communicate the desired message effectively while keeping the listener engaged. Can organize and communicate clearly to support a team or project."
      />
      <ResumeHeading
        heading="Leadership & Management skills"
        description="Skilled in organizing other people to reach a shared goal and keep the team motivated to reach the desired goal. Can organize and communicate clearly to support a team or project. Proven leadership skills in managing projects and leading teams to success."
      />
      <ResumeHeading
        heading="Quick & Visual Learner"
        description="I am a very strong visual learner and am determined to solve problems and quickly find an effective solution."
      />
      <ResumeHeading
        heading="Effective Problem Solver"
        description="I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution and implementing a solution."
      />
      <ResumeHeading
        heading="Collaborative Team Player"
        description="Work effectively in a team environment, fostering open communication and collaboration. Able to contribute positively to group dynamics and encourage team members to achieve common goals."
      />
      {/* <ResumeHeading
        heading="Proven Leadership Skills"
        description="Demonstrated leadership abilities in overseeing projects and guiding teams. Proactive in taking initiative, making decisions, and providing direction to ensure project success."
      /> */}
      <ResumeHeading
        heading="Strong Analytical and Critical Thinking"
        description="Possess strong analytical and critical thinking skills, enabling a systematic approach to problem-solving. Able to analyze complex situations, identify key issues, and develop effective solutions."
      />
    </div>
  ),
    programming_skills: (
      <div
        className="resume-screen-container programming-skills-container"
        key="programming_skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
    ),
    work_experience: (
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container" style={{ paddingRight: "10px" }}>
          <ResumeHeading
            heading={"Nevrio Technology Services Pvt Ltd"}
            subHeading={"Software Developer"}
            fromDate={"26 October, 2022"}
            toDate={"present"}
          />
          {/* <div className="experience-description">
        <span className="resume-description-text">
          Worked as Front End Developer
        </span>
      </div> */}
          <div className="experience-description">
              
            <ul>
              <li>
                Led diverse projects, including Tr0ve, ektamart, flexi-spy
                chatbot, and Jay TV admin panel, with a primary focus on
                developing key components and complete websites to precisely
                meet client specifications.
              </li>
              <li>
                Identified and resolved functional/UI bugs in existing
                codebases, significantly enhancing overall project quality.
              </li>
              <li>
                  Executed strategic code refactoring for performance
                optimization, aligning with industry best practices and
                leveraging cutting-edge technologies.
              </li>
              <li>
                Ensured consistent adherence to project deadlines, showcasing a
                robust commitment to timely and high-quality deliverables.
              </li>
              <li>
                Managed end-to-end project responsibilities, from code
                deployment to effective client communication.
              </li>
              <li>
                Proactively engaged in client interactions, ensuring a deep
                understanding of requirements and maintaining seamless
                communication channels.
              </li>
            </ul>
          </div>

          <div style={{ paddingTop: "15px" }}>
            <ResumeHeading
              heading={"Proelio Technologies"}
              subHeading={"Software Developer Intern"}
              fromDate={"28 July, 2021"}
              toDate={"3 March, 2022"}
            />
            {/* <div className="experience-description">
        <span className="resume-description-text">
          Worked as Front End Developer
        </span>
      </div> */}
            <div className="experience-description">
              <ul>
                <li>
                  Worked on company's multiple products like Vectio Home- Health
                  and Vectio Client Portal.{" "}
                </li>
                <li>
                  Built reusable components using javaScript libraries like
                  react big-calendar, react ag-grid, redux, graphql, redux-saga
                  etc.{" "}
                </li>
                <li>
                  Implemented innovative features on existing products, now in
                  production and utilized by multiple clients.
                </li>
                <li>
                  Created products with mobile-responsive and mobile- adaptive
                  Ul.
                </li>
                <li>
                  Enhanced the performance of existing products through
                  strategic refactoring of legacy code.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  };
  const getResumeScreen = () => {
    return (
      <div className="resume-details-carousal">
        {allDetails[selectedBulletKey]}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    //classname =-fade-in
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
