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


function App() {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frequently-asked-questions" element={<FAQPage />} />
          <Route path="/approaches" element={<ApproachesPageComponent />} />


        </Routes>
      </Layout>
     <Footer />
    </Router>
  );
}

export default App;