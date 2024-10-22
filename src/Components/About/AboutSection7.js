import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const AboutSection7 = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={1} alignItems="center">
        {/* Image on top for smaller screens */}
        <Grid item xs={12} md={6} sx={{ ...styles.imageContainer, order: { xs: 1, md: 2 } }}>
          <img
            src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154935/lauren4_vo7lr2.webp"
            alt="Lauren Martyn"
            style={styles.image}
          />
          <Typography variant="caption" sx={styles.caption}>
            Lauren Martyn RP, MA
          </Typography>
        </Grid>
        {/* Text on bottom for smaller screens */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Typography variant="body1" sx={styles.smallText}>
            <em>expertise</em>
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            Currently serving as a School Counsellor at an Independent School, I offer specialized expertise in navigating school environments and addressing the unique challenges they present.
          </Typography>
         
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
  smallText: {
    fontSize: '2.25rem',
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',

    letterSpacing: '0.25rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    color: '#2b2d2b',
    fontFamily: 'Lora, sans-serif',
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: '#FFD700', // Yellow on hover
      transform: 'scale(1.05)', // Slightly enlarge on hover
    },
  },
  paragraph: {
    fontFamily: 'Quicksand, sans-serif',
    lineHeight: '1.5',
    fontSize: '20px',
    marginBottom: '30px',
  },
  button: {
    fontFamily: "'Lora', sans-serif",
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',

    fontWeight: '300',
    display: 'inline-block',
    padding: '10px 30px',
    border: '1.25px solid #8FBC8F',
    color: '#2B3D2B',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '0.88rem',
    margin: '0 auto',
    marginBottom: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
  },
  buttonHover: {
    color: '#FFD700', // Yellow text color on hover
    borderColor: '#FFD700', // Yellow border color on hover
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    maxWidth: '100%', // Make the image responsive
    height: 'auto',
    borderRadius: '8px', // Optional: Add some border radius for a softer look
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Optional: Add a subtle shadow
  },
  caption: {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '1rem',
    color: '#2b3d2b',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default AboutSection7;