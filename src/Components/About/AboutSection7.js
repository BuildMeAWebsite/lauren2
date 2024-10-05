import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const AboutSection7 = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={4} alignItems="center">
        {/* Image on top for smaller screens */}
        <Grid item xs={12} md={6} sx={{ ...styles.imageContainer, order: { xs: 1, md: 2 } }}>
        <img
  src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154935/lauren4_vo7lr2.webp"
  alt="Lauren Martyn"
  style={styles.image}
/>
        </Grid>
        {/* Text on bottom for smaller screens */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Typography variant="body1" sx={styles.paragraph}>
            I have experience working with various concerns and clients of all ages. Whether you know exactly what you want to work on or are unsure where to start, you’re in the driver’s seat. I’m here as your passenger, ready to move forward at your pace, whether we take the long way or change directions. Counseling offers a space to explore challenges, growth, healing, and everything in between.
          </Typography>
          <Button variant="outlined" href="contact" sx={styles.button}>
            Schedule an Introductory Call
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    padding: { xs: '4rem 2rem', sm: '6rem 3rem', md: '8rem 4rem' },
    color: '#2b3d2b', // Text color
    backgroundColor: '#FCFAF4', // Background color
    display: 'flex',
    justifyContent: 'center',
  },
  paragraph: {
    fontFamily: "Quicksand, sans-serif",
    lineHeight: '1.5',
    fontSize: '20px',
    marginBottom: '30px',
  },
  button: {
    fontFamily: "Quicksand, sans-serif",
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderColor: '#2b3d2b',
    color: '#2b3d2b',
    textTransform: 'uppercase',
    fontSize: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: '#FFD700', // Yellow text on hover
      borderColor: '#FFD700', // Yellow border on hover
      transform: 'scale(1.05)', // Slightly enlarge on hover
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%', // Make the image responsive
    height: 'auto',
    borderRadius: '8px', // Optional: Add some border radius for a softer look
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Optional: Add a subtle shadow
  },
};

export default AboutSection7;