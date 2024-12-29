import React from "react";
import "./ScrollDown.css";

const ScrollDown: React.FC = () => {
  return (
    <div className="scroll-down">
      <div>
        <a href="#about" className="turn nav-link">&#8608;</a>
      </div>
    </div>
  );
};

export default ScrollDown;