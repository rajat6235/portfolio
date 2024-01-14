import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/projects/trove/img1.png";
import img2 from "../../assets/projects/trove/img2.png";
import img3 from "../../assets/projects/trove/img3.png";
import img4 from "../../assets/projects/trove/img4.png";
import img5 from "../../assets/projects/trove/img5.png";
import img6 from "../../assets/projects/trove/img6.png";
import img7 from "../../assets/projects/trove/img7.png";
import ektaMart1 from "../../assets/projects/ektamart/ektamart1.png";
import ektaMart2 from "../../assets/projects/ektamart/ektamart2.png";
import ektaMart3 from "../../assets/projects/ektamart/ektamart3.png";
import ektaMart4 from "../../assets/projects/ektamart/ektamart4.png";
import ektaMart5 from "../../assets/projects/ektamart/ektamart5.png";
import jayTv1 from "../../assets/projects/jayTv/jayTv1.png";
import jayTv2 from "../../assets/projects/jayTv/jayTv2.png";
import jayTv3 from "../../assets/projects/jayTv/jayTv3.png";
import jayTv4 from "../../assets/projects/jayTv/jayTv4.png";
import jayTv5 from "../../assets/projects/jayTv/jayTv5.png";
import task1 from "../../assets/projects/TaskManagement/task1.png";
import task2 from "../../assets/projects/TaskManagement/task2.png";
import task3 from "../../assets/projects/TaskManagement/task3.png";
import task4 from "../../assets/projects/TaskManagement/task4.png";
import task5 from "../../assets/projects/TaskManagement/task5.png";

import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ImageModal from "../ImageModal/ImageModal";

const Projects = (props) => {
  const [modalState, setModalState] = useState({
    type: null,
    isOpen: false,
    currentImage: 0,
  });

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  const troveImg = [img1, img2, img3, img4, img5, img6, img7];
  const ektaMartImgs = [ektaMart1, ektaMart2, ektaMart3, ektaMart4, ektaMart5];
  const jayTvImgs = [jayTv1, jayTv2, jayTv3, jayTv4, jayTv5];
  const taskImgs = [task1, task2, task3, task4, task5];
  const openModal = (type, index) => {
    setModalState({
      type: type,
      isOpen: true,
      currentImage: index,
    });
  };

  const closeModal = () => {
    setModalState({
      type: null,
      isOpen: false,
      currentImage: 0,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: modalState.isOpen ? false : true,
  };
  const projectImgs = {
    trove: troveImg,
    ektaMart: ektaMartImgs,
    jayTv: jayTvImgs,
    task: taskImgs,
  };

  return (
    <div
      className="projects-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"Work history"} />
        <div className="single-project">
        <div className="slider">
            <Slider {...settings}>
              {troveImg.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => openModal("trove", index)}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="images"
                  />
                  <div className="image-overlay">
                    <p>Click here to view full-size image</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="description-container" style={{ width: "100%" }}>
            <h4 className="project-title"> Tr0ve</h4>
            <p>
              The NFT Portfolio and Search project encompassed the creation of a
              comprehensive web application designed to empower users in
              managing their NFT investments across diverse blockchain
              platforms.
            </p>
            {/* <h5 className="sub-title">Technologies</h5>
            <p>
              ReactJS, NextJS,recharts,lodash,tailwind CSS,next- Technologies
              auth,moment,dotenv,masinry-layout,axios,react-infinite-scroll,react-
              router-dom,react-redux
            </p> */}
            <h5 className="sub-title">Roles and Responsibilities</h5>
            <ul>
              <li className="description">
                <span className="subHeading_p1">Portfolio section:</span>{" "}
                Developed a pivotal dynamic portfolio displaying NFT asset
                values across blockchains, aligning UI closely with client
                designs using React and Recharts.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  {" "}
                  Search Page Development:{" "}
                </span>
                Executed search page development per new designs, optimizing
                performance for efficient asset searches and enhancing overall
                system responsiveness.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  {" "}
                  UI and Functional Overhaul:
                </span>{" "}
                Revamped sections for a cohesive and streamlined user
                experience.
              </li>
              <li className="description">
                <span className="subHeading_p1">Blockchain Integration:</span>{" "}
                Integrated technologies like Solana and VeVe, broadening
                platform compatibility.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Bug Fixes, Code Refactoring, Deployment, and Client
                  Interaction:
                </span>{" "}
                Addressed bugs, conducted code refactoring to enhance system
                efficiency and maintainability, spearheaded the deployment
                process, and actively interacted with clients for a
                comprehensive understanding of their needs and project
                alignment.
              </li>
            </ul>

            {/* You can dynamically change the description based on the selected image */}
          </div>
        </div>

        <div className="single-project">
        
          <div className="slider">
            <Slider {...settings}>
              {ektaMartImgs.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => openModal("ektaMart", index)}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="images"
                  />
                  <div className="image-overlay">
                    <p>Click here to view full-size image</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="description-container" style={{ width: "100%" }}>
            <h4 className="project-title"> EktaMart</h4>
            <p>
              EktaMart is an e-commerce platform wherein vendors can list their
              products through a dedicated vendor portal. The administrative
              portal oversees the management and regulation of all participating
              vendors.
            </p>
            {/* <h5 className="sub-title">Technologies</h5>
            <p>
              ReactJS, NextJS,recharts,lodash,tailwind CSS,next- Technologies
              auth,moment,dotenv,masinry-layout,axios,react-infinite-scroll,react-
              router-dom,react-redux
            </p> */}
            <h5 className="sub-title">Roles and Responsibilities</h5>
            <ul>
              <li className="description">
                <span className="subHeading_p1">Codebase Migration:</span>{" "}
                Successfully migrated the client portal code from React to
                Next.js 13.5 using the app router.
              </li>
              <li className="description">
                <span className="subHeading_p1">Feature Enhancement:</span>{" "}
                Implemented new features and functionalities to align with
                client requirements.
              </li>
              <li className="description">
                <span className="subHeading_p1">UI Implementation:</span>{" "}
                Executed UI changes to enhance the overall user experience.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Bug Fixes and Code Refactoring:
                </span>{" "}
                Effectively addressed bugs and conducted strategic code
                refactoring to optimize system efficiency and maintainability.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Deployment and Client Interaction:
                </span>{" "}
                Spearheaded the deployment process, ensuring a seamless
                transition of the application, while actively interacting with
                clients to understand their needs and align with project goals.
              </li>
            </ul>

            {/* You can dynamically change the description based on the selected image */}
          </div>
        </div>
        <div className="single-project">
          <div className="slider">
            <Slider {...settings}>
              {jayTvImgs.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => openModal("jayTv", index)}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="images"
                  />
                  <div className="image-overlay">
                    <p>Click here to view full-size image</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="description-container" style={{ width: "100%" }}>
            <h4 className="project-title"> JayTv Admin Panel</h4>
            <p>
              JayTV, strategically broadcasted across store outlets on Android
              TVs, required an efficient admin solution. The intuitive admin
              panel serves as a hub for administrators to access crucial
              information about diverse locations, allowing seamless monitoring
              of videos, content uploads, playback control, and location history
              review.
            </p>
            {/* <h5 className="sub-title">Technologies</h5>
            <p>
              ReactJS, NextJS,recharts,lodash,tailwind CSS,next- Technologies
              auth,moment,dotenv,masinry-layout,axios,react-infinite-scroll,react-
              router-dom,react-redux
            </p> */}
            <h5 className="sub-title">Roles and Responsibilities</h5>
            <ul>
              <li className="description">
                <span className="subHeading_p1">Online History Feature:</span>{" "}
                Implemented functionality for users to view the online history
                of a location. Created backend APIs and developed a frontend
                graph to visualize online history.
              </li>
              <li className="description">
                <span className="subHeading_p1">Playlist Management:</span>{" "}
                Implemented functionality for playing playlists at multiple
                locations, creating default playlists, uploading advertisement
                videos, and uploading exclusive videos. Executed backend API
                changes and corresponding frontend modifications.
              </li>
              <li className="description">
                <span className="subHeading_p1">API Alignment:</span> Made
                changes in the API structure to meet the requirements of the
                Android TV frontend.
              </li>
              <li className="description">
                <span className="subHeading_p1">Deployment:</span> Managed the
                deployment of the project on an Ubuntu server, including regular
                updates and changes.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Bug Fixes and Code Refactoring:
                </span>{" "}
                Effectively addressed bugs and conducted strategic code
                refactoring to optimize system efficiency and maintainability.
              </li>
            </ul>

            {/* You can dynamically change the description based on the selected image */}
          </div>
        </div>
        <div className="single-project">
          <div className="slider">
            <Slider {...settings}>
              {taskImgs.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => openModal("task", index)}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="images"
                  />
                  <div className="image-overlay">
                    <p>Click here to view full-size image</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="description-container" style={{ width: "100%" }}>
            <h4 className="project-title"> Task Management App</h4>
            <p>
              The Task Management application streamlines task distribution.
              Admins create, assign, update, and delete tasks, tracking employee
              completion times through a time tracker. Employees submit files,
              and admins manage employee details. Intake team members assign
              tasks and monitor completion times for efficient coordination.
            </p>
            {/* <h5 className="sub-title">Technologies</h5>
            <p>
              ReactJS, NextJS,recharts,lodash,tailwind CSS,next- Technologies
              auth,moment,dotenv,masinry-layout,axios,react-infinite-scroll,react-
              router-dom,react-redux
            </p> */}
            <h5 className="sub-title">Roles and Responsibilities</h5>
            <ul>
              <li className="description">
                <span className="subHeading_p1">Full Stack Development:</span>{" "}
                Developed the entire application, managing both the React.js
                frontend and backend using Firebase Cloud. Utilized Node.js for
                Firebase Admin, ensuring a seamless and integrated system.
              </li>
              <li className="description">
                <span className="subHeading_p1">System Architecture:</span>{" "}
                Architected the system design, implementing best practices for
                scalability, performance, and security, resulting in a robust
                application infrastructure.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Client Interaction and Requirement Analysis:
                </span>{" "}
                Personally engaged with the client to understand their needs and
                conducted a comprehensive analysis, translating requirements
                into a user-friendly application with intuitive features and
                functionalities.
              </li>
              <li className="description">
                <span className="subHeading_p1">Quality Assurance:</span>{" "}
                Conducted thorough testing and debugging to ensure a
                high-quality, error-free application, providing a seamless
                experience for users.
              </li>
              <li className="description">
                <span className="subHeading_p1">
                  Deployment and Maintenance:
                </span>{" "}
                Led the deployment process on the Ubuntu server, ensuring a
                smooth transition to production. Additionally, actively handled
                ongoing maintenance tasks for optimal system performance.
              </li>
            </ul>

            {/* You can dynamically change the description based on the selected image */}
          </div>
        </div>
        {modalState.isOpen && (
          <ImageModal
            isOpen={modalState.isOpen}
            onRequestClose={closeModal}
            images={projectImgs[modalState.type]}
            initialSlide={modalState.currentImage}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
