import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container" >
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={require("../../assets/github.png")} alt="github" />
          <img src={require("../../assets/instagram.png")} alt="instagram" />
          <img src={require("../../assets/linkedin.png")} alt="linkedin" />
        </div>
        <div className="logo-f">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
