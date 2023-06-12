import React from "react";
import "./About.css";
import about__img from "../img/gradpic_pylons22.jpeg";
import resume from "../img/Abrar_Rhine_resume.pdf";

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
                <p className="about__text p__color">
                  Greetings! I am Abrar Rhine, a software engineering
                  professional. I completed my Bachelor of Science degree in
                  Computer Science in May 2022 and further advanced my education
                  by earning a Master of Engineering degree in Computer Science
                  in May 2023, both from Virginia Tech.
                </p>
                <p className="about__text p__color">
                  My coursework includes Advanced Machine Learning, Artificial
                  Intelligence, Natural Language Processing, Software
                  Engineering, Mobile Application Development, Web Application
                  Development, Theory of Algorithms, Computer Systems etc.
                </p>
                <p className="about__text p__color">
                  My professional journey began as an Intern at Raytheon
                  Technologies where I got an opportunity to hone my technical
                  skills and understand the practical implications of my
                  theoretical knowledge. This experience served as a foundation
                  for my role as a Software Developer at Systems Planning and
                  Analysis Inc., where I could broaden my expertise and
                  contribute to diverse software development projects.
                </p>
                <p className="about__text p__color">
                  Currently, I hold the position of Sr. Software Development
                  Engineer at Raytheon Technologies. In this role, I am able to
                  fully leverage my strong academic foundation and extensive
                  industry experience to drive innovative solutions, delivering
                  high-quality software.
                </p>
                <p className="about__text p__color">
                  I have two AWS certifications:{" "}
                  <strong>Associate Developer</strong> and{" "}
                  <strong> Machine Learning Specialty</strong>. I am capable of
                  building, training, tuning, and deploying machine learning
                  (ML) models on AWS. Besides, I have worked on various machine
                  learning projects which validates my expertise in this field.
                </p>
                <div className="about__button d__flex align__items__center">
                  <a
                    className="about resumebutton pointer"
                    href={resume}
                    target="_blank"
                  >
                    View/Download My Resume
                  </a>
                </div>
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
