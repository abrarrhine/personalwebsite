import React, { useEffect, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import './PhotoGallery.css';

const PhotoGallery = () => {
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
    imagesLoaded(galleryRef.current, resizeAll);
    window.addEventListener('resize', resizeAll);
    galleryRef.current.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', toggleFull);
    });

    return () => {
      window.removeEventListener('resize', resizeAll);
    };
  }, []);

  return (
    <div className="gallery" id="gallery" ref={galleryRef}>
      {Array(28).fill(0).map((_, i) => (
        <div className="gallery-item" key={i}>
          <div className="content">
            <img src={`https://source.unsplash.com/random/?tech,item${i}`} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
