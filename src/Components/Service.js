import React from "react";
import "./Service.css";
import traffic_sign_recognizer from "../img/traffic_sign_recognizer.JPG";
import transaction_classifer from "../img/transaction_classify.jpg";
import bookstore_homepage from "../img/bookstore_homepage.PNG";
import topic_modeling from "../img/topic-modeling.png";
import photo_gallery from "../img/photo-gallery.jpg";
import textbook_app from "../img/textbook_app.JPG";
import python_logo from "../img/python_logo.png";
import tensorflow_logo from "../img/tensorflow_logo.png";
import java_logo from "../img/Java-Logo.png";
import vuejs_logo from "../img/Vue.js_Logo.png";
import mysql_logo from "../img/MySQL-Logo.png";
import react_logo from "../img/React-icon.png";
import aws_logo from "../img/Amazon-Web-Services-AWS-Logo.png";
import android_logo from "../img/Android-Logo.png";
import as_logo from "../img/Android_Studio_Icon_3.6.svg.png";
import kotlin_logo from "../img/Kotlin_Icon.svg.png";
import capstone_poster from "../img/Capstone_Project_Poster.png";

function Service() {
  return (
    <div className="service component__space" id="projects">
      <div className="projects_bg">
        <div className="experience-bg-overlay"></div>
        <div className="container">
          {/* <div className="project-heading">
            <h1 className="heading sweet project-header"> Engineering Projects</h1>
          </div> */}

          <div className="card-category-2">
            <br />
            <ul>
              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img
                        src={traffic_sign_recognizer}
                        alt="Traffic Sign Recognizer"
                      />
                    </div>

                    <div className="card-text">
                      <span className="card-title">
                        Traffic Sign Recognizer
                      </span>
                      <p>
                        Developed a traffic sign recognizer by using Vision
                        Transformer (ViT). Accuracy: 99.76%
                      </p>
                      <div className="tool-icons">
                        <img
                          className="small_logo"
                          src={python_logo}
                          alt="Python logo"
                        />
                        <img
                          className="small_logo"
                          src={tensorflow_logo}
                          alt="Tensorflow logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href="https://github.com/abrarrhine/Traffic-Sign-Recognizer"
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={bookstore_homepage} alt="Online Bookstore" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">Online Bookstore</span>
                      <p>
                        Built a full-stack web application where users can explore various
                        kinds of books and place orders.
                      </p>
                      <div className="tool-icons">
                        <img
                          className="small_logo"
                          src={vuejs_logo}
                          alt="VUE.js logo"
                        />
                        <img
                          className="big_logo"
                          src={java_logo}
                          alt="Javalogo"
                        />
                        <img
                          className="big_logo"
                          src={mysql_logo}
                          alt="MySQL logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href="https://github.com/abrarrhine/abrar-bookstore-vue-client"
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img
                        src={transaction_classifer}
                        alt="Transaction Classifier"
                      />
                    </div>

                    <div className="card-text">
                      <span className="card-title">Transaction Classifier</span>
                      <p>
                        Built an NLP model to predict categories of transactions
                        and identify frequent purchases. Accuracy: 88%.
                      </p>
                      <div className="tool-icons">
                        <img
                          className="small_logo"
                          src={python_logo}
                          alt="Python logo"
                        />
                        <img
                          className="small_logo"
                          src={tensorflow_logo}
                          alt="Tensorflow logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href="https://github.com/abrarrhine/Transaction-Classifier"
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={topic_modeling} alt="IOP Asset Tracker" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">IOP Asset Tracker</span>
                      <p>
                        Led a team of 5 students in building an NLP model to
                        classify texts based on topics for a federal contractor.
                      </p>
                      <div className="tool-icons">
                        <img
                          className="small_logo"
                          src={python_logo}
                          alt="Python logo"
                        />
                        <img
                          className="small_logo"
                          src={react_logo}
                          alt="React logo"
                        />
                        <img
                          className="big_logo"
                          src={aws_logo}
                          alt="AWS logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href={capstone_poster}
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={photo_gallery} alt="Fancy Gallery" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">Fancy Gallery</span>
                      <p>
                        Developed a photo gallery android app which loads
                        network images into a grid & display map tiles.
                      </p>
                      <div className="tool-icons">
                        <img
                          className="small_logo"
                          src={kotlin_logo}
                          alt="Python logo"
                        />
                        <img
                          className="big_logo"
                          src={android_logo}
                          alt="React logo"
                        />
                        <img
                          className="small_logo"
                          src={as_logo}
                          alt="AWS logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href="https://github.com/abrarrhine/FancyGallery"
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={textbook_app} alt="Textbook Buddies :)" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">Textbook Buddies :)</span>
                      <p>
                        Built a textbook trading android app for Virginia Tech
                        students using Android Studio (Java) with a team.
                      </p>
                      <div className="tool-icons">
                        <img
                          className="big_logo"
                          src={java_logo}
                          alt="Python logo"
                        />
                        <img
                          className="big_logo"
                          src={android_logo}
                          alt="React logo"
                        />
                        <img
                          className="small_logo"
                          src={as_logo}
                          alt="AWS logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-link">
                    <a
                      href="https://github.com/abrarrhine/TextbookBuddies"
                      title="View Project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Service;
