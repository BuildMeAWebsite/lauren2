import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/Home/Hero';
import Home3Boxes from '../Components/Home/Home3Section';
import HomeSection2 from '../Components/Home/HomeSection2';
import { Helmet } from 'react-helmet';

const Home = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lauren Martyn Therapy",
    "url": "https://laurenmartyntherapy.ca/",
    "logo": "https://laurenmartyntherapy.ca/Images/logo.png",
    "sameAs": [
      "https://www.facebook.com/laurenmartyntherapy",
      "https://www.twitter.com/laurenmartyntherapy",
      "https://www.linkedin.com/company/laurenmartyntherapy"
    ],
    "description": "Lauren Martyn Therapy is dedicated to supporting school-aged children, youth, and young adults in navigating life’s challenges through virtual counseling services in Ontario, Canada.",
    "founder": {
      "@type": "Person",
      "name": "Lauren Martyn"
    },
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@laurenmartyntherapy.ca"
    }
  };

  return (
    <Grid 
      container 
      spacing={0}
      style={{ paddingTop: '4rem' }}
    >
      <Helmet>
        {/* Title Tag */}
        <title>Home - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Lauren Martyn Therapy offers virtual counseling services dedicated to supporting school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="therapy, counseling, mental health, virtual counseling, Ontario, Lauren Martyn, youth therapy, child therapy, young adult therapy, psychotherapy, mental well-being, online therapy"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyntherapy.ca" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Home - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Lauren Martyn Therapy offers virtual counseling services dedicated to supporting school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://laurenmartyntherapy.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://laurenmartyntherapy.ca/Images/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Grid item xs={12}>
        <Hero />
      </Grid>

      <Grid item xs={12}>
        <HomeSection2 />
      </Grid>

      <Grid item xs={12}>
        <Home3Boxes />
      </Grid>
    </Grid>
  );
};

export default Home;