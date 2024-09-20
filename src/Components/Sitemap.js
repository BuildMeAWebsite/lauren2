import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeSection11 from './Home/HomeSection11';

const Sitemap = () => {
  return (
   
    <>
     <Box sx={styles.container}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} sx={styles.leftColumn}>
          <Typography variant="h1" sx={styles.title}>
            <span style={styles.titlePrimary}>site</span>
            <span style={styles.titleSecondary}>map</span>
          </Typography>
          <hr style={styles.line} />
        </Grid>
        <Grid item xs={12} sm={8} sx={styles.rightColumn}>
          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>01.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>Home</Typography>
              <Link to="/" style={styles.link}>Go to home page</Link>
            </Box>
          </Box>

          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>02.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>About</Typography>
              <Link to="/about" style={styles.link}>Learn about my practice</Link>
            </Box>
          </Box>

          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>03.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>Contact</Typography>
              <Link to="/contact" style={styles.link}>Get in touch</Link>
            </Box>
          </Box>

          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>04.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>FAQ</Typography>
              <Link to="/frequently-asked-questions" style={styles.link}>Frequently Asked Questions</Link>
            </Box>
          </Box>

          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>05.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>Approaches</Typography>
              <Link to="/approaches" style={styles.link}>Therapeutic approaches</Link>
            </Box>
          </Box>

          <Box sx={styles.linkItem}>
            <Typography variant="h2" sx={styles.linkNumber}>06.</Typography>
            <Box sx={styles.linkDetails}>
              <Typography sx={styles.linkTitle}>What to Expect</Typography>
              <Link to="/what-to-expect" style={styles.link}>What to expect in therapy</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <HomeSection11/>
    </>
  );
};

const styles = {
    container: {
      padding: '10rem 5rem', 
      fontFamily: "'Lora', sans-serif",
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center', // Center text and elements
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
      textAlign: 'center', // Ensure text is centered
      '@media (max-width: 800px)': {
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
      textAlign: 'center', // Center content in the right column
      '@media (max-width: 800px)': {
        textAlign: 'center',
      },
    },
    linkItem: {
      marginBottom: '50px', 
      '@media (max-width: 800px)': {
        marginBottom: '40px',
      },
      '@media (max-width: 600px)': {
        marginBottom: '30px',
      },
    },
    linkNumber: {
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
    linkDetails: {
      textAlign: 'center', // Ensure link details are centered
      margin: '0 auto', // Center content
      '@media (max-width: 1100px)': {
        width: '70%', // Ensure responsive design
      },
    },
    linkTitle: {
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
    link: {
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
  
  export default Sitemap;

