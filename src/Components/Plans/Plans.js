import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
const Plans = () => {
  const plans = plansData.map((plan, i) => {
    return (
      <div className="plan" key={i}>
        {plan.icon}
        <span>{plan.name}</span>
        <span>₹ {plan.price}</span>
        <div className="features">
          {plan.features.map((feature, i) => (
            <div className="feature" key={i}>
              <img src={require("../../assets/whiteTick.png")} alt="" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div>
          <span>See more benefits -{">"}</span>
        </div>
        <button className="btn">Join now</button>
      </div>
    );
  });
  return (
    <div className="plans-container" id='plan'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">{plans}</div>
    </div>
  );
};

export default Plans;
