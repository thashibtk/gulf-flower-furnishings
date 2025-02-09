import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCouch, FaPaintRoller, FaRulerCombined, FaShieldAlt } from "react-icons/fa";
import "./Features.css";

// List of features
const features = [
  { id: 1, icon: <FaCouch />, title: "Premium Quality", description: "We provide high-quality, durable, and stylish furnishings for every space." },
  { id: 2, icon: <FaPaintRoller />, title: "Custom Designs", description: "Tailor-made furniture, curtains, and wallpapers to match your unique style." },
  { id: 3, icon: <FaRulerCombined />, title: "Perfect Fit", description: "Accurate measurements and fittings to ensure seamless installation." },
  { id: 4, icon: <FaShieldAlt />, title: "Guaranteed Durability", description: "Our products are built to last with top-quality materials." },
];

export default function Features() {
return (
    <div className="features">
    <div className="container py-5 ">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {features.map((feature) => (
                <motion.div
                    key={feature.id}
                    whileHover={{ scale: 1.1 }}
                    className="col"
                >
                    <Card className="shadow-lg border-0 feature-card text-center">
                        <Card.Body>
                            <div className="feature-icon">{feature.icon}</div>
                            <h5 className="card-title">{feature.title}</h5>
                            <p className="card-text text-muted">{feature.description}</p>
                        </Card.Body>
                    </Card>
                </motion.div>
            ))}
        </div>
    </div>
    </div>
);
}
