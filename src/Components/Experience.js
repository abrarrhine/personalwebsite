import React from "react";
import "./Experience.css";
import rtxlogo from "../img/rt_logo_300.webp";
import vtlogo from "../img/virginia_tech.png";
import spalogo from "../img/spalogo.png"

function Experience() {
  const accentColorStyleBlue = {
    "--accent-color": "#41516C",
  };

  const accentColorStyleYellow = {
    "--accent-color": "#FBCA3E",
  };

  const accentColorStyleRed = {
    "--accent-color": "#E24A68",
  };

  const accentColorStyleDeepBlue = {
    "--accent-color": "#1B5F8C",
  };

  const accentColorStyleLightGreen = {
    "--accent-color": "#4CADAD",
  };

  return (
    <div className="experience component__space" id="experience">
      <div className="experiece_bg">
        <div className="experience-bg-overlay"></div>

        <div className="container">
          <div className="heading">
            <h1 className="heading sweet"> Experience</h1>
            <p className="heading p__color">
              {" "}
              <strong>Eat Sleep Code Repeat</strong>
            </p>
          </div>
          <div className="job-timeline">
            <ul>
              <li style={accentColorStyleBlue}>
                <div class="date"> Jun 2023 - Present </div>
                <div class="title">Sr. Software Development Engineer</div>
                <div class="descr">
                  <img src={rtxlogo} className="company-logo" alt="RTX Logo"></img>
                </div>
              </li>
              <li style={accentColorStyleYellow}>
                <div class="date"> Aug 2022 - May 2023</div>
                <div class="title">
                  Master of Engineering in Computer Science
                </div>
                <div class="descr">
                  <img src={vtlogo} className="company-logo" alt="Virginia Tech Logo"></img>
                </div>
              </li>
              <li style={accentColorStyleRed}>
                <div class="date">Dec 2022 - May 2023</div>
                <div class="title">Software Developer</div>
                <div class="descr">
                  <img src={spalogo} className="company-logo" alt="Virginia Tech Logo"></img>
                </div>
              </li>
              <li style={accentColorStyleDeepBlue}>
                <div class="date">Aug 2020 - May 2022</div>
                <div class="title">Bachelor of Science in Computer Science</div>
                <div class="descr">
                  <img src={vtlogo} className="company-logo" alt="Virginia Tech Logo"></img>
                </div>
              </li>
              <li style={accentColorStyleLightGreen}>
                <div class="date">November 2021 - April 2022</div>
                <div class="title">Web Developer</div>
                <div class="descr">
                  <img src={vtlogo} className="company-logo" alt="Virginia Tech Logo"></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
