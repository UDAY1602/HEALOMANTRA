import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/component_assets/hmlogo.png";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-content">

        {/* Logo (outside container) */}
        <img src={logo} alt="logo" className="nav-logo" />

        {/* Navigation Container */}
        <div className="nav-container">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/trainers" className="nav-link">Trainers</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        </div>

      </div>
    </div>
  );
};

export default Header;
