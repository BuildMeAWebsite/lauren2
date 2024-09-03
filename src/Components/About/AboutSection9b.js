import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection9b = () => {
  const styles = {
    container: {
      padding: { xs: '50px 20px', sm: '80px 40px', md: '100px 80px' },
      backgroundColor: '#2b3d2b', // Dark background color
      color: '#FCFAF4', // Light text color
      fontFamily: "'Georgia', serif",
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      maxWidth: '1000px', // Constrain the width of the content to 1200px
      width: '100%',
    },
    header: {
      fontFamily: "'Lora', sans-serif",
      fontSize: { xs: '2rem', md: '2.5rem' },
      marginBottom: '20px',
    },
    list: {
      fontFamily: "'Georgia', serif",
      listStyleType: 'disc',
      paddingLeft: '20px',
      lineHeight: '1.8',
      fontSize: '1.25rem',
    },
    paragraph: {
      fontFamily: "'Georgia', serif",
      lineHeight: '1.8',
      fontSize: '1.25rem',
      marginBottom: '30px',
    },
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={styles.header}>
              Key Techniques:
            </Typography>
            <ul style={styles.list}>
              <li>Person-Centred Therapy</li>
              <li>Strength-Based Therapy</li>
              <li>Psychodynamic Therapy</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={styles.paragraph}>
              I focus on creating a supportive and empathetic environment where your unique experiences, emotions, and perspectives are at the forefront of the therapeutic process. Together, we will empower you to explore your feelings, identify personal strengths, and develop self-awareness at your own pace. I act as a compassionate guide, helping you navigate your journey toward healing and personal growth.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection9b;