import "./Footer.css";
import logo from "../../assets/component_assets/hmlogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="address-block">
            <h3>Address</h3>
            <p>Gachibowli & Kokapet</p>
          </div>

          <div className="contact-block">
            <h3>Contact</h3>
            <p>✉ hello@healomantra.in</p>
            <p>☎ 9000134324</p>
          </div>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>About</li>
            <li>Trainers</li>
            <li>Testimonials</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Socials</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div className="footer-column brand-column">
          <div className="brand-header">
            <img src={logo} alt="logo" />
            <h2>Heal O Mantra</h2>
          </div>

          <p className="brand-text">
            HealOMantra is a holistic wellness initiative focused on nurturing
            physical, mental, and emotional well-being through mindful living practices.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
