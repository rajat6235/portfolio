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
              <a href="https://www.facebook.com/rajat6235">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/rajat6235">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/rajat6235">
                <i className="fa fa-github"></i>
              </a>
              <a href="tel:7837733549"> 
              <i className="fa fa-phone"></i>
               </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Rajat Gupta</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary- text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    "Ethusiastic Developer 🛑 ",
                    2000,
                    "React Developer 💻 ",
                    2000,
                    "Front End Developer ➬ ",
                    2000,
                  ]}
                  wrapper="p"
                  loop={Infinity}


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
        {/* <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div> */}
      </div>
    </div>
  );
}
