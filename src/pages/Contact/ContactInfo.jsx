import React from "react";

import CallLogo from "../../assets/About/CallLogo.png";
import WhatsappLogo from "../../assets/About/whatsappLogo.png";
import GmailLogo from "../../assets/About/gmailLogo.png";
import LocationLogo from "../../assets/About/LocationLogo.png";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="info-box">
        <img src={CallLogo} alt="Phone" className="info-img" />
        <h4>Phone Number</h4>
        <p>+91 12345678</p>
      </div>

      <div className="info-box">
        <img src={WhatsappLogo} alt="Whatsapp" className="info-img" />
        <h4>Whatsapp</h4>
        <p>+91 12345678</p>
      </div>

      <div className="info-box">
        <img src={GmailLogo} alt="Email" className="info-img" />
        <h4>Email Address</h4>
        <p>abcd@gmail.com</p>
      </div>

      <div className="info-box">
        <img src={LocationLogo} alt="Location" className="info-img" />
        <h4>Address</h4>
      </div>
    </section>
  );
};

export default ContactInfo;
