import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection12b = () => {
  const styles = {
    container: {
      padding: { xs: '50px 20px', sm: '80px 40px', md: '100px 80px' },
      color: '#2b3d2b', // Dark background color
      backgroundColor: '#FCFAF4', // Light text color
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
              <li>Play Therapy</li>
              <li>Art Therapy</li>
              <li>Narrative Therapy</li>
              <li>Attachment-Based Therapy</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={styles.paragraph}>
              We will explore your thoughts and feelings through non-verbal and imaginative forms of expression. Whether through play, art, or storytelling, these therapies offer a unique way to process emotions, build self-awareness, and heal from past experiences. I will guide you in using these creative outlets to unlock new insights and foster personal growth, empowering you to navigate life’s challenges with renewed confidence and clarity.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection12b;