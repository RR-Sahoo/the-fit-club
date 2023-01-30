import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  function handlePrev() {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  }
  function handleNext() {
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  }
  return (
    <div className="testimonials" id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--red)" }}>
            {testimonialsData[selected].name}
          </span>
          &nbsp;- {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={handlePrev}
            src={require("../../assets/leftArrow.png")}
            alt="leftArrow"
          />
          <img
            onClick={handleNext}
            src={require("../../assets/rightArrow.png")}
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
