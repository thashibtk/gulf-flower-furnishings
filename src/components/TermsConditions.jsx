import React from "react";
import { motion } from "framer-motion";
import "./PrivacyTerms.css";

export default function TermsConditions() {
  return (
    <section className="policy-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          Terms & Conditions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="policy-content"
        >
          <h5>1. Introduction</h5>
          <p>
            By using Gulf Flower Furnishings' website, you agree to these terms. If you do not agree, please do not use our services.
          </p>

          <h5>2. Orders & Payments</h5>
          <p>
            All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.
          </p>

          <h5>3. Refund & Return Policy</h5>
          <p>
            Items can be returned within 7 days of purchase, provided they are in their original condition.
          </p>

          <h5>4. User Conduct</h5>
          <p>
            Users must not misuse the website, engage in fraudulent activity, or post harmful content.
          </p>

          <h5>5. Limitation of Liability</h5>
          <p>
            We are not responsible for any indirect or incidental damages resulting from the use of our services.
          </p>

          <h5>6. Changes to Terms</h5>
          <p>
            We reserve the right to update these terms at any time without prior notice.
          </p>

          <p>For any inquiries, contact us at <a href="mailto:info@gulfflower.com">info@gulfflower.com</a>.</p>
        </motion.div>
      </div>
    </section>
  );
}
