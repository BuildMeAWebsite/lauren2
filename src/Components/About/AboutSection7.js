import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection7 = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={2} alignItems="center">
        {/* Text on top for smaller screens */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
          <Typography variant="body1" sx={styles.smallText}>
            Expertise
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            Currently serving as a School Counsellor at an Independent School, I offer specialized expertise in navigating school environments and addressing the unique challenges they present.
          </Typography>
        </Grid>
        {/* Image on bottom for smaller screens */}
        <Grid item xs={12} md={6} sx={{ ...styles.imageContainer, order: { xs: 2, md: 2 } }}>
          <img
            src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154935/lauren4_vo7lr2.webp"
            alt="Lauren Martyn"
            style={styles.image}
          />
          <Typography variant="caption" sx={styles.caption}>
            Lauren Martyn RP, MA
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
    fontSize: '24px',
    fontStyle: 'italic',
    textTransform: 'italic',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.01)',
    letterSpacing: '0.05em',
    marginBottom: '10px',
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
    fontSize: '1.25rem',
    marginBottom: '30px',
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
    fontFamily: 'Lora, sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
    color: '#2b3d2b',
    textAlign: 'center',
    marginTop: '1rem',
  },
};

export default AboutSection7;