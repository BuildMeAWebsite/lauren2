import React from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from '../Home/ParallaxSection';

const ApproachHero = () => {
  const styles = {
    heroContainer: {
      minHeight: '30vh',
      color: '#01796F',
      fontFamily: "'PT Sans', sans-serif",
      padding: '2.5rem 2.5rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '800px',
    },
    slideIn: {
      animation: 'slideInFromBottom 1s ease-in-out forwards',
    },
    title: {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '3rem',
      fontWeight: 300,
      color: '#fcfaf4',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
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
        direction={{ xs: 'column', md: 'row' }} // Center text on small screens, side by side on large screens
        style={styles.heroContainer}
        spacing={3}
      >
        <Grid item xs={12} md={12} style={{ ...styles.slideIn, ...styles['@keyframes slideInFromBottom'] }}>
          <h1 style={styles.title}>
Therapeutic Modalities</h1>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default ApproachHero;
