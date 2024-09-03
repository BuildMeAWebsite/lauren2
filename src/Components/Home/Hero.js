import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element

  useEffect(() => {
    // Trigger animation on page load
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transition = `transform 1s ease-in-out ${index * 0.1}s, opacity 1s ease-in-out ${index * 0.1}s`;
        ref.style.transform = 'translateY(0)';
        ref.style.opacity = '1';
      }
    });
  }, []);

  const styles = {
    heroContainer: {
      minHeight: '50vh',
      color: '#fcfaf4',
      fontFamily: "'Lora', sans-serif",
      marginTop: '-10rem',
      padding: '0.25rem 1rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '800px',
    },
    slideIn: {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    subtitle: {
      fontFamily: "'Lora', sans-serif",
      fontSize: '0.75rem',
      color: '#fcfaf4',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.95)',
    },
    title: {
      fontFamily: "'Lora', sans-serif",
      fontSize: '3.5rem',
      fontWeight: 400,
      color: '#fcfaf4',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.75)',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'contain',
    },
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background3.jpg`} minheight='100vh'>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack image below text on small screens, side by side on large screens
        style={styles.heroContainer}
        spacing={0}
      >
        <Grid item xs={12} md={6} style={styles.slideIn} ref={(el) => (textRefs.current[0] = el)}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/h.jpg`}
            alt="Lauren Martyn Headshot"
            style={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6} style={styles.slideIn} ref={(el) => (textRefs.current[1] = el)}>
          <h2 style={styles.subtitle}>ONTARIO PSYCHOTHERAPY</h2>
          <h1 style={styles.title}>
            Therapy for children, teens, <em> and </em> young adults 
          </h1>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;