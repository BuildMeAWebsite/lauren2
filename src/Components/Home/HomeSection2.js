import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const HomeSection2 = () => {
  const textRefs = useRef([]);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    textRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.transform = 'translateY(0)';
        ref.style.opacity = '1';
      }
    });
  }, []);

  const handleImageMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <Grid container spacing={0} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCFAF4', // Cream background
          minHeight: '70vh',
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
            src={`${process.env.PUBLIC_URL}/Images/tree.jpg`} // Replace with your actual image path
            alt="Contact Us"
            style={{
              maxWidth: '70%',
              height: 'auto',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Added box shadow
              opacity: 1,
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
              opacity: isImageHovered ? 0 : 0.25,
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
          padding: '3rem 5rem', // Adjusted padding for square-like appearance
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fcfaf4', // Soft green background
          minHeight: '400px',
        }}
      >
        <Typography
          variant="h6"
          align="center"
          style={{
            fontFamily: "PT Sans, sans-serif",
            marginBottom: '20px',
            color: '#546A2F',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
            opacity: 1, // Fully visible on load
            transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition for color and transform
          }}
          ref={(el) => (textRefs.current[1] = el)}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFD700'; // Yellow on hover
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#FCFAF4'; // Revert to cream
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Hello and <em> welcome </em>,
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{
            fontFamily: "PT Sans, sans-serif",
            marginBottom: '20px',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
            color: '#546A2F', // 
            opacity: 1, // Fully visible on load
            transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition for color and transform
          }}
          ref={(el) => (textRefs.current[2] = el)}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFD700'; // Yellow on hover
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#FCFAF4'; // Revert to cream
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          If you are reading this, you have already taken the biggest step in your therapeutic journey. My name is Lauren Martyn, and I am a registered psychotherapist dedicated to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counseling to those residing in Ontario, Canada. Explore my website to learn more about me, and if you feel we’re a good fit, let's continue this therapeutic journey together.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeSection2;