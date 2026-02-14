import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
