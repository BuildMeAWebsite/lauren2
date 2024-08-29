import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About2Boxes1 = () => {
  const textRefs = useRef([]);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const leftText = `My belief is that clients are the experts of their own experiences. Together, we work as a team to ensure they feel heard, understood, and valued. Therapy is our dress rehearsal for life—where we process experiences, learn new skills, and apply new strategies to the life they want outside our sessions.
  I see working with children, youth, and young adults as the future leaders of our world. Their potential is boundless, and with the right support, they can flourish. I resonate with their playfulness, creative outlook, open-mindedness, and adaptability. I am amazed by people’s ability to build resilience and to be able to withstand and adapt to unpredictable forces of life. There is space for both laughs and lighthearted communication as well as tears and relief in sharing heavy feelings in our work together.`;

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
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: '#8FBC8F', // Soft green background
          padding: '2rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '600px',
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          ref={(el) => (textRefs.current[0] = el)}
          variant="h6"
          align="center"
          style={{
            fontFamily: "PT Sans, sans-serif",
            color: '#FCFAF4', // Cream text
            transform: 'translateY(100%)',
            opacity: 0,
            fontSize: '1rem', // Set font size to 1rem
            transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
            cursor: 'pointer', // Show hand cursor on hover
          }}
          data-original-color="#FCFAF4" // Set the original color for reverting
          onMouseEnter={handleTextMouseEnter}
          onMouseLeave={handleTextMouseLeave}
        >
          {leftText}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: '#FCFAF4', // Cream background
          padding: '0rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/butterfly.jpg`} // Replace with your actual image path
            alt="Butterfly"
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(100%)',
              opacity: 0,
              transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
            }}
            ref={(el) => (textRefs.current[1] = el)}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#fcfaf4',
              opacity: isImageHovered ? 0 : 0.25, // Adjust opacity based on hover state
              transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
            }}
          ></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default About2Boxes1;