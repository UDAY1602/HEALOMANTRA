import React, { useState } from "react";

const GalleryGrid = ({ title }) => {
  const [index, setIndex] = useState(0);
  const totalCards = 3;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-title poppins">{title}</h2>

      {/* Desktop Layout */}
      <div className="cards-container desktop">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>

      {/* Mobile Slider */}
      <div className="slider-container mobile">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default GalleryGrid;
