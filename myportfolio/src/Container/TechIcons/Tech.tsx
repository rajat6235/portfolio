import React, { useState, MouseEvent } from "react";
import BallCanvas from "./Ball.tsx";
import SectionWrapper from "./SectionWrapper.tsx";
import { technologies } from "../../assets/constants/index.js";
import "./Tech.css";
interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  text: string;
}

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, text: "" });

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>, text: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      text: text,
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      ...tooltip,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="tech-icons-container">
      {technologies.map((technology: Technology) => (
        <div
          className='w-28 h-28'
          key={technology.name}
          onMouseEnter={(e) => handleMouseEnter(e, technology.name)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y - 30, // Adjust this value to position the tooltip above the cursor
            left: tooltip.x,
            transform: "translate(-50%, -100%)", // Center the tooltip horizontally and move it above the cursor
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "5px",
            borderRadius: "3px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");