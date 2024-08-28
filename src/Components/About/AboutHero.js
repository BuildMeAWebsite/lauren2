import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from '../Home/ParallaxSection';

const Hero = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fadeIn');

    fadeInElements.forEach((element) => {
      element.style.opacity = 0;
      element.style.transition = 'opacity 1.5s ease-in-out';
    });

    setTimeout(() => {
      fadeInElements.forEach((element) => {
        element.style.opacity = 1;
      });
    }, 100); // Delay to ensure transition takes effect
  }, []);

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1.jpg`}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack image below text on small screens, side by side on large screens
        style={styles.heroContainer}
        spacing={3}
      >
        <Grid item xs={12} md={6} className="fadeIn">
          <img
            src={`${process.env.PUBLIC_URL}/Images/h.jpg`}
            alt="Lauren Martyn Headshot"
            style={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6} className="fadeIn">
          <h2 style={styles.subtitle}>ONTARIO PSYCHOTHERAPY</h2>
          <h1 style={styles.title}>
            To be seen, to be heard, and to be <em>understood</em>.
          </h1>
          <div style={styles.buttonContainer}>
            <a href="/contact" style={styles.contactButton}>Contact</a>
          </div>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

const styles = {
  heroContainer: {
    minHeight: '90vh',
    color: '#3a3a3a',
    padding: '4rem 5rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
    maxWidth: '900px',
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '0.75rem',
    fontWeight: 'normal',
    color: '#3a3a3a',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  title: {
    fontFamily: "PT Sans, sans-serif",
    fontSize: '2.5rem',
    fontWeight: '400',
    color: '#3a3a3a',
    margin: '0',
    lineHeight: '1',
  },
  buttonContainer: {
    display: 'flex',
    margin: '2rem 0',
    justifyContent: 'center',
  },
  contactButton: {
    padding: '10px 20px',
    fontFamily: "PT Sans, sans-serif",
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontSize: '1rem',
    backgroundColor: '#3a3a3a',
    color: '#fcfaf4',
    textDecoration: 'none',
    borderRadius: '0px',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '10px',
    height: 'auto',
    objectFit: 'contain',
  },
};

export default Hero;
