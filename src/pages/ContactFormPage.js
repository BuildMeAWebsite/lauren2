import React from 'react';
import Grid from '@mui/material/Grid';
import Policies from '../Components/Contact/Policies';
import GoogleFormEmbed from '../Components/GoogleForm';
import WhatToExpect from '../Components/Contact/WhatToExpect';
import Hero from '../Components/Contact/ContactHero';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Form - Lauren Martyn Therapy",
    "description": "Fill out the contact form to get in touch with Lauren Martyn Therapy for virtual counseling services. Available for school-aged children, youth, and young adults in Ontario, Canada.",
    "url": "https://laurenmartyntherapy.ca/contact-form",
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
      "@id": "https://laurenmartyntherapy.ca/contact-form",
    }
  };

  return (
    <Grid container spacing={0} style={{ paddingTop: '5rem' }}>
      <Helmet>
        {/* Title Tag */}
        <title>Contact Form - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Fill out the contact form to get in touch with Lauren Martyn Therapy for virtual counseling services. Available for school-aged children, youth, and young adults in Ontario, Canada."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="contact form, therapy, counseling, virtual counseling, Ontario, Lauren Martyn, mental health support, schedule a session"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laurenmartyntherapy.ca/contact-form" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Form - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Fill out the contact form to get in touch with Lauren Martyn Therapy for virtual counseling services. Available for school-aged children, youth, and young adults in Ontario, Canada."
        />
        <meta property="og:url" content="https://laurenmartyntherapy.ca/contact-form" />
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
        <GoogleFormEmbed />
      </Grid>

      <Grid item xs={12}>
        <Policies />
      </Grid>

      <Grid item xs={12}>
        <WhatToExpect />
      </Grid>
    </Grid>
  );
};

export default ContactForm;