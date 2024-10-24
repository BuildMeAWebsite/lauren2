import React from 'react';
import Grid from '@mui/material/Grid';
import GoogleFormEmbed from '../Components/GoogleForm';

import { Helmet } from 'react-helmet';
import ContactForm from './ContactFormPage';
import HomeSection11 from '../Components/Home/HomeSection11';
import HomeSection11ColorChange from '../Components/Home/HomeSection11ColorChange';
import FloatingCard4 from '../Components/Home/FloatCard4';

const Contact = ({ isFormOpen, handleFormClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleFormClose();
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Lauren Martyn Therapy",
    "description": "Get in touch with Lauren Martyn Therapy for virtual counselling services. Reach out to us for more information or to schedule a session.",
    "url": "https://www.laurenmartyn.ca/contact",
    "publisher": {
      "@type": "Organization",
      "name": "Lauren Martyn Therapy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.laurenmartyn.ca/Images/logo.png",
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@laurenmartyn.ca"
    }
  };

  return (
    <>
      <Helmet>
        {/* Title Tag */}
        <title>Contact - Lauren Martyn Therapy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get in touch with Lauren Martyn Therapy for virtual counselling services. Reach out to us for more information or to schedule a session."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="contact, therapy, counselling, virtual counselling, Ontario, Lauren Martyn, schedule a session, mental health support"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.laurenmartyn.ca/contact" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact - Lauren Martyn Therapy" />
        <meta
          property="og:description"
          content="Get in touch with Lauren Martyn Therapy for virtual counselling services. Reach out to us for more information or to schedule a session."
        />
        <meta property="og:url" content="https://www.laurenmartyn.ca/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.laurenmartyn.ca/Images/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Grid container spacing={0} >
        <Grid item xs={12}>
          <FloatingCard4 />
        </Grid>

     
        <Grid item xs={12}>
          <HomeSection11/>
        </Grid>
        <Grid item xs={12}
        style = {{
          backgroundColor: '#8FBC8F'
        }}
        >
          <ContactForm />
        </Grid>
        <Grid item xs={12}>
          <HomeSection11/>
        </Grid>
      
      </Grid>

      {isFormOpen && (
        <div style={styles.modalOverlay} onClick={handleOverlayClick}>
          <div style={styles.modal}>
            <button onClick={handleFormClose} style={styles.closeButton}>Close</button>
            <GoogleFormEmbed />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  gridContainer: {
    padding: '0rem',
    backgroundColor : '#2b3d2b',

  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  
  },
  modal: {
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '80%',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
  },
};

export default Contact;