import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import FAQComponent from './Components/About/FAQSection';
import FAQPage from './pages/FAQPage';
import ApproachesPageComponent from './pages/ApproachesPage';
import NavigationMenuBar from './Components/NavigationMenu';
import GoogleFormEmbed from './Components/GoogleForm';
import ContactForm from './pages/ContactFormPage';
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop
import FullHeightCarousel from './Components/Home/HomeSection8';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <NavigationMenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frequently-asked-questions" element={<FAQPage />} />
        <Route path="/approaches" element={<ApproachesPageComponent />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/images-carousel" element={<FullHeightCarousel />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
