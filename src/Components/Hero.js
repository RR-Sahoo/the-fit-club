import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-leftside">
        <Header />
        {/* The best ad section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween", duration: 1 }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Experience Figure section */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={30} delay="4" preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* Hero Buttons section */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero-rightside">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ opacity: mobile ? "1" : "0", right: "-1rem" }}
          whileInView={{ opacity: mobile ? "1" : "1", right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={require("../assets/heart.png")} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero Images section */}
        <img
          src={require("../assets/hero_image.png")}
          alt="hero_image"
          className="hero-image"
        />
        <motion.img
          initial={{ opacity: mobile ? "1" : "0", right: "11rem" }}
          whileInView={{ opacity: mobile ? "1" : "1", right: "19.5rem" }}
          transition={transition}
          src={require("../assets/hero_image_back.png")}
          alt="hero_image_back"
          className="hero-image-back"
        />
        {/* calories section */}
        <motion.div
          initial={{ opacity: mobile ? "1" : "0", right: "37rem" }}
          whileInView={{ opacity: mobile ? "1" : "1", right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={require("../assets/calories.png")} alt="calories" />
          <div>
            <span>Calories&nbsp;Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
