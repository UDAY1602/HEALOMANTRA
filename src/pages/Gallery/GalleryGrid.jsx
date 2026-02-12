import React from "react";

const GalleryGrid = ({ title }) => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title poppins">{title}</h2>

      <div className="cards-container">
        <div className="card small-card"></div>
        <div className="card big-card"></div>
        <div className="card small-card"></div>
      </div>
    </div>
  );
};

export default GalleryGrid;
