import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const AboutSection10b = () => {
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
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }} style={styles.leftColumn}>
            <Typography variant="body1" sx={styles.paragraph}>
              Cognitive and behavioral approaches are centered around helping you identify and change unhelpful thought patterns and behaviors. Through these techniques, we will work together to challenge negative beliefs, develop healthier coping strategies, and promote positive behavior change. My goal is to support you in gaining practical tools that you can use to navigate life's challenges, empowering you to make meaningful progress toward your goals and enhance your overall well-being.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }} style={styles.rightColumn}>
            <Typography variant="h2" sx={styles.header}>
              Key Techniques:
            </Typography>
            <ul style={styles.list}>
              <li>Cognitive Behavioural Therapy</li>
              <li>Dialectical Behavioural Therapy</li>
              <li>Solutions-Focused Therapy</li>
              <li>Motivational Interviewing</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection10b;