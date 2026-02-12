import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/component_assets/hmlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-content">

       
        <div className="brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <span className="brand-name">Heal O Mantra</span>
        </div>

      
        <div className="nav-container">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/trainers" className="nav-link">Trainers</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        </div>

        
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

     
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/trainers" onClick={closeMenu}>Trainers</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
      </div>
    </div>
  );
};

export default Header;

