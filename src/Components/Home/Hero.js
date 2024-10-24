import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element
  const [hovered, setHovered] = useState(false); // Hover state for hover effects

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
      minHeight: '30vh',
      color: '#fcfaf4',
      fontFamily: "'Lora', sans-serif",
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '80px',
      padding: '1rem 1rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '1000px',
      '@media (max-width: 768px)': {
        minHeight: '50vh',
        margin: '1rem auto',
        flexDirection: 'column',
      },
    },
    subtitle: {
      fontFamily: "'Lora', sans-serif",
      fontSize: '2rem',
      color: '#3a3a3a',
      fontWeight: '400',
      textTransform: 'none',
      letterSpacing: '1px',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '0.65rem',
      },
    },
    title: {
      fontFamily: "'Georgia', serif",
      fontSize: '1.85rem',
      fontWeight: 100,
      color: '#2b3d2b',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: '#fcfaf4',
      padding: '2rem',
      border: '2px solid #2b3d2b',

      textAlign: 'center',
 
      width: '250px',
      height: '150px',
      margin: '0 auto',
      position: 'relative',
      fontFamily: 'Lora, sans-serif',
      fontWeight: '100',
      color: '#2b3d2b',
      lineHeight: '1.25',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease, color 0.3s ease',
      ...(hovered && { transform: 'scale(1.05)', color: '#FFD700' }),
    },
  };

  return (
<ParallaxSection
      image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1728154935/background1a1_ke54dk.jpg"
        minHeight="80vh"
  overlayColor="rgba(255, 255, 255, 0.75)"
>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        direction={{ xs: 'column-reverse', md: 'row' }}
        style={styles.heroContainer}
      >
        {/* Card with text */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={styles.squareCard}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={(el) => (textRefs.current[1] = el)}
          >
          
           
          </div>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;