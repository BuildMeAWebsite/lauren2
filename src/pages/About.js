import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import About2Boxes from '../Components/About/About2Section';
import Hero from '../Components/About/AboutHero';
import About2Boxes1 from '../Components/About/About2Section1';
import Policies from '../Components/Contact/Policies';
import QuoteSection from '../Components/ApproachPage/ModalitiesQuote';
import AboutSection6 from '../Components/About/AboutSection6';
import AboutSection7 from '../Components/About/AboutSection7';
import AboutSection8 from '../Components/About/AboutSection8';
import AboutSection8a from '../Components/About/AboutSection8a';
import AboutSection9 from '../Components/About/AboutSection9';
import AboutSection10 from '../Components/About/AboutSection10';
import AboutSection11 from '../Components/About/AboutSection11';
import AboutSection10a from '../Components/About/AboutSection10a';
import AboutSection11a from '../Components/About/AboutSection11a';
import AboutSection9a from '../Components/About/AboutSection9a';
import AboutSection8b from '../Components/About/AboutSection8b';
import AboutSection9b from '../Components/About/AboutSection9b';
import AboutSection10b from '../Components/About/AboutSection10b';
import AboutSection11b from '../Components/About/AboutSection11b';

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
    <Grid container spacing={0} style={{ paddingTop: '5rem' }}>
      <Helmet>
        {/* Title Tag */}
        <title>About Us - Lauren Martyn Therapy</title>

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
        <Hero />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection6 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection7 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection8 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection8a />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection8b />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection9 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection9a />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection9b />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection10 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection10a />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection10b />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection11 />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection11a />
      </Grid>
      <Grid item xs={12} id="top">
        <AboutSection11b />
      </Grid>
      <Grid item xs={12} id="top">
        <About2Boxes1 />
      </Grid>
      <Grid item xs={12} id="top">
        <About2Boxes />
      </Grid>

      <Grid item xs={12}>
        <TextBanner text="Therapeutic Modalities" backgroundColor='#fcfaf4' textColor='#556B2F' padding='2rem'/>
      </Grid>
      <Grid item xs={12}>
<QuoteSection/>
      </Grid>
  
      <Grid item xs={12} id="services-offered">
        <ServicesOffered />
      </Grid>

      <Grid item xs={12}>
        <TextBanner text="Frequently Asked Questions" backgroundColor='#fcfaf4' textColor='#556B2F' padding='5rem'/>
      </Grid>
      

      <Grid item xs={12} id="faq">
        <FAQComponent questionFontSize="1.5rem" answerFontSize="1rem" />
      </Grid>
      
      <Grid item xs={12}>
        <Policies />
      </Grid>
    </Grid>
  );
};

export default About;
