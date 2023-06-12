import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import pic from "../img/suitpic2.jpeg";
import About from "./About";
import Contact from "./Contact";
import devcert from "../img/AWS-Certified-Developer.png";
import mlcert from "../img/AWS-Certified-Machine-Learning-Specialty_badge.png";
import google_ml_cert from "../img/google_ml_cert.png";
import tf_cert from "../img/tensorflow_cert_logo.png";
import mlcertvalid from "../img/mlcertvalid.pdf";
import devcertvalid from "../img/devcertvalid.pdf";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home component__space" id="home">
      <div className="home__bg">
        <div className="bg-overlay"></div>
        <div className="welcome-overlay"></div>
        {/* HOME CONTENT*/}
        <div className="container pixhundred">
          <div>
            <img src={pic} className="suitpic" alt="Profile Photo"></img>
          </div>
          <div className="home__content">
            <div className="home__meta">
              <pre
                className="code-snippet"
                style={{
                  fontFamily: "Courier New, monospace",
                  color: "#D4D4D4",
                  padding: "1em",
                  borderRadius: "5px",
                }}
              >
                <span style={{ color: "#DCDCAA" }}>print</span>
                <span style={{ color: "#D4D4D4" }}>(</span>
                <span style={{ color: "#CE9178" }}>"Hello World!"</span>
                <span style={{ color: "#D4D4D4" }}>)</span>
              </pre>
              <h2 className="home__text sweet  px_10">I'm Abrar Rhine.</h2>
              <h3 className="home__text sweet px_20">
                I'm a
                <span className="animation_font">
                  <Typewriter
                    words={[
                      " Software Engineer!",
                      " Machine Learning Engineer!",
                      " Full-Stack Developer!",
                      " UX Designer!",
                      " Freelancer!",
                      " Painter!",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle=""
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    className="animation"
                  />
                </span>
              </h3>
            </div>
            <div>
              <h3 className="home__text sweet  px_20">Education: </h3>
              <h3 className="home__text orange"> Virginia Tech </h3>
            </div>
            <div>
              <h3 className="home__text sweet  px_20">Employer: </h3>
              <h3 className="home__text orange"> Raytheon Technologies </h3>
            </div>
            <h3 className="home__text sweet px_20">Certifications:</h3>
            <div className="badges_container">
              <a href={devcertvalid} target="_blank">
                <img src={devcert} className="certification"></img>
              </a>
              <a href={mlcertvalid} target="_blank">
                <img
                  src={mlcert}
                  className="certification"
                  href={mlcertvalid}
                ></img>
              </a>
              <a href={mlcertvalid} target="_blank">
                <img
                  src={google_ml_cert}
                  className="certification"
                  href={mlcertvalid}
                ></img>
              </a>
              <a href={mlcertvalid} target="_blank">
                <img
                  src={tf_cert}
                  className="certification"
                  href={mlcertvalid}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
