import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const WhatToExpectSection1 = () => {
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
              <Typography variant="h3" sx={styles.serviceTitle}>Initial Call</Typography>
              <Typography sx={styles.serviceDescription}>
                During the initial 15-minute introductory call, we will discuss your reasons for starting therapy and what kind of support you are looking for. It is an opportunity for us to ask each other questions and see if we are a good therapeutic fit.
              </Typography>
              <Link to="/contact" style={styles.serviceLink}>Schedule your first call</Link>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>02.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>First Session</Typography>
              <Typography sx={styles.serviceDescription}>
                The first session is an intake process where I will be collecting information about your background, current life situation, and goals. It is also an opportunity for you to ask questions about me and my approach. Consent, limits of confidentiality, fees, and cancellation policy will also be discussed.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>03.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Ongoing Sessions</Typography>
              <Typography sx={styles.serviceDescription}>
                Your therapy session is your time and space for yourself. You are free to choose a topic of discussion and give yourself time to process what is important for you. As a therapist, I will provide you with support and listen to you without judgment.
              </Typography>
              <Link to="/approaches" style={styles.serviceLink}>Learn more about the methods I use</Link>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>04.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Building a Relationship</Typography>
              <Typography sx={styles.serviceDescription}>
                The main predictor of success in therapy is the strength of a therapeutic relationship. As our sessions progress, I invite you to reflect on how you feel in my presence and whether a safe and trusting relationship is being developed.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>05.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Frequency of Sessions</Typography>
              <Typography sx={styles.serviceDescription}>
                Sessions typically occur on a weekly basis, although depending on your situation, the frequency can be adjusted. Therapy is an active and collaborative process where we will work together on identifying goals and areas of life you’d like to improve.
              </Typography>
              <Link to="/frequently-asked-questions" style={styles.serviceLink}>More Frequently Asked Questions</Link>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>06.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Homework and Progress</Typography>
              <Typography sx={styles.serviceDescription}>
                Occasionally, I will invite you to practice strategies in your life and complete assigned material when needed. Progress is not linear, and there might be times when you will feel less hopeful. Know that this is a part of the process, and we will work through it together.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>07.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography variant="h3" sx={styles.serviceTitle}>Transitioning Out of Therapy</Typography>
              <Typography sx={styles.serviceDescription}>
                As you gain more stability and confidence in your abilities, we can start having sessions less frequently. Some people decide to continue therapy for ongoing support, and as always, we will discuss what works best for you.
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
      width: '70%', // Make the service details take up 70% of the space
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
  serviceLink: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#8FBC8F',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
  },
};

export default WhatToExpectSection1;