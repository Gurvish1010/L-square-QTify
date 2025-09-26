import React from "react";
import "./Section.css";

function Section({ title, button, children }) {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {button && <div className="section-button">{button}</div>}
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
}

export default Section;