import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        {/* Top Section */}
        <div className="row border-bottom border-secondary pb-4 mb-4 align-items-center">
          {/* Logo & Brand */}
                <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
                <img
                  src="images/logo.png"
                  alt="Gulf Flower Logo"
                  className="rounded-circle bg-success me-2"
                  style={{ width: "32px", height: "32px", cursor: "pointer" }}
                  onClick={() => window.location.href = "/"}
                />
                <span className="fw-bold" style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>Gulf Flower Furnishings</span>
                </div>

                {/* Navigation Links */}
                <div className="col-md-6">
          <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
            {[
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact Us", path: "/contact" },
              { name: "FAQs", path: "/faqs" }
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-secondary text-decoration-none small"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
          {/* Copyright & Legal Links */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-3 mb-md-0">
            <span>© 2024 Gulf Flower Furnishings</span>
            <Link to="/privacy" className="text-secondary text-decoration-none" onClick={() => window.scrollTo(0, 0)}>Privacy</Link>
            <Link to="/terms" className="text-secondary text-decoration-none" onClick={() => window.scrollTo(0, 0)}>Terms</Link>
            <Link to="/sitemap" className="text-secondary text-decoration-none" onClick={() => window.scrollTo(0, 0)}>Sitemap</Link>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex gap-3 mb-3 mb-md-0">
            <a href="https://www.instagram.com/gulf_flower_furnishings?igsh=MTVxemRkaGJubno0Yw==" target="_blank" rel="noopener noreferrer" className="text-secondary social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/19qBanURkS/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-secondary social-icon">
              <FaFacebook />
            </a>
            <a href="http://www.youtube.com/@gulfflowerfurnishingsabudh585" target="_blank" rel="noopener noreferrer" className="text-secondary social-icon">
              <FaYoutube/>
            </a>
            <a href="https://www.linkedin.com/-" target="_blank" rel="noopener noreferrer" className="text-secondary social-icon">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/+971559201248" target="_blank" rel="noopener noreferrer" className="text-secondary social-icon">
              <FaWhatsapp />
            </a>
          </div>

          {/* Language Selector */}
          <select className="form-select form-select-sm bg-transparent text-secondary border-secondary w-auto">
            <option>English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
