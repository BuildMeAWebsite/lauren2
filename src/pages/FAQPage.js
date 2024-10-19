import React from 'react';
import Grid from '@mui/material/Grid';

import FAQHero from '../Components/FAQPage/FAQHero';
import Policies from '../Components/Contact/Policies';
import { Helmet } from 'react-helmet';
import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import FAQBottomSection from '../Components/FAQPage/FAQBottomSection';

const FAQPage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FAQ - Lauren Martyn Therapy",
    "description": "Frequently Asked Questions about Lauren Martyn Therapy's virtual counselling services for school-aged children, youth, and young adults in Ontario, Canada.",
    "url": "https://laurenmartyn.ca/faq",
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
      "@id": "https://laurenmartyn.ca/faq",
    }
  };

  return (
    <Grid container spacing={0} >
      <Helmet>
        {/* Title Tag */}
        <title>FAQ - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Frequently Asked Questions about Lauren Martyn Therapy's virtual counselling services for school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="FAQ, therapy, counselling, virtual counselling, Ontario, Lauren Martyn, mental health, youth therapy, child therapy, young adult therapy, psychotherapy, mental well-being, online therapy"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyn.ca/faq" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="FAQ - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Frequently Asked Questions about Lauren Martyn Therapy's virtual counselling services for school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://laurenmartyn.ca/faq" />
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
        <FAQHero />
        
      </Grid>

     

      <Grid item xs={12} id="faq">
<HomeSection11ColorChange/>
      </Grid>

      <Grid item xs={12}>
        <Policies />
      </Grid>
      <Grid item xs={12} id="faq">
<HomeSection11ColorChange/>
      </Grid>
      <Grid item xs={12}>
        <FAQBottomSection />
      </Grid>


      
    </Grid>
  );
};

export default FAQPage;