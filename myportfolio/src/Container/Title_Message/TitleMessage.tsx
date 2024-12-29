import React from "react";
import Typewriter from "typewriter-effect";
import "./TitleMessage.css";
import ScrollService from "../../utilities/ScrollService.ts";

const TitleMessage: React.FC = () => (
  <div className="title-message">
    <div
      className="profile-details"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="colz">
        <div className="colz-icon">
          <a href="https://www.linkedin.com/in/rajat6235/">
            <i title="Linkedin" className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/rajat6235">
            <i title="Github" className="fa fa-github"></i>
          </a>
          <a href="tel:7837733549">
            <i title="Phone" className="fa fa-phone"></i>
          </a>
        </div>
      </div>
      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          Hello, I'm <span className="highlighted-text">Rajat Gupta</span>
        </span>
      </div>
      <div className="profile-details-role">
        <span className="primary-text">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Enthusiastic Developer 🛑",
                  "Tech Enthusiast",
                  "React Developer",
                  "Front End Developer ➬ ",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h1>
          <div
            className="profile-role-tagline"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.16)", padding: "10px" }}
          >
            Experienced in crafting robust applications with frontend
            excellence, advancing backend capabilities through practical
            application to create comprehensive solutions.
          </div>
        </span>
      </div>
      <div className="profile-options" style={{ columnGap: '70px' }}>
        <button
          className="btn primary-btn"
          onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
          style={{
            backgroundColor: "#1f2235",
            border: "2px solid linen",
            color: "white",
            borderRadius: "50px",
          }}
        >
          Hire Me
        </button>
        <a href="RajatGuptaResume2022.pdf" download="RajatGuptaResume2022.pdf">
          <button
            className="btn highlighted-btn"
            style={{
              backgroundColor: "#ff5823",
              fontWeight: "400",
              color: "white",
              borderRadius: "50px",
            }}
          >
            Download CV
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default TitleMessage;