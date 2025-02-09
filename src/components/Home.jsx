import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Home.css";
import Features from "./Features";
import About from "./About";
import { useNavigate } from "react-router-dom";


// List of services with description
const services = [
  { name: "Furnitures", description: "High-quality and stylish furniture for your home and office.", img: "/images/furniture.png" },
  { name: "Curtains Works", description: "Custom-made curtains to match your interior style.", img: "/images/curtain.png" },
  { name: "Carpets", description: "Luxurious carpets for a comfortable and elegant feel.", img: "/images/carpets.png" },
  { name: "Wallpapers", description: "Beautiful wallpapers to enhance your home decor.", img: "/images/wallpapers.png" },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <> 
    <div className="min-h-screen bg-light p-5 home">
      <header className="text-center mb-5 herotitle">
        <h1 className="display-4 font-weight-bold text-dark">Gulf Flower Furnishings</h1>
        <p className="lead text-secondary">Experience the perfect blend of luxury and comfort with our exquisite furniture collection.</p>
        <button className="explore-btn" onClick={() => navigate("/services")}>
    Discover More
    </button>

        <div className="container">
      
        </div>
        
      </header>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {services.map((service, index) => (
            <div key={index} className="col">
              <motion.div
                className="motion-card"
                whileHover={{
                  scale: window.innerWidth > 768 ? 1.15 : 1.05, 
                  rotate: window.innerWidth > 768 ? 5 : 0, 
                  zIndex: 20, 
                }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
              >
                <Card className="shadow-sm border-0 h-100 card">
                  <Card.Body className="text-center">
                    <img className="card-img img-fluid" src={service.img} alt={service.name} />
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Features />
    <About />
    </>
  );
}
