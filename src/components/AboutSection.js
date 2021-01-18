import React from "react";
import headshot from "../img/headshot.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hello, my name is</h2>
          </div>
          <div className="hide">
            <h2>
              Levi. A <span>developer</span> based
            </h2>
          </div>
          <div className="hide">
            <h2>in Ohio.</h2>
          </div>
        </div>
        <p>Currently looking for work!</p>
        <button>Hire Me</button>
      </div>
      <div className="image">
        <img src={headshot} alt="headshot" />
      </div>
    </div>
  );
};

export default AboutSection;
