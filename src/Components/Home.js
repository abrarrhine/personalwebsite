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
import Footer from "./Footer";
import Particlesbg from "./Particlejs";
import gradicon from "../img/graduate.png";
import codeicon from "../img/coding.png";

function Home() {
  return (
    <div className="home component__space" id="home">
      <div className="home__bg">
        <div className="bg-overlay"></div>
        <div className="welcome-overlay"></div>
        {/* HOME CONTENT*/}
        <div className="container pixhundred">
          <Particlesbg></Particlesbg>
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
              {/* <h3 className="home__text sweet  px_20">Education: </h3> */}
              <img
                src={gradicon}
                className="grad-icon px_20"
                alt="SWE icon"
              ></img>
              <h3 className="home__text orange">
                {" "}
                Virginia Tech
                <span> (BS/MEng)</span>
              </h3>
            </div>
            <div>
              <img
                src={codeicon}
                className="swe-icon px_20"
                alt="SWE icon"
              ></img>
              <h3 className="home__text red_text"> Raytheon Technologies </h3>
            </div>
            {/* <h3 className="home__text sweet px_20">Certifications:</h3> */}
            <div className="badges_container">
              <a>
                <img src={devcert} className="certification"></img>
              </a>
              <a>
                <img src={mlcert} className="certification"></img>
              </a>
              {/* <a>
                <img src={google_ml_cert} className="certification"></img>
              </a>
              <a>
                <img src={tf_cert} className="certification"></img>
              </a> */}
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
