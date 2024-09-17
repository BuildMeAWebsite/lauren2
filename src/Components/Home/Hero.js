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
      minHeight: '10vh', // Default minHeight for larger screens
      color: '#fcfaf4',
      fontFamily: "'Lora', sans-serif",
      backgroundColor: '#fcfaf4',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem auto',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '500px',
      '@media (max-width: 768px)': {
        minHeight: '50vh', // Reduce minHeight for mobile screens
        margin: '0 1rem', // Adjust margin for better centering on smaller screens
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
        fontSize: '0.65rem', // Slightly smaller font size on mobile
      },
    },
    title: {
      fontFamily: "'Georgia', serif",
      fontSize: '2.5rem',
      fontWeight: 400,
      color: '#2b3d2b',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '2rem', // Reduce title size on mobile
      },
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto', // Center the image horizontally
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: 'transparent',
      padding: '2rem', // Adjusted padding for spacing
      border: '2px solid brown', // Brown border for the card
      textAlign: 'center', // Center text in the card
      width: '100%',
      maxWidth: '20rem', // Set max width for the square card
      height: '20rem', // Set the height to match the width for a square shape
      margin: '1rem 1rem', // Center horizontally with margin
      position: 'relative',
      fontFamily: 'Georgia, serif',
      fontWeight: '100',
      color: '#2b3d2b',
      lineHeight: '1.2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease, color 0.3s ease',
      ...(hovered && { transform: 'scale(1.05)', color: '#FFD700' }), // Hover effect for the card
    },
    textHoverEffect: {
      transform: 'scale(1.05)',
      color: '#FFD700',
    },
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1a1.jpg`} minHeight='70vh'>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack image below text on small screens, side by side on large screens
        style={styles.heroContainer}
        spacing={0}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={styles.slideIn}
          ref={(el) => (textRefs.current[1] = el)}
        >
          <div
            style={styles.squareCard} // Changed the classname to 'squareCard' for the square layout
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h2 style={styles.subtitle}>VIRTUAL PSYCHOTHERAPY</h2>
            <h1 style={styles.title}>
              Therapy for children, teens, <em> and </em> young adults
            </h1>
          </div>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;