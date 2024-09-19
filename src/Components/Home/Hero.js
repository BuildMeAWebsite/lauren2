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
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem auto',
      boxSizing: 'border-box',
      overflow: 'hidden',
      maxWidth: '900px',
      '@media (maxWidth: 768px)': {
        minHeight: '50vh', // Reduce minHeight for mobile screens
        margin: '0 1rem', // Adjust margin for better centering on smaller screens
        flexDirection: 'column', // Stack elements vertically on smaller screens
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
      '@media (maxWidth: 768px)': {
        fontSize: '0.65rem', // Slightly smaller font size on mobile
      },
    },
    title: {
      fontFamily: "'Georgia', serif",
      fontSize: '2rem',
      fontWeight: 400,
      color: '#2b3d2b',
      margin: 0,
      lineHeight: 1,
      textShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      '@media (maxWidth: 768px)': {
        fontSize: '2rem', // Reduce title size on mobile
      },
    },
    image: {
      maxWidth: '70%',
      maxHeight: '100%', // Ensure the image doesn't exceed 80% of the container's height
      objectFit: 'contain', // Maintain aspect ratio and ensure image doesn't overflow
      display: 'block',
      margin: '1rem auto', // Center the image horizontally
    },
    squareCard: {
      zIndex: 2,
      backgroundColor: '#fcfaf4',
      padding: '1.5rem', // Adjusted padding for spacing
      border: '2.5px solid brown', // Brown border for the card
      textAlign: 'center', // Center text in the card
      width: '100%',
      maxWidth: '250px', // Set max width for the square card
      height: '250px', // Set the height to match the width for a square shape
      margin: '1rem', // Add margin to ensure spacing from other elements
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
      ...(hovered && { transform: 'scale(1.05)', color: '#FFD700' }), // Hover effect for the card
    },
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1a1.jpg`} minHeight="70vh" opacity = "0.5">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2} // Add spacing between the grid items
        style={styles.heroContainer}
      >
       
        {/* Card with text */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', justifyContent: 'center' }} // Center the card
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
      
      </Grid>
    </ParallaxSection>
  );
};

export default Hero;