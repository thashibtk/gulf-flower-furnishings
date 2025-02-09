import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Faqs.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide custom furniture, interior design, delivery, repair, and storage solutions.",
  },
  {
    question: "Do you offer home consultations?",
    answer: "Yes, we offer professional home consultations to help you choose the best furnishings.",
  },
  {
    question: "How long does furniture delivery take?",
    answer: "Delivery typically takes between 5-10 business days, depending on your location.",
  },
  {
    question: "Can I customize my furniture?",
    answer: "Absolutely! We specialize in bespoke furniture tailored to your preferences.",
  },
  {
    question: "What are your working hours?",
    answer: "We operate from Monday to Friday, 9:00 AM to 6:00 PM.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h5>{faq.question}</h5>
                {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
              </div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
