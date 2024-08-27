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
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/couch.jpg`}>
      <Grid container alignItems="center" justifyContent="center" style={styles.heroContainer} spacing={3}>
        <Grid item xs={12} md={6} className="fadeIn">
          <h1 style={styles.title}>
            You are the <em>expert</em> of your own experience.
          </h1>
          <p style={styles.description}>
           Together, we work as a team to ensure they feel heard, understood, and valued. Therapy is our dress rehearsal for life—where we process experiences, learn new skills, and apply new strategies to the life they want outside our sessions.
          I see working with children, youth, and young adults as the future leaders of our world. Their potential is boundless, and with the right support, they can flourish. I resonate with their playfulness, creative outlook, open-mindedness, and adaptability. I am amazed by people’s ability to build resilience and to be able to withstand and adapt to unpredictable forces of life. There is space for both laughs and lighthearted communication as well as tears and relief in sharing heavy feelings in our work together.
          </p>
          <div style={styles.buttonContainer}>
            <a href="/contact" style={styles.contactButton}>Contact</a>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="fadeIn">
          <img
            src={`${process.env.PUBLIC_URL}/Images/lauren.png`}
            alt="Decorative"
            style={styles.image}
          />
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

const styles = {
  heroContainer: {
    fontFamily: "PT Sans, sans-serif",

    minHeight: '90vh',
    color: '#3a3a3a',
    padding: '4rem 5rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
    maxWidth: '900px',
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#3a3a3a',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  title: {
    fontFamily: "PT Sans, sans-serif",
    fontSize: '2.5rem',
    fontWeight: '400',
    color: '#01796f',
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
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'contain',
  },
};

export default Hero;

