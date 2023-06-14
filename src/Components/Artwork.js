import React, { useEffect, useRef } from 'react';
import "./Artwork.css"

function Artwork() {
  const galleryRef = useRef(null);

  const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));
  const getHeight = (item) => item.querySelector('.content').getBoundingClientRect().height;

  const resizeAll = () => {
    const altura = getVal(galleryRef.current, 'grid-auto-rows');
    const gap = getVal(galleryRef.current, 'grid-row-gap');
    galleryRef.current.querySelectorAll('.gallery-item').forEach((item) => {
      item.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
  };

  const toggleFull = (event) => {
    event.currentTarget.classList.toggle('full');
    event.currentTarget.classList.contains('full')
      ? event.currentTarget.classList.add('no-hover')
      : event.currentTarget.classList.remove('no-hover');
  };

  useEffect(() => {
    window.addEventListener('resize', resizeAll);
    galleryRef.current.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', toggleFull);
    });

    galleryRef.current.querySelectorAll('img').forEach((item) => {
      item.classList.add('byebye');
      if (item.complete) {
        console.log(item.src);
      } else {
        item.addEventListener('load', function () {
          const altura = getVal(galleryRef.current, 'grid-auto-rows');
          const gap = getVal(galleryRef.current, 'grid-row-gap');
          const gitem = item.parentElement.parentElement;
          gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
          item.classList.remove('byebye');
        });
      }
    });

    resizeAll();
    return () => window.removeEventListener('resize', resizeAll);
  }, []);

  const images = Array.from({ length: 10 }, (_, i) => `Painting-${i + 1}.jpeg`);

  return (
    <div className="gallery gallery__space" id="gallery" ref={galleryRef}>
      {images.map((imageName, i) => (
        <div className="gallery-item" key={i}>
          <div className="content">
            <img src={require(`../img/${imageName}`)} alt={imageName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artwork