import React from "react";
import "./gallery.css";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  const sections = ["Trainers", "Events", "Workshops"];

  return (
    <div className="gallery-wrapper">
      {sections.map((title) => (
        <GalleryGrid key={title} title={title} />
      ))}
    </div>
  );
};

export default Gallery;
