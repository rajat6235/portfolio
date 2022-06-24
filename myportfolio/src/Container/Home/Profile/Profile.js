import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>{" "}
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="add links to github etc here">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Rajat</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary- text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Developer 🛑 ",
                    1000,
                    "React Developer 💻 ",
                    1000,
                    "Front End Developer ➬ ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" 
            onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me</button>
            <a href="resume21.pdf" download="Rajat resume21.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
