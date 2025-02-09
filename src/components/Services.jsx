import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaPaintBrush, FaTruck, FaTools, FaWarehouse, FaUserTie } from "react-icons/fa";
import "./Services.css";

const iconServices = [
  {
    icon: <FaCouch size={40} className="service-icon" />,
    title: "Custom Furniture",
    description: "We craft bespoke furniture tailored to your style and space.",
  },
  {
    icon: <FaPaintBrush size={40} className="service-icon" />,
    title: "Interior Design",
    description: "Our design experts bring your vision to life with creativity and precision.",
  },
  {
    icon: <FaTruck size={40} className="service-icon" />,
    title: "Delivery & Setup",
    description: "We ensure seamless delivery and setup of your furniture.",
  },
  {
    icon: <FaTools size={40} className="service-icon" />,
    title: "Furniture Repair",
    description: "Expert repairs and refinishing to keep your furniture looking new.",
  },
  {
    icon: <FaWarehouse size={40} className="service-icon" />,
    title: "Storage Solutions",
    description: "Providing smart storage solutions tailored to your needs.",
  },
  {
    icon: <FaUserTie size={40} className="service-icon" />,
    title: "Consultation",
    description: "Professional consultation services to help you make the best choices.",
  },
];

const imageServices = [
  {
    title: "Furnitures",
    description: "Explore our premium furniture collection to enhance your home.",
    image: "/images/services/furniture.png",
  },
  {
    title: "Curtains",
    description: "Discover a variety of curtains to match any decor.",
    image: "/images/services/curtain.png",
  },
  {
    title: "Carpets",
    description: "Choose from a wide array of luxurious carpets to suit any room.",
    image: "/images/services/carpet.png",
  },
  {
    title: "Wallpapers",
    description: "Transform your walls with our stylish wallpaper designs.",
    image: "/images/services/wallpaper.png",
  },
  {
    title: "Cupboards",
    description: "Explore our range of functional and stylish cupboards.",
    image: "/images/services/cupboard.png",
  },
  {
    title: "Sofas",
    description: "Find the perfect sofa to complement your living space.",
    image: "/images/services/sofa.png",
  },
  {
    title: "Office Counters",
    description: "Enhance your workspace with our modern office counters.",
    image: "/images/services/office.png",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center serv-title"
        >
          Our Services
        </motion.h2>

        {/* Image-Based Services */}
        <div className="row g-4 mt-4 justify-content-center">
  {imageServices.map((service, index) => (
    <motion.div
      key={index}
      className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
      initial={{
        opacity: 0,
        scale: window.innerWidth > 768 ? 0.9 : 1, // No scale animation on mobile
        y: window.innerWidth <= 768 ? 20 : 0, // Move up instead of scale for mobile
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: window.innerWidth > 768 ? 0.6 : 0.4, // Faster animation on mobile
        delay: window.innerWidth > 768 ? index * 0.2 : index * 0.1, // Reduce delay on mobile
      }}
      viewport={{ once: true }}
    >
      <div className="service-image-card text-center">
        <img src={service.image} alt={service.title} className="service-image" />
        <div className="service-info">
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>



        {/* Specialties Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-5 mb-5 serv-title"
        >
          Our Specialties
        </motion.h2>

        {/* Icon-Based Services */}
        <div className="row g-4">
          {iconServices.map((service, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-sm-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-card text-center p-4">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h5 className="mt-3">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

