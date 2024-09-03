import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeSection9 = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); // Use state to track which link is hovered

  const handleTitleMouseEnter = () => {
    setHoveredTitle(true);
  };

  const handleTitleMouseLeave = () => {
    setHoveredTitle(false);
  };

  const handleLinkMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <Box sx={styles.container}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} sx={styles.leftColumn}>
          <Typography variant="h1" sx={styles.title}>
            <span
              style={{
                ...styles.titlePrimary,
                color: hoveredTitle ? '#FFD700' : '#2B3D2B',
                transform: hoveredTitle ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={handleTitleMouseEnter}
              onMouseLeave={handleTitleMouseLeave}
            >
              my
            </span>
            <span
              style={{
                ...styles.titleSecondary,
                color: hoveredTitle ? '#FFD700' : '#2B3D2B',
                transform: hoveredTitle ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={handleTitleMouseEnter}
              onMouseLeave={handleTitleMouseLeave}
            >
              practice
            </span>
          </Typography>
          <hr style={styles.line} />
        </Grid>
        <Grid item xs={12} sm={8} sx={styles.rightColumn}>
          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>01.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography sx={styles.serviceDescription}>
                Therapy is our dress rehearsal for life—where we process experiences, learn new skills, and apply new strategies to the life you want outside our sessions. When you're ready, we can set up a 15-minute call to discuss your goals, concerns, and suitability for therapy.
              </Typography>
              <Link
                to="/contact"
                style={{
                  ...styles.serviceLink,
                  color: hoveredLink === 1 ? '#FFD700' : '#8FBC8F',
                  transform: hoveredLink === 1 ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => handleLinkMouseEnter(1)}
                onMouseLeave={handleLinkMouseLeave}
              >
                Schedule your first call
              </Link>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>02.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography sx={styles.serviceDescription}>
                My therapeutic approach is rooted in compassionate, non-blaming empathy. I believe the most important part of the therapeutic process is building a safe, trusting, collaborative, and genuine bond. From there, we can deepen the understanding of your lived experience and emotions.
              </Typography>
              <Link
                to="/approaches"
                style={{
                  ...styles.serviceLink,
                  color: hoveredLink === 2 ? '#FFD700' : '#8FBC8F',
                  transform: hoveredLink === 2 ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => handleLinkMouseEnter(2)}
                onMouseLeave={handleLinkMouseLeave}
              >
                Learn more about the methods I use
              </Link>
            </Box>
          </Box>

          <Box sx={styles.serviceItem}>
            <Typography variant="h2" sx={styles.serviceNumber}>03.</Typography>
            <Box sx={styles.serviceDetails}>
              <Typography sx={styles.serviceDescription}>
                I see working with children, youth, and young adults as the future leaders of our world. Their potential is boundless, and with the right support, they can flourish. I resonate with their playfulness, creative outlook, open-mindedness, and adaptability.
              </Typography>
              <Link
                to="/frequently-asked-questions"
                style={{
                  ...styles.serviceLink,
                  color: hoveredLink === 3 ? '#FFD700' : '#8FBC8F',
                  transform: hoveredLink === 3 ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => handleLinkMouseEnter(3)}
                onMouseLeave={handleLinkMouseLeave}
              >
                More Frequently Asked Questions
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    padding: '10rem 5rem', 
    fontFamily: "'Lora', sans-serif",
    maxWidth: '1200px',
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
    fontSize: '3rem',
    lineHeight: '1.1',
    fontFamily: "'Lora', sans-serif",
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
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  },
  titleSecondary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    color: '#2B3D2B',
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
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
    fontFamily: "'Lora', sans-serif",
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
    fontFamily: "'Lora', sans-serif",
    fontWeight: '400',
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
  serviceDescription: {
    fontSize: '1.5rem',
    fontFamily: "Georgia, sans-serif",
    margin: '30px 0',
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
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
  },
};

export default HomeSection9;