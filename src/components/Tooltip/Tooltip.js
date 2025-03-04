import React, { useEffect, useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ isVisible = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`tooltip-container ${isVisible ? "visible" : ""}`}
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
      }}
    >
      View Project
      <svg
        className="arrow-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Tooltip;
