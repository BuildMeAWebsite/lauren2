import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const HomeSection7 = () => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseEnter = () => {
    setButtonHover(true);
  };

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  return (
    <Box sx={styles.container}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={styles.header}>
            Book a session:
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            To get started, click the button below to schedule a free, 15-minute
            introductory call with me. We’ll discuss your availability and
            preferences, and I’ll work to find the best approach to meet your
            needs.
          </Typography>
          <a
            href="contact"
            style={{
              ...styles.button,
              ...(buttonHover ? styles.buttonHover : {}),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            schedule your introductory call
          </a>
        </Grid>
        <Grid item xs={12} md={6} sx={styles.imageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/lauren2.webp`}
            alt="Lauren Martyn"
            style={styles.image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: { xs: '4rem 2rem', sm: '6rem 3rem', md: '8rem 4rem' },
    backgroundColor: '#fcfaf4',
    color: '#2B3D2B',
    fontFamily: "Lora, sans-serif",
  },
  header: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontFamily: "Lora, sans-serif",
    marginBottom: '1rem',
    fontWeight: 'normal',
  },
  paragraph: {
    fontFamily: "Georgia, serif",
    lineHeight: '1.75',
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    border: '1px solid #2B3D2B',
    color: '#2B3D2B',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
  },
  buttonHover: {
    color: '#FFD700',
    borderColor: '#FFD700',
    transform: 'scale(1.05)',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default HomeSection7;