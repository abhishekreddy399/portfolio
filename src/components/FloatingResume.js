import React from "react";
import { FaDove } from "react-icons/fa";
import "./FloatingResume.css";

function FloatingResume() {
  return (
    <div className="floating-container">
      <div className="floating-item-wrapper">
        <a href="https://drive.google.com/file/d/1jDzDy4aZRdfiH903fXNGuevlaO-qVKsU/view?usp=sharing" target="_blank" rel="noreferrer" className="floating-item">
          <div className="floating-label">My Resume</div>
          <div className="floating-button">
            <FaDove className="bird-icon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FloatingResume;
