import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
const Programs = () => {
  const program = programsData.map((program) => {
    return (
      <div className="category">
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className="join-now">
          <span>Join Now</span>
          <img src={require("../../assets/rightArrow.png")} alt="" />
        </div>
      </div>
    );
  });
  return (
    <div className="programs" id="programs">
      {/* Header Section */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">{program}</div>
    </div>
  );
};

export default Programs;
