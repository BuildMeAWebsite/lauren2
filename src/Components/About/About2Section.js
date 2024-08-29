import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About2Boxes1 = () => {
  const textRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const leftText = `I have experience working with a variety of concerns and types of clients across the lifespan. You may know exactly what you want to work on or not be sure where to start. You are in the driver seat, and I am your passenger. Whenever you are ready, we can begin to move forward. We can take the long way, go slow, or change directions towards your destination of a life worth living. Counseling provides a space where we can explore challenges, growth, healing, and everything in between.`;

  useEffect(() => {
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transition = `transform 1s ease-in-out ${index * 0.1}s, opacity 1s ease-in-out ${index * 0.1}s`;
        ref.style.transform = 'translateY(0)';
        ref.style.opacity = '1';
      }
    });
  }, []);

  const handleTextMouseEnter = (e) => {
    e.currentTarget.style.color = '#FFD700'; // Yellow on hover
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the text
    e.currentTarget.style.cursor = 'pointer'; // Show hand cursor on hover
  };

  const handleTextMouseLeave = (e) => {
    e.currentTarget.style.color = e.currentTarget.dataset.originalColor; // Revert to original color
    e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
  };

  const handleImageMouseEnter = () => {
    setIsHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid
      container
      spacing={0}
      direction={{ xs: 'column-reverse', md: 'row' }} // Adjust direction based on screen size
    >
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: '#FCFAF4', // Cream background
          padding: '2rem 5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '600px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/forestsunshine.jpg`}
            alt="Forest Sunshine"
            style={{
              maxWidth: '70%',
              height: 'auto',
              transform: 'translateY(100%)',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              opacity: 0,
              transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
            }}
            ref={(el) => (textRefs.current[0] = el)}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#fcfaf4',
              opacity: isHovered ? 0 : 0.25,
              transition: 'opacity 0.3s ease-in-out',
            }}
          ></div>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: '#8FBC8F', // Soft green background
          padding: '3rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px',
        }}
      >
        <Typography
          ref={(el) => (textRefs.current[1] = el)}
          variant="h6"
          align="center"
          style={{
            fontFamily: "PT Sans, sans-serif",
            color: '#FCFAF4', // Cream text
            transform: 'translateY(100%)',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            opacity: 0,
            fontSize: '1rem',
            transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
            cursor: 'pointer',
          }}
          data-original-color="#FCFAF4"
          onMouseEnter={handleTextMouseEnter}
          onMouseLeave={handleTextMouseLeave}
        >
          {leftText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About2Boxes1;