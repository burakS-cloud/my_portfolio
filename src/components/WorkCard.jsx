import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p className="project-description">{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn">
            View The Video
          </a>
          <a href={props.source} className="btn">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
