import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Sitemap.css";

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h2 className="sitemap-title">Sitemap</h2>
      
      <div className="sitemap-links">
        <div className="sitemap-section">
          <h3>Main Pages</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/gulfflower" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/gulfflower" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/gulfflower" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/gulfflower" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sitemap;
