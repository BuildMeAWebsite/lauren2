import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import ApproachHero from '../Components/ApproachPage/ApproachHero';
import QuoteSection from '../Components/ApproachPage/ModalitiesQuote';

const ApproachesPageComponent = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Approaches - Lauren Martyn Therapy",
    "description": "Learn about the various therapeutic approaches offered by Lauren Martyn Therapy, including strength-based, solution-focused, emotion-focused, and narrative therapy.",
    "url": "https://laurenmartyntherapy.ca/approaches",
    "publisher": {
      "@type": "Organization",
      "name": "Lauren Martyn Therapy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://laurenmartyntherapy.ca/Images/logo.png",
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://laurenmartyntherapy.ca/approaches",
    }
  };

  return (
    <Grid container spacing={0} style={{ paddingTop: '5rem' }}>
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
          content="therapy, counseling, therapeutic approaches, strength-based therapy, solution-focused therapy, emotion-focused therapy, narrative therapy, Lauren Martyn, mental health, Ontario"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyntherapy.ca/approaches" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Therapeutic Approaches - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Learn about the various therapeutic approaches offered by Lauren Martyn Therapy, including strength-based, solution-focused, emotion-focused, and narrative therapy."
        />
        <meta property="og:url" content="https://laurenmartyntherapy.ca/approaches" />
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
        <ApproachHero />
      </Grid>

      <Grid item xs={12}>
        <QuoteSection/>
      </Grid>

      <Grid item xs={12} id="services-offered">
        <ServicesOffered />
      </Grid>

      <Grid item xs={12}>
        <TextBanner 
          text="Frequently Asked Questions" 
          backgroundColor='#fcfaf4' 
          textColor='#556B2F' 
          padding='5rem' 
        />
      </Grid>

      <Grid item xs={12} id="faq">
        <FAQComponent questionFontSize="1.5rem" answerFontSize="1rem" />
      </Grid>
    </Grid>
  );
};

export default ApproachesPageComponent;