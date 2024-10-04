import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Box, Grid, Typography } from '@mui/material';

const FloatingCard3 = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Match the section height
    zIndex: 1,
  };
  const outerContentStyle = {
    margin: '20px 20px',
    backgroundColor: '#fcfaf4',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the outer content fills the height of the section
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: 'transparent', // No background color inside the card
    padding: '3rem', // Adjusted padding for more space
    border: '1.5px solid #2b2d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '100%',
    maxWidth: '30rem', // Set max width for larger screens
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b2d2b', // Text color to match the border
    lineHeight: '1.5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: 'auto', // Allow height to adjust based on content
  };

  const headerTextStyle = {
    fontSize: '2rem',
    fontWeight: 400, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Lora, sans-serif',
    textTransform: 'none', // Use normal case for the text
    marginBottom: '1.5rem',
  };

  const listStyle = {
    listStyleType: 'disc',
    padding: '10px',
    margin: '1',
    textAlign: 'left',
    fontFamily: 'Quicksand, sans-serif',

  };

  const subHeadingStyle = {
    fontSize: '1.25rem',
    fontWeight: 300,
    fontFamily: 'Quicksand, sans-serif',
    color: '#2b2d2b',
    marginBottom: '1rem',
    textAlign: 'left',
    textDecoration: 'none',

  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/forestsunshine.jpg`} minHeight="80vh">
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <Typography variant="h2" sx={headerTextStyle}>
            Together we can navigate:
          </Typography>

          <div style={{ textAlign: 'left' }}>
            {/* Mental Health and Emotional Wellbeing Section */}
            <Typography variant="h3" sx={subHeadingStyle}>
              Mental Health and Emotional Wellbeing:
            </Typography>
            <ul style={listStyle}>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Perfectionism</li>
              <li>Emotional and Behavioural Challenges</li>
              <li>ADHD</li>
            </ul>

            {/* Social and Relational Concerns Section */}
            <Typography variant="h3" sx={subHeadingStyle}>
              Social and Relational Concerns:
            </Typography>
            <ul style={listStyle}>
              <li>Bullying and Social Challenges</li>
              <li>Relationship Issues</li>
              <li>Self-Esteem and Body Image</li>
            </ul>

            {/* Academic and Personal Development Section */}
            <Typography variant="h3" sx={subHeadingStyle}>
              Academic and Personal Development:
            </Typography>
            <ul style={listStyle}>
              <li>Academic Concerns and Learning Disabilities</li>
              <li>Career and Post-Secondary Decision Making</li>
              <li>Athletic Performance</li>
              <li>Personal Development</li>
            </ul>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FloatingCard3;