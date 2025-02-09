import React from "react";
import { motion } from "framer-motion";
import "./PrivacyTerms.css";

export default function PrivacyPolicy() {
  return (
    <section className="policy-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          Privacy Policy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="policy-content"
        >
          <p>
            At Gulf Flower Furnishings, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          <h5>1. Information We Collect</h5>
          <p>
            We may collect your name, email, phone number, and address when you interact with our website, such as placing an order or subscribing to our newsletter.
          </p>

          <h5>2. How We Use Your Information</h5>
          <p>
            We use your information to process orders, provide customer support, improve our services, and send promotional emails (only if you opt-in).
          </p>

          <h5>3. Data Security</h5>
          <p>
            We take reasonable measures to protect your data from unauthorized access or disclosure.
          </p>

          <h5>4. Third-Party Sharing</h5>
          <p>
            We do not sell or share your personal information with third parties, except when necessary for order fulfillment or legal compliance.
          </p>

          <h5>5. Your Rights</h5>
          <p>
            You have the right to request access, modification, or deletion of your personal data.
          </p>

          <p>For any privacy-related inquiries, contact us at <a href="mailto:info@gulfflower.com">info@gulfflower.com</a>.</p>
        </motion.div>
      </div>
    </section>
  );
}
