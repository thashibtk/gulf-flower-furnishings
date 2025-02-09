import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS (needed for navbar collapse)
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FAQs from './components/Faqs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import AboutPage from './components/AboutPage';
import Sitemap from './components/Sitemap';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsConditions/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/sitemap" element={<Sitemap/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
