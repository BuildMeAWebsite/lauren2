import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const AboutSection13 = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} sx={styles.leftColumn}>
          <Typography variant="h1" sx={styles.title}>
            <span style={styles.titlePrimary}>what</span>
            <span style={styles.titleSecondary}>to expect</span>
          </Typography>
          <hr style={styles.line} />
        </Grid>
        <Grid item xs={12} sm={8} sx={styles.rightColumn}>
          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>01.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Introduction and Assessment</Typography>
              <Typography sx={styles.serviceDescription}>
                During the initial session, we will discuss your concerns, goals, and expectations. This is a crucial step to understand your needs and create a tailored approach to address them.
              </Typography>
              <Typography sx={styles.serviceDescription}>
                In our 15-minute introductory call, we’ll explore your reasons for starting therapy and determine if we're a good fit. The first session will gather information about your background, life situation, and goals. We'll also discuss consent, confidentiality, fees, and cancellation policies.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>02.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Personalized Approach</Typography>
              <Typography sx={styles.serviceDescription}>
                Based on the assessment, we will develop a personalized approach to your situation. This may involve different strategies and techniques aimed at achieving your desired outcomes.
              </Typography>
              <Typography sx={styles.serviceDescription}>
                Your therapy session is your space to discuss what matters most to you. I’ll support and listen without judgment, sometimes summarizing our progress or checking in on how you felt last time. Together, we'll identify goals and areas to improve. Therapy is a collaborative process, and I may suggest strategies or assignments to help you build new skills between sessions.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>03.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Ongoing Support and Feedback</Typography>
              <Typography sx={styles.serviceDescription}>
                As we progress, regular sessions will be held to monitor your progress, make adjustments as needed, and ensure you feel supported throughout the process.
              </Typography>
              <Typography sx={styles.serviceDescription}>
                As you gain self-awareness and practical tools, you may feel relief and confidence, though progress can sometimes be uneven. The strength of our relationship is key to success, so reflect on how safe and supported you feel. Sessions are usually weekly, but we can adjust the frequency as you progress. Some continue therapy for ongoing support, which we can discuss based on your needs.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    padding: '60px 80px',
    fontFamily: "'Lora', sans-serif",
    maxWidth: '1300px',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      padding: '50px 40px',
    },
    '@media (max-width: 800px)': {
      padding: '40px 30px',
    },
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
    '@media (max-width: 450px)': {
      padding: '20px 15px',
    },
  },
  leftColumn: {
    textAlign: 'right',
    '@media (max-width: 800px)': {
      textAlign: 'center',
      marginBottom: '40px',
    },
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.2',
    marginBottom: '20px',
    '@media (max-width: 1100px)': {
      fontSize: '3rem',
      marginBottom: '15px',
    },
    '@media (max-width: 800px)': {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem',
      marginBottom: '10px',
    },
  },
  titlePrimary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    color: '#2B3D2B',
  },
  titleSecondary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    color: '#2B3D2B',
  },
  line: {
    borderTop: '1.25px solid #8FBC8F',
    width: '50%',
    margin: '0 auto',
    marginTop: '20px',
    '@media (max-width: 800px)': {
      width: '75%',
    },
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  rightColumn: {
    '@media (max-width: 800px)': {
      textAlign: 'center',
    },
  },
  serviceItem: {
    marginBottom: '50px',
    '@media (max-width: 800px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  serviceNumber: {
    fontSize: '1.5rem',
    color: '#8FBC8F',
    margin: '1rem 0',
    '@media (max-width: 1100px)': {
      fontSize: '1.4rem',
      margin: '0.8rem 0',
    },
    '@media (max-width: 800px)': {
      fontSize: '1.3rem',
      margin: '0.6rem 0',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      margin: '0.5rem 0',
    },
  },
  serviceDetails: {
    marginLeft: '30px',
    textAlign: 'left',
    '@media (max-width: 1100px)': {
      marginLeft: '0',
      width: '70%',
      margin: '0 auto',
    },
    '@media (max-width: 800px)': {
      textAlign: 'center',
    },
  },
  serviceTitle: {
    fontSize: '2rem',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    marginBottom: '15px',
    '@media (max-width: 1100px)': {
      fontSize: '1.8rem',
      marginBottom: '12px',
    },
    '@media (max-width: 800px)': {
      fontSize: '1.6rem',
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
      marginBottom: '8px',
    },
  },
  serviceDescription: {
    fontSize: '1.25rem',
    fontFamily: "Georgia, sans-serif",
    margin: '20px 0',
    lineHeight: '1.6',
    '@media (max-width: 1100px)': {
      fontSize: '1.15rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem',
    },
  },
};

export default AboutSection13;