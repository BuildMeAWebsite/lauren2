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
      minHeight: '50vh',
      color: '#fcfaf4',
      fontFamily: "'Lora', sans-serif",
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '100px',
      padding: '1rem 2rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '1000px',
      '@media (max-width: 768px)': {
        minHeight: '50vh',
        margin: '0 1rem',
        flexDirection: 'column',
      },
    },
    slideIn: {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    subtitle: {
      fontFamily: "'Lora', sans-serif",
      fontSize: '0.75rem',
      color: '#2b3d2b',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '0.65rem',
      },
    },
    title: {
      fontFamily: "'Georgia', serif",
      fontSize: '2.25rem',
      fontWeight: 100,
      color: '#2b3d2b',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
    },
    image: {
      maxHeight: '400px', // Maximum height of 400px
      width: 'auto', // Adjust width to maintain aspect ratio
      objectFit: 'contain', // Maintain aspect ratio and ensure image doesn't overflow
      display: 'block',
      margin: '1rem auto', // Center the image horizontally
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: '#fcfaf4',
      padding: '1rem',
      border: '2.5px solid #2b3d2b',
      textAlign: 'center',
      width: '100%',
      maxWidth: '300px',
      height: '325px',
      margin: '2rem auto',
      position: 'relative',
      fontFamily: 'Lora, sans-serif',
      fontWeight: '100',
      color: '#2b3d2b',
      lineHeight: '1.2',
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
      image={`${process.env.PUBLIC_URL}/Images/background1a1.jpg`}
      minHeight="80vh"
      overlayColor="rgba(255, 255, 255, 0.5)"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={1}
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack the image below the card on small screens, side-by-side on large screens
        style={styles.heroContainer}
      >
          {/* Image Grid Item */}
          <Grid
          item
          xs={12}
          md={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/lauren1.jpeg`} // Replace with your actual image path
            alt="Therapy Visual"
            style={styles.image}
          />
        </Grid>
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
            <h2 style={styles.subtitle}>VIRTUAL PSYCHOTHERAPY</h2>
            <h1 style={styles.title}>
              Therapy for children, teens, <em>and</em> young adults
            </h1>
          </div>
        </Grid>

      
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;