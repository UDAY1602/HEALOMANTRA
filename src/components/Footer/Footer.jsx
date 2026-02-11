import "./Footer.css";
import logo from "../../assets/component_assets/hmlogo.png"; // change if different

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Address */}
        <div className="footer-column">
          <h3 className="footer-heading">Address</h3>
          <p>Gachibowli & Kokapet</p>

          <h3 className="footer-heading contact-heading">Contact</h3>

          <p className="contact-item">
            ✉ hello@healomantra.in
          </p>
          <p className="contact-item">
            ☎ 9000134324
          </p>
        </div>

        {/* Column 2 - Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Links</h3>
          <ul>
            <li>About</li>
            <li>Trainers</li>
            <li>Testimonials</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Column 3 - Socials */}
        <div className="footer-column">
          <h3 className="footer-heading">Socials</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Watsapp</li>
          </ul>
        </div>

        {/* Column 4 - Brand Info */}
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
