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
      minHeight: '80vh',
      color: '#fcfaf4',
      fontFamily: "'PT Sans', sans-serif",
      padding: '2.5rem 2.5rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '1000px',
    },
    slideIn: {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    subtitle: {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '1rem',
      color: '#fcfaf4',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    },
    title: {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '3.5rem',
      fontWeight: 400,
      color: '#fcfaf4',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
      display: 'flex',
      margin: '1rem auto',
      justifyContent: 'center',
    },
    contactButton: {
      padding: '6px 18px',
      fontFamily: "'PT Sans', sans-serif",
      fontWeight: 500,
      fontSize: '1.5rem',
      textTransform: 'none',
      color: '#556B2F', // Initial text color
      border: `1px solid #556B2F`, // Initial border color
      backgroundColor: 'transparent', // Initial background color
      textDecoration: 'none',
      borderRadius: '0px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
      display: 'inline-block',
      // Hover effects handled by JS (onMouseEnter/onMouseLeave)
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'contain',
    },
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1.jpg`} >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack image below text on small screens, side by side on large screens
        style={styles.heroContainer}
        spacing={3}
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
          <div style={styles.buttonContainer}>
            <a
              href="/contact"
              style={styles.contactButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8FBC8F'; // Background color on hover
                e.currentTarget.style.color = '#FCFAF4'; // Text color on hover
                e.currentTarget.style.borderColor = 'transparent'; // Make border transparent on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; // Revert to transparent background
                e.currentTarget.style.color = '#556B2F'; // Revert to initial text color
                e.currentTarget.style.borderColor = '#556B2F'; // Revert to initial border color
              }}
            >
              Contact
            </a>
          </div>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;