import "./Navbar.css";
import React, { useState, useEffect } from "react";

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
          <a href="/">
            <img src="/meclislogo.png" alt="Logo" className="logo" />
          </a>
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
            <li><a href="#hakkımızda">Hakkımızda</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#komiteler">Komiteler</a></li>
            <li><a href="#basvuru">Başvuru</a></li>
            <li><a href="#misyon&vizyon">Misyon</a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;