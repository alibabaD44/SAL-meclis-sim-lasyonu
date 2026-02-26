import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { NavHashLink } from 'react-router-hash-link'; 
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <div className="section1">
          <NavHashLink smooth to="/#top">
            <img src="/meclislogo.png" alt="Logo" className="logo" />
          </NavHashLink>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

        <label htmlFor="menu-toggle" className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <label htmlFor="menu-toggle" className="menu-overlay"></label>

        <div className="section2">
          <label htmlFor="menu-toggle" className="close-btn">&times;</label>

          <ul>
            <li><NavHashLink smooth to="/#hakkımızda">Hakkımızda</NavHashLink></li>
            <li><NavHashLink smooth to="/#program">Program</NavHashLink></li>
            <li><Link to="/komiteler">Komisyonlar</Link></li>
            <li><Link to="/basvuru">Başvuru</Link></li>
            
            <li><NavHashLink smooth to="/#sss">SSS</NavHashLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;