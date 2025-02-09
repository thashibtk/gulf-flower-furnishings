import React from "react";
import { motion } from "framer-motion";
import { BiBulb, BiGroup, BiAward, BiShield } from "react-icons/bi"; 
import "./About.css";

const values = [
  {
    icon: <BiBulb size={40} className="icon" />,
    title: "Innovation",
    description:
      "We lead the industry with our pioneering approach, blending traditional techniques with modern design to produce unique, timeless furniture pieces."
  },
  {
    icon: <BiGroup size={40} className="icon" />,
    title: "Customer-Centric",
    description:
      "Our commitment to our clients is unwavering, ensuring that every piece of furniture is tailored to meet the highest standards of excellence and customer satisfaction."
  },
  {
    icon: <BiAward size={40} className="icon" />,
    title: "Expertise",
    description:
      "With decades of experience, our team possesses unparalleled knowledge and expertise, transforming concepts into reality with precision and care."
  },
  {
    icon: <BiShield size={40} className="icon" />,
    title: "Integrity",
    description:
      "At Gulf Flower Furniture, we uphold the values of transparency and honesty, fostering trust and integrity in every interaction and transaction."
  }
];

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: index * 0.3 } // Stagger effect
  })
};

export default function About() {
return (
    <section className="about-section">
        <div className="container">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Runs animation only once when in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="about-title text-center"
            >
                About Us
            </motion.h2>

            {/* Timeline List */}
            <ul className="about-list">
                {values.map((item, index) => (
                    <motion.li
                        key={index}
                        className="about-item"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Runs animation when 20% of item is visible
                        custom={index} // Pass index for staggered delay
                    >
                        <motion.div
                            className="timeline-icon"

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {item.icon}
                        </motion.div>
                        <div className="timeline-content">
                            <h4 className="about-item-title">{item.title}</h4>
                            <p className="about-item-text">{item.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
);
}
