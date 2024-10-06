import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/FAQPage/FAQSection';
import ApproachHero from '../Components/ApproachPage/ApproachHero';
import QuoteSection from '../Components/ApproachPage/ModalitiesQuote';
import AboutSection12b from '../Components/About/AboutSection12b';
import AboutSection12 from '../Components/About/AboutSection12';
import AboutSection11b from '../Components/About/AboutSection11b';
import AboutSection11 from '../Components/About/AboutSection11';
import AboutSection10b from '../Components/About/AboutSection10b';
import AboutSection10 from '../Components/About/AboutSection10';
import AboutSection9b from '../Components/About/AboutSection9b';
import AboutSection9 from '../Components/About/AboutSection9';
import AboutSection9a from '../Components/About/AboutSection9a';
import HomeSection11 from '../Components/Home/HomeSection11';
import AboutSection7 from '../Components/About/AboutSection7';
import AboutSection14 from '../Components/About/AboutSection14';
import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import ApproachSection3 from '../Components/ApproachPage/ApproachSection3';

const ApproachesPageComponent = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Approaches - Lauren Martyn Therapy",
    "description": "Learn about the various therapeutic approaches offered by Lauren Martyn Therapy, including strength-based, solution-focused, emotion-focused, and narrative therapy.",
    "url": "https://laurenmartyn.ca/approaches",
    "publisher": {
      "@type": "Organization",
      "name": "Lauren Martyn Therapy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://laurenmartyn.ca/Images/logo.png",
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://laurenmartyn.ca/approaches",
    }
  };

  return (
    <Grid container spacing={0} >
      <Helmet>
        {/* Title Tag */}
        <title>Therapeutic Approaches - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn about the various therapeutic approaches offered by Lauren Martyn Therapy, including strength-based, solution-focused, emotion-focused, and narrative therapy."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="therapy, counselling, therapeutic approaches, strength-based therapy, solution-focused therapy, emotion-focused therapy, narrative therapy, Lauren Martyn, mental health, Ontario"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyn.ca/approaches" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Therapeutic Approaches - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Learn about the various therapeutic approaches offered by Lauren Martyn Therapy, including strength-based, solution-focused, emotion-focused, and narrative therapy."
        />
        <meta property="og:url" content="https://laurenmartyn.ca/approaches" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://laurenmartyn.ca/Images/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        
      </Helmet>

      <Grid item xs={12}>
        <ApproachHero />
      </Grid>
      <Grid item xs={12} id="top">
        <HomeSection11 />
      </Grid>
      <Grid item xs={12} id="top">
        <ApproachSection3 />
      </Grid>
  
     
      <Grid item xs={12} id="top">
        <AboutSection9 />
      </Grid>
   
    
   
      <Grid item xs={12} id="top">
        <AboutSection9b />
      </Grid>
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange />
      </Grid>
     
      <Grid item xs={12} id="top">
        <AboutSection10 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection10b />
      </Grid>  
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange />
      </Grid>
   
       <Grid item xs={12} id="top">
        <AboutSection11 />
      </Grid> 
      
        <Grid item xs={12} id="top">
        <AboutSection11b />
      </Grid>  
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange />
      </Grid>
       <Grid item xs={12} id="top">
        <AboutSection12 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection12b />
      </Grid>
      <Grid item xs={12} id="top">
        <HomeSection11ColorChange />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection14 />
      </Grid>
     
    </Grid>
  );
};

export default ApproachesPageComponent;