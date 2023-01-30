import React from "react";
import "./Reasons.css";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="leftside-reason">
        <img src={require("../../assets/image1.png")} alt="" />
        <img src={require("../../assets/image2.png")} alt="" />
        <img src={require("../../assets/image3.png")} alt="" />
        <img src={require("../../assets/image4.png")} alt="" />
      </div>
      <div className="rightside-reason">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-rightside">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMEBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={require("../../assets/nb.png")} alt="" />
          <img src={require("../../assets/adidas.png")} alt="" />
          <img src={require("../../assets/nike.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
