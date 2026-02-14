import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="form-card">
        <h3 className="form-title">Get In touch</h3>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Subject</label>
          <input type="text" placeholder="Subject" />

          <label>Message</label>
          <textarea rows="4" placeholder="Message"
              id="msgblock"
          ></textarea>

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
