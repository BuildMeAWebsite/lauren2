import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element
  const imageRef = useRef(null); // Ref for the image element
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

    // Fade in the image
    if (imageRef.current) {
      imageRef.current.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
      imageRef.current.style.opacity = '1';
      imageRef.current.style.transform = 'translateY(0)';
    }
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
      padding: '1rem 1rem',
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
      maxHeight: '475px',
      border: '2px solid #8FBC8F',
      width: 'auto',
      objectFit: 'contain',
      display: 'block',
      margin: '1rem auto',
      opacity: 0, // Initial opacity set to 0 for fade-in effect
      transform: 'translateY(20px)', // Initial position to create movement effect
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: '#fcfaf4',
      padding: '1rem',
      border: '2px solid #2b3d2b',
      textAlign: 'center',
      width: '100%',
      maxWidth: '300px',
      height: '325px',
      margin: '1rem auto',
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
      minHeight="100vh"
      overlayColor="rgba(255, 255, 255, 0.5)"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        direction={{ xs: 'column-reverse', md: 'row' }}
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
            src={`${process.env.PUBLIC_URL}/Images/lauren1.webp`} 
            alt="Therapy Visual"
            style={styles.image}
            ref={imageRef} // Ref for controlling the image fade-in
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