import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection11b = () => {
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
              <li>Emotion-Focused Therapy</li>
              <li>Compassion-Focused Therapy</li>
              <li>Trauma-Informed Therapy</li>
              <li>Attachment-Based Therapy</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={styles.paragraph}>
              These therapies are designed to help you process and heal from deep emotional pain and traumatic experiences. These therapies create a safe and compassionate space where you can explore difficult emotions and work through past traumas at your own pace. By focusing on your emotional well-being and strengthening your resilience, I will support you in rebuilding a sense of safety, connection, and inner peace, allowing you to move forward with a renewed sense of hope and empowerment.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection11b;