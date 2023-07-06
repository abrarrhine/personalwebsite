import React from "react";
import "./Experience.css";
import rtxlogo from "../img/rt_logo_300.webp";
import vtlogo from "../img/virginia_tech.png";
import spalogo from "../img/spalogo.png";
import spdlimit from "../img/nospeedlimit.png";

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
        <div className="experience-container">
          <div className="experience-header">
            <h1 className="heading">Career Timeline</h1>
          </div>
          <div className="content-container">
            <div className="image-container">
              <img src={spdlimit} alt="Speed Limit" className="spdlimit-image" />
            </div>
            <div className="code-snippet-container">
              <div className="code-snippet">
                <pre>
                  <code>
                    <span className="keyword">while</span> (alive) {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">eat()</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">sleep()</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">code()</span>;
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="job-timeline">
            <ul className="experience-ul"> 
              <li style={accentColorStyleBlue}>
                <div className="date"> Jun 2023 - Present </div>
                <div className="title">Sr. Software Development Engineer</div>
                <div className="descr">
                  <img src={rtxlogo} className="company-logo" alt="RTX Logo" />
                </div>
              </li>
              <li style={accentColorStyleYellow}>
                <div className="date"> Aug 2022 - May 2023</div>
                <div className="title">Master of Engineering in Computer Science</div>
                <div className="descr">
                  <img src={vtlogo} className="school-logo" alt="Virginia Tech Logo" />
                </div>
              </li>
              <li style={accentColorStyleRed}>
                <div className="date">Dec 2022 - May 2023</div>
                <div className="title">Software Developer</div>
                <div className="descr">
                  <img src={spalogo} className="company-logo" alt="SPA Logo" />
                </div>
              </li>
              <li style={accentColorStyleDeepBlue}>
                <div className="date">Aug 2020 - May 2022</div>
                <div className="title">Bachelor of Science in Computer Science</div>
                <div className="descr">
                  <img src={vtlogo} className="school-logo" alt="Virginia Tech Logo" />
                </div>
              </li>
              <li style={accentColorStyleLightGreen}>
                <div className="date">August 2021 - April 2022</div>
                <div className="title">Computer Science Ambassador</div>
                <div className="descr">
                  <img src={vtlogo} className="school-logo" alt="Virginia Tech Logo" />
                </div>
              </li>
            </ul>
          </div>
          <div className="ex-quotes-div-bottom">
            <div className="ex-quote">
              “If it doesn’t challenge you, it won’t change you.” — Fred DeVito
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
