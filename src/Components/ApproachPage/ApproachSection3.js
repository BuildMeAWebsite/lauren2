import React from 'react';
import { Grid, Box, Typography, Button, Link } from '@mui/material';

const ApproachSection3 = () => {
  return (
    <Box sx={styles.container}>

         
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={styles.paragraph}>
            I have experience working with various concerns and clients of all ages. Whether you know exactly what you want to work on or are unsure where to start, you’re in the driver’s seat. I’m here as your passenger, ready to move forward at your pace, whether we take the long way or change directions. Counseling offers a space to explore challenges, growth, healing, and everything in between.            </Typography>
            <Button variant="outlined" href="contact" sx={styles.button}>
              Schedule an Introductory Call
            </Button>

            
         
        </Grid>
    
    </Box>
  );
};

const styles = {
  container: {
    padding: { xs: '4rem 2rem', sm: '6rem 3rem', md: '8rem 4rem' },
    color: '#2b3d2b', // Dark background color
    backgroundColor: '#FCFAF4', // Light text color
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '1100px', // Constrain the width of the content to 1200px
    width: '100%',
  },
  header: {
    fontFamily: "'Lora', sans-serif",
    fontSize: { xs: '2rem', md: '2.5rem' },
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    fontFamily: "'Georgia', serif",
    paddingLeft: '20px',
    lineHeight: '1.5',
    fontSize: '1.25rem',
    marginLeft: { xs: '0', md: '2rem' },
  },
  paragraph: {
    fontFamily: "'Georgia', serif",
    lineHeight: '1.5',
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  button: {
    fontFamily: "Lora, sans-serif",
    backgroundColor: "Transparent",

    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderColor: '#2b3d2b',
    color: '#2b3d2b',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease, border-color 0.3s ease, transform 0.3s ease', // Add transition for smooth effect
    '&:hover': {
      color: '#FFD700', // Yellow text on hover
      borderColor: '#FFD700', // Yellow border on hover
      transform: 'scale(1.05)', // Slightly enlarge on hover
    },
  },
  faq: {
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
  },
  link: {
    fontFamily: "'Georgia', serif",
    color: '#2b3d2b',
    textDecoration: 'underline',
  },
};

export default ApproachSection3;

