import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          About Us
        </motion.h2>

        <div className="row align-items-center">
          {/* Left - Image */}
          <div className="col-lg-6">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/images/about.png"
              alt="About Gulf Flower"
              className="about-image"
            />
          </div>

          {/* Right - Text Content */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="about-text"
            >
              <h3>Crafting Elegance & Comfort</h3>
              <p>
                At <strong>Gulf Flower Furnishings</strong>, we specialize in delivering premium-quality furnishings 
                designed to enhance your spaces. With years of expertise, we take pride in creating stylish, 
                comfortable, and functional furniture tailored to your needs.
              </p>

              <div className="about-highlights">
                <div className="highlight">
                  <h4>🌟 Premium Quality</h4>
                  <p>We use the finest materials to ensure durability & luxury.</p>
                </div>
                <div className="highlight">
                  <h4>🎨 Custom Designs</h4>
                  <p>Tailored solutions to match your unique style & preferences.</p>
                </div>
                <div className="highlight">
                  <h4>🚚 Fast Delivery</h4>
                  <p>Timely service & hassle-free delivery across the UAE.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
