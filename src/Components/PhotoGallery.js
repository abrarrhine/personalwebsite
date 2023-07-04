import React, { useEffect, useRef } from "react";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const galleryRef = useRef(null);

  const toggleFull = (event) => {
    event.currentTarget.classList.toggle("full");
    event.currentTarget.classList.contains("full")
      ? event.currentTarget.classList.add("no-hover")
      : event.currentTarget.classList.remove("no-hover");
  };

  useEffect(() => {
    const getVal = (elem, style) =>
      parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    const getHeight = (item) =>
      item.querySelector(".content").getBoundingClientRect().height;

    const resizeAll = () => {
      const altura = getVal(galleryRef.current, "grid-auto-rows");
      const gap = getVal(galleryRef.current, "grid-row-gap");
      galleryRef.current.querySelectorAll(".gallery-item").forEach((item) => {
        item.style.gridRowEnd =
          "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
    };

    resizeAll();

    window.addEventListener("resize", resizeAll);
    galleryRef.current.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", toggleFull);
    });

    galleryRef.current.querySelectorAll("img").forEach((item) => {
      item.classList.add("byebye");
      if (item.complete) {
        console.log(item.src);
      } else {
        item.addEventListener("load", function () {
          const altura = getVal(galleryRef.current, "grid-auto-rows");
          const gap = getVal(galleryRef.current, "grid-row-gap");
          const gitem = item.parentElement.parentElement;
          gitem.style.gridRowEnd =
            "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
          item.classList.remove("byebye");
        });
      }
    });

    return () => window.removeEventListener("resize", resizeAll);
  }, []); // Remove 'resizeAll' from the dependencies array


  const images = Array.from({ length: 49 }, (_, i) => `Abrar-${i + 1}.jpeg`);

  return (
    <div className="gallery__space">
      <div className="quotes-div">
        <div className="quote">
          {" "}
          "Ya'll call it a moment, I call it life" - Mr. Worldwide{" "}
        </div>
      </div>
      <div className="gallery" id="gallery" ref={galleryRef}>
        {images.map((imageName, i) => (
          <div className="gallery-item" key={i}>
            <div className="content">
              <img src={require(`../img/${imageName}`)} alt={imageName} />
            </div>
          </div>
        ))}
      </div>
      <div className="quotes-div-bottom">
        <div className="quote">
          “What I like about photographs is that they capture a moment that's
          gone forever, impossible to reproduce.” - Karl Lagerfeld
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
