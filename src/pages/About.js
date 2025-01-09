import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';
import AboutSection6 from '../Components/About/AboutSection1';
import AboutSection7 from '../Components/About/AboutSection7';

import FloatingCard from '../Components/Home/FloatCard1';
import HomeSection11 from '../Components/Home/HomeSection11';

import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import AboutSection14 from '../Components/About/AboutSection14';
import AboutSection1 from '../Components/About/AboutSection1';
import FloatingCard3 from '../Components/Home/FloatCard3';
import AboutSection2 from '../Components/About/AboutSection1';
import WhatToExpectFloating from '../Components/Contact/WhatToExpectFloating';
import WhatToExpectSection1 from '../Components/Contact/WhatToExpectSection1';

const About = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lauren Martyn Therapy",
    "url": "https://www.www.laurenmartyn.ca/",
    "logo": "https://www.www.laurenmartyn.ca/Images/logo.png",
    "description": "Lauren Martyn Therapy is dedicated to supporting school-aged children, youth, and young adults in navigating life’s challenges through virtual counselling services in Ontario, Canada.",
    "founder": {
      "@type": "Person",
      "name": "Lauren Martyn"
    },
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "laurenmpsychotherapy@gmail.com"
    }
  };

  return (
    <Grid container spacing={0}>
      <Helmet>
        {/* Title Tag */}
        <title>About My Practice - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn more about Lauren Martyn Therapy, offering virtual counselling services to support school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="therapy, counselling, mental health, virtual counselling, Ontario, Lauren Martyn, youth therapy, child therapy, young adult therapy, psychotherapy, mental well-being, online therapy"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.www.laurenmartyn.ca/about" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Learn more about Lauren Martyn Therapy, offering virtual counselling services to support school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://www.www.laurenmartyn.ca/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.www.laurenmartyn.ca/Images/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Grid item xs={12} id="top">
        <FloatingCard />
      </Grid>
    
      <Grid item xs={12} id="top">
        <AboutSection1 />
      </Grid>
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange  />
      </Grid>
      <Grid item xs={12} id="top">
        <FloatingCard3 />
      </Grid>
   

      <Grid item xs={12} id="top">
        <HomeSection11 />
      </Grid>
      <Grid item xs={12}>
        <WhatToExpectFloating/>
      </Grid>

      <Grid item xs={12}>
        <WhatToExpectSection1/>
      </Grid>

      <Grid item xs={12}>
        <HomeSection11/>
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection14  />
      </Grid>
   
 
  

    
    
    

   
    </Grid>
  );
};

export default About;
