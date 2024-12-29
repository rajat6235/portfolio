import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading.tsx";
import Animations from "../../utilities/Animations.ts";
import ScrollService from "../../utilities/ScrollService.ts";
import ImageModal from "../ImageModal/ImageModal.tsx";
import { projectData } from "./ProjectsData.tsx";

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

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

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
    arrows: !modalState.isOpen,
  };

  const renderProject = (projectKey) => {
    const project = projectData[projectKey];

    return (
      <div className="single-project" key={projectKey}>
        <div className="slider">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div
                key={index}
                className="image-container"
                onClick={() => openModal(projectKey, index)}
              >
                <img src={image} alt={`${project.title} ${index + 1}`} className="images" />
                <div className="image-overlay">
                  <p>Click here to view full-size image</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="description-container" style={{ width: "100%" }}>
          <h4 className="project-title">{project.title}</h4>
          <p>{project.description}</p>
          <h5 className="sub-title">Roles and Responsibilities</h5>
          <ul>
            {project.responsibilities.map((resp, index) => (
              <li key={index} className="description">
                <span className="subHeading_p1">{resp.title}:</span>{" "}
                {resp.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container screen-container fade-in" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"Work history"} />
        {Object.keys(projectData).map(projectKey => renderProject(projectKey))}
        
        {modalState.isOpen && (
          <ImageModal
            isOpen={modalState.isOpen}
            onRequestClose={closeModal}
            images={projectData[modalState.type].images}
            initialSlide={modalState.currentImage}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;