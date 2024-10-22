import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/Home/Hero';
import { Helmet } from 'react-helmet';

import HomeSection6 from '../Components/Home/HomeSection6';
import HomeSection7 from '../Components/Home/BookASession';
import HomeSection11 from '../Components/Home/HomeSection11';
import HomeSection13 from '../Components/Home/HomeSection13';
import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import FloatingCard from '../Components/Home/FloatCard2';
import AboutSection7 from '../Components/About/AboutSection7';

const Home = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lauren Martyn Therapy",
    "url": "https://www.laurenmartyn.ca/",
    "logo": "https://www.laurenmartyn.ca/Images/logo.png",
  
    "description": "Lauren Martyn Therapy is dedicated to supporting school-aged children, youth, and young adults in navigating life’s challenges through virtual counselling services in Ontario, Canada.",
    "founder": {
      "@type": "Person",
      "name": "Lauren Martyn"
    },
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@laurenmartyn.ca"
    }
  };
  
  return (
    <Grid 
      container 
      spacing={0}
   
    >
      <Helmet>
        {/* Title Tag */}
        <title>Home - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Lauren Martyn Therapy offers virtual counselling services dedicated to supporting school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="therapy, counselling, mental health, virtual counselling, Ontario, Lauren Martyn, youth therapy, child therapy, young adult therapy, psychotherapy, mental well-being, online therapy"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.laurenmartyn.ca" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Home - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Lauren Martyn Therapy offers virtual counselling services dedicated to supporting school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://www.laurenmartyn.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.laurenmartyn.ca/Images/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

    

      <Grid item xs={12}>
        <HomeSection6 />
      </Grid>

      <Grid item xs={12}>
        <HomeSection11 />
      </Grid>
      <Grid item xs={12}>
        <FloatingCard />
      </Grid>
      <Grid item xs={12}>
        <HomeSection7 />
      </Grid>


    
    
      <Grid item xs={12}>
        <HomeSection11ColorChange />
      </Grid>

      <Grid item xs={12} id="top">
        <AboutSection7 />
      </Grid>

      
    
  

   
     
      <Grid item xs={12}>
        <HomeSection13 />
      </Grid>
   
    

      <Grid item xs={12}>
        <HomeSection11 />
      </Grid>
  
   
    
   
    </Grid>
  );
};

export default Home;