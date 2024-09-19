import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from './ParallaxSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeSection8 = () => {
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
      minHeight: '350px',
      color: '#fcfaf4',
      fontFamily: "'Lora', sans-serif",
      backgroundColor: '#fcfaf4',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem auto',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '400px',
      margin: '0 auto', // Center the container on the screen
      '@media (max-width: 768px)': {
        minHeight: '10vh',
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
      textAlign: 'left',
      textTransform: 'lowercase',
      letterSpacing: '1px',
      textShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        fontSize: '0.65rem',
      },
    },
    title: {
      fontFamily: "'Georgia', serif",
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#2b3d2b',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      display: 'inline-flex',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        fontSize: '1.25rem',
      },
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto',
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: '#fcfaf4',
      padding: '1rem 0', // Ensure even padding around the content
      border: '2px solid brown', // Dark border
      textAlign: 'center',
      width: '300px', // Set explicit width
      height: '300px', // Set explicit height to match width for square shape
      margin: '1rem 1rem', // Center horizontally with margin
      position: 'relative',
      fontFamily: 'Georgia, serif',
      fontWeight: '100',
      color: '#2b3d2b',
      lineHeight: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease, color 0.3s ease',
      boxSizing: 'border-box',
      ...(hovered && { transform: 'scale(1.05)', color: '#FFD700' }),
      '@media (max-width: 768px)': {
        maxWidth: '90%',
        height: 'auto', // Maintain aspect ratio and responsiveness on small screens
        margin: '1rem',
      },
    },
    textHoverEffect: {
      transform: 'scale(1.05)',
      color: '#FFD700',
    },
    linkStyle: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
    },
    iconStyle: {
      fontSize: '1.5rem',
      marginLeft: '5px',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/busbackground.jpg`} minHeight='100vh'>
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
          <a
            href="/what-to-expect"
            style={styles.linkStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div style={styles.squareCard}>
              <h2 style={styles.subtitle}>start your journey</h2>
              <h1 style={styles.title}>
                What to expect on your first call
                <ArrowForwardIcon sx={styles.iconStyle} />
              </h1>
            </div>
          </a>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

export default HomeSection8;