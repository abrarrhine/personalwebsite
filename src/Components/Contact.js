import React from "react";
import "./Contact.css";
import contactimg from "../img/ben_on_bench.JPG";
import twtr_icon from "../img/twittericon.png";
import yt_icon from "../img/yputubeicon.png";
import gmail_icon from "../img/gmailicon.png";
import lin_icon from "../img/linkedinIcon.png";
import github_icon from "../img/githubicon.png";
import insta_icon from "../img/instagramicon.png";

function Contact() {
  return (
    <div className="contact component__space" id="contact">
      <div className="container">
        <div className="row">
          <div className="col__2 contact-div-box">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="contact__heading sweet">Contact Me</h1>
                <p className="contact__heading white">
                  Connect with me via phone: <strong>+1 (703)342-6590</strong>{" "}
                  or email: <strong>abrarrhine@gmail.com</strong>
                </p>
              </div>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name:"
              ></input>
              <input
                type="text"
                className="contact email"
                placeholder="Your email:"
              ></input>
              <input
                type="text"
                className="contact subject"
                placeholder="Subject:"
              ></input>
              <textarea
                name="message"
                id="message"
                placeholder="Please write your message"
              ></textarea>
              <button className="submit_btn contact pointer" type="submit">
                Submit
              </button>
            </div>
            <div className="social-media">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                title="Twitter account"
              >
                <img src={twtr_icon} alt="CV Icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/abrarrhine/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn profile"
              >
                <img src={lin_icon} alt="CV Icon" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                title="YouTube channel"
              >
                <img src={yt_icon} alt="CV Icon" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                title="Github profile"
              >
                <img src={github_icon} alt="CV Icon" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram profile"
              >
                <img src={insta_icon} alt="CV Icon" />
              </a>

              <a
                href="mailto:abrarrhine@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Send Email"
              >
                <img src={gmail_icon} alt="Email Icon" />
              </a>
            </div>
          </div>
          <div className="col__2">
            <img
              src={contactimg}
              alt="Ben on bench"
              className="contact__img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
