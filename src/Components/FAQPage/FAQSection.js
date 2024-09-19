import React, { useState } from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  const handleTitleMouseEnter = () => setHoveredTitle(true);
  const handleTitleMouseLeave = () => setHoveredTitle(false);

  return (
   
    <Box sx={styles.container}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline style={styles.videoBackground}>
        <source src={`${process.env.PUBLIC_URL}/Images/laurenfaq.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Better Readability */}
      <Box sx={styles.overlay}></Box>

      {/* Centered Title */}
      <Box sx={styles.centeredTitle}>
        <Typography
          variant="h1"
          sx={{
            ...styles.title,
            color: hoveredTitle ? '#FFD700' : '#2B3D2B',
            textShadow: '0 3px 5px rgba(0, 0, 0, 0.52)',
            transition: 'color 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={handleTitleMouseEnter}
          onMouseLeave={handleTitleMouseLeave}
        >
          <span style={styles.titlePrimary}>Frequently Asked</span>
          <span style={styles.titleSecondary}>Questions</span>
        </Typography>
        <hr style={styles.line} />
      </Box>

      {/* Grid Container for FAQ Items */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} sx={styles.rightColumn}>
          {faqs.map((faqSection, index) => (
            <Box key={index} sx={styles.faqSection}>
              {faqSection.map((faqItem, idx) => (
                <Accordion key={idx} sx={styles.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionSummary}>
                    <Typography variant="h5" sx={styles.question}>
                      {faqItem.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={styles.accordionDetails}>
                    <Typography sx={styles.answer} dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

// Sample FAQ Data
const faqs = [
  // ... (your existing FAQ data)
];

const styles = {
  container: {
    position: 'relative',
    padding: '60px 80px',
    fontFamily: "'Lora', sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    zIndex: 2, // Ensures the content is above the video
    paddingTop: '150px', // Adjusts to ensure content starts below the fixed header
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
  videoBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Places the video behind all other content, including the header
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay for improved readability
    zIndex: 1, // Ensures the overlay is above the video but below the content
  },
  centeredTitle: {
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative', // Keeps the title in front of the video
    zIndex: 2,
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
    color: '#FCFAF4',
  },
  titleSecondary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    color: '#FCFAF4',
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
  faqSection: {
    marginBottom: '50px',
  },
  accordion: {
    marginBottom: '15px',
    border: '1px solid #dcdcdc', // Subtle border around accordion
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Add slight shadow for depth
  },
  accordionSummary: {
    backgroundColor: '#fcfaf4',
    '&:hover': {
      backgroundColor: '#f0f0f0', // Change color on hover for a subtle effect
    },
  },
  question: {
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'bold',
  },
  accordionDetails: {
    backgroundColor: '#fcfaf4',
  },
  answer: {
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
  },
};

export default FAQSection;