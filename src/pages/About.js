import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';
import AboutSection6 from '../Components/About/AboutSection6';
import AboutSection7 from '../Components/About/AboutSection7';
import AboutSection9 from '../Components/About/AboutSection9';
import AboutSection10 from '../Components/About/AboutSection10';
import AboutSection11 from '../Components/About/AboutSection11';
import AboutSection9a from '../Components/About/AboutSection9a';
import AboutSection9b from '../Components/About/AboutSection9b';
import AboutSection10b from '../Components/About/AboutSection10b';
import AboutSection11b from '../Components/About/AboutSection11b';
import FloatingCard from '../Components/Home/FloatCard1';
import HomeSection11 from '../Components/Home/HomeSection11';
import AboutSection12 from '../Components/About/AboutSection12';
import AboutSection12b from '../Components/About/AboutSection12b';
import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import AboutSection14 from '../Components/About/AboutSection14';

const About = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lauren Martyn Therapy",
    "url": "https://laurenmartyntherapy.ca/",
    "logo": "https://laurenmartyntherapy.ca/Images/logo.png",
    "description": "Lauren Martyn Therapy is dedicated to supporting school-aged children, youth, and young adults in navigating life’s challenges through virtual counseling services in Ontario, Canada.",
    "founder": {
      "@type": "Person",
      "name": "Lauren Martyn"
    },
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@laurenmartyntherapy.ca"
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
          content="Learn more about Lauren Martyn Therapy, offering virtual counseling services to support school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="therapy, counseling, mental health, virtual counseling, Ontario, Lauren Martyn, youth therapy, child therapy, young adult therapy, psychotherapy, mental well-being, online therapy"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyntherapy.ca/about" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Learn more about Lauren Martyn Therapy, offering virtual counseling services to support school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://laurenmartyntherapy.ca/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://laurenmartyntherapy.ca/Images/logo.png" />

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
        <AboutSection6 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection7 />
      </Grid>
      <Grid item xs={12} id="top">
        <HomeSection11 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection9a />
      </Grid>
    
      <Grid item xs={12} id="top">
        <AboutSection9 />
      </Grid>
   
      <Grid item xs={12} id="top">
        <AboutSection9b />
      </Grid>
     
      <Grid item xs={12} id="top">
        <AboutSection10 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection10b />
      </Grid>  

   
       <Grid item xs={12} id="top">
        <AboutSection11 />
      </Grid> 
      
        <Grid item xs={12} id="top">
        <AboutSection11b />
      </Grid>  
   
       <Grid item xs={12} id="top">
        <AboutSection12 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection12b />
      </Grid>
   
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange  />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection14  />
      </Grid>

    
    
    

   
    </Grid>
  );
};

export default About;
