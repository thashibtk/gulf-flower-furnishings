import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";


const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenuOnClickOutside);
    return () => document.removeEventListener("click", closeMenuOnClickOutside);
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          Gulf Flower Furnishings
        </Link>

        {/* Toggle Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate closing
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
