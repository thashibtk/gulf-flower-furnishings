import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center contact-title"
        >
          Get in Touch
        </motion.h2>

        <div className="row g-4 cont-info">
          {/* Contact Info */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="contact-info"
            >
              {/* Call Us */}
              <div className="info-box">
                <FaPhone className="info-icon" />
                <div>
                  <h5>Call Us</h5>
                  <p>
                    <a href="tel:+9715592012487" className="contact-link">
                      +971 559 201 2487
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="info-box">
                <FaEnvelope className="info-icon" />
                <div>
                  <h5>Email Us</h5>
                  <p>
                    <a href="mailto:info@gulfflower.com" className="contact-link">
                      info@gulfflower.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="info-box">
                <FaClock className="info-icon" />
                <div className="working-hours">
                  <h5>Working Hours</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td>Monday - Thursday :</td>
                        <td>09:00 AM - 10:30 PM</td>
                      </tr>
                      <tr>
                        <td>Friday :</td>
                        <td>04:00 PM - 10:30 PM</td>
                      </tr>
                      <tr>
                        <td>Saturday - Sunday :</td>
                        <td>09:00 AM - 10:30 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="social-box">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="https://www.instagram.com/gulf_flower_furnishings" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon instagram" />
                  </a>
                  <a href="https://www.facebook.com/share/19qBanURkS" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon facebook" />
                  </a>
                  <a href="http://www.youtube.com/@gulfflowerfurnishingsabudh585" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon youtube" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon linkedin" />
                  </a>
                  <a href="https://wa.me/+9715592012487" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="social-icon whatsapp" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="contact-form"
            >
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label>Phone</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" required />
              </div>

              <div className="mb-3">
                <label>Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message here..." required></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-success w-100"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Google Map - Load First but Keep in Place */}
        <div className="map-container mt-5">
          <iframe
            title="gulf-flower-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6861136810417!2d54.3845252!3d24.461673199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6969c5f57647%3A0x60ba6b940b2eca86!2sGULF%20FLOWER%20FURNISHINGS!5e0!3m2!1sen!2sin!4v1739105810536!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className={`google-map ${mapLoaded ? "visible" : "hidden"}`}
            onLoad={() => setMapLoaded(true)}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
