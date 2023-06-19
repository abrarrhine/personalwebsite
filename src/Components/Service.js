import React from "react";
import "./Service.css";
import traffic_sign_recognizer from "../img/traffic_sign_recognizer.JPG";
import transaction_classifer from "../img/transaction_classify.jpg";
import bookstore_homepage from "../img/bookstore_homepage.PNG";
import topic_modeling from "../img/topic-modeling.png";
import photo_gallery from "../img/photo-gallery.jpg";
import textbook_app from "../img/textbook_app.JPG"

function Service() {
  return (
    <div className="service component__space" id="projects">
      <div className="projects_bg">
        <div className="experience-bg-overlay"></div>
        <div className="container">
          <div className="heading">
            <h1 className="heading sweet"> My Projects</h1>
          </div>

          <div className="card-category-2">
            <br />
            <ul>
              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={traffic_sign_recognizer} alt="Traffic Sign Recognizer" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">
                        Traffic Sign Recognizer
                      </span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                      
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={transaction_classifer} alt="Transaction Classifier" />
                    </div>

                    <div className="card-text">
                      <span className="card-title">Transaction Classifier</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                        
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={topic_modeling} alt="IOP Asset Tracker"/>
                    </div>

                    <div className="card-text">
                      <span className="card-title">IOP Asset Tracker</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                        
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="img-card iCard-style1">
                  <div className="card-content">
                    <div className="card-image">
                      <img src={photo_gallery} alt="Fancy Gallery"/>
                    </div>

                    <div className="card-text">
                      <span className="card-title">Fancy Gallery</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                        
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Image by{" "}
                        
                        <a
                          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                          style={{ color: "#795548" }}
                        >
                          Pixabay
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Read Full</span>
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
