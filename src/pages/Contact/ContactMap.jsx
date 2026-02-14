import React from "react";
import "./Contact.css";

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default ContactMap;
