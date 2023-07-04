/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./About.css";
import about__img from "../img/gradpic_pylons22.jpeg";
import resume from "../img/Abrar_Rhine_resume.pdf";
import resume_icon from "../img/cv.png";

function About() {
  return (
    <div className="about component__space" id="aboutme">
      <div className="home__bg">
        <div className="bg-overlay"></div>
        <div className="aboutme-welcome-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col__22">
              <h1 className="about__heading sweet">About Me</h1>
              <div className=".about__meta">
                <p className="about__text p__color">Greetings!</p>
                <p className="about__text p__color">
                  I'm Abrar Rhine, a passionate Software Engineer, holding a BSc
                  and MEng degree in Computer Science from Virginia Tech. I
                  commenced my professional journey at Raytheon Technologies as
                  an Intern, paving the way for a full-fledged role as a
                  Software Developer at Systems Planning and Analysis Inc. I now
                  hold the title of Sr. Software Development Engineer at
                  Raytheon Technologies, leveraging my academic foundation and
                  industry experience to drive innovative software solutions.
                </p>

                <p className="about__text p__color">
                  With AWS certifications in Associate Developer and Machine
                  Learning Specialty, I'm adept at building, training, tuning,
                  and deploying ML models. My educational background encompasses
                  Advanced Machine Learning, AI, and Natural Language
                  Processing, coupled with practical experience in diverse
                  software development projects.
                </p>

                <p className="about__text p__color">
                  Passionate about Robotics, AI/ML, marketing, and sales, I am
                  planning to further my knowledge by pursuing a PhD in Robotics
                  and an MBA. My goal is to utilize these technical and business
                  insights to enhance lives and stimulate innovation. I aim to
                  contribute to a progressive, technology-driven world,
                  fostering an environment that encourages creative
                  problem-solving and simplifies life through advanced
                  technologies.
                </p>

                <p className="about__text p__color">
                  View/download my resume:
                </p>
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-button"
                >
                  <img src={resume_icon} alt="CV Icon" />
                </a>
              </div>
            </div>
            <div className="col__23">
              <img src={about__img} className="about__img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
