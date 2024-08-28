import React from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from '../Home/ParallaxSection';

const Hero = () => {
  const styles = {
    heroContainer: {
      minHeight: '90vh',
      color: '#01796F',
      fontFamily: "'PT Sans', sans-serif",
      padding: '2.5rem 2.5rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '600px',
    },
    slideIn: {
      animation: 'slideInFromBottom 1s ease-in-out forwards',
    },
    subtitle: {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '0.75rem',
      color: '#01796F',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '2.5rem',
      fontWeight: 300,
      color: '#3a3a3a',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    buttonContainer: {
      display: 'flex',
      margin: '1rem auto',
      justifyContent: 'center',
    },
    contactButton: {
      padding: '10px 20px',
      fontFamily: "'PT Sans', sans-serif",
      fontWeight: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      cursor: 'pointer',
      fontSize: '1rem',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
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
    '@keyframes slideInFromBottom': {
      '0%': {
        opacity: 0,
        transform: 'translateY(100px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };

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
        <Grid item xs={12} md={6} style={{ ...styles.slideIn, ...styles['@keyframes slideInFromBottom'] }}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/h.jpg`}
            alt="Lauren Martyn Headshot"
            style={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ ...styles.slideIn, ...styles['@keyframes slideInFromBottom'] }}>
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

export default Hero;
