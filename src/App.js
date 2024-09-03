import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';

import FAQPage from './pages/FAQPage';
import ApproachesPageComponent from './pages/ApproachesPage';

import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop
import WhatToExpect from './pages/WhatToExpect';
import Sitemap from './Components/Sitemap';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
<Layout>      
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frequently-asked-questions" element={<FAQPage />} />
        <Route path="/approaches" element={<ApproachesPageComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-to-expect" element={<WhatToExpect />} />
        <Route path="/sitemap" element={<Sitemap />} />

      </Routes>
      </Layout >
    </Router>
  );
}

export default App;
