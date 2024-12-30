import React from "react";

import  BallCanvas from "./Ball.jsx";
import  SectionWrapper  from "./SectionWrapper.jsx";
import { technologies } from "../../assets/constants";
import "./Tech.css";
const Tech = () => {
  return (
    <div className="tech-icons-container">
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="tech-icon-name">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
