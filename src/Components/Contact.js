import React from "react";
import "./Contact.css";
import contactimg from "../img/ben_on_bench.JPG";
function Contact() {
  return (
    <div className="contact component__space" id="contact">
      <div className="container">
        <div className="row">
          <div className="col__2">
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
