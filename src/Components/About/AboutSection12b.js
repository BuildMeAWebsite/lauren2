import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection12b = () => {
  const styles = {
    container: {
      padding: { xs: '50px 20px', sm: '80px 40px', md: '100px 80px' },
      backgroundColor: '#fcfaf4', // Dark background color
      color: '#2b3d2b', // Light text color
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
      fontFamily: "Quicksand, sans-serif",
      listStyleType: 'disc',
      paddingLeft: '20px',
      lineHeight: '1.8',
      fontSize: '1.25rem',
    },
    paragraph: {
      fontFamily: "Quicksand, sans-serif",
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
              <li>Play Therapy</li>
              <li>Art Therapy</li>
              <li>Narrative Therapy</li>
              <li>Attachment-Based Therapy</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={styles.paragraph}>
            For those who find expressing themselves difficult or uncomfortable, I use an alternative approach to talk therapy,  through play, art, or storytelling. These approaches offer a unique way to process emotions, build self-awareness, and heal from past experiences. I will guide you in using these creative outlets to unlock new insights and foster personal growth, empowering you to navigate life’s challenges with renewed confidence and clarity.            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection12b;