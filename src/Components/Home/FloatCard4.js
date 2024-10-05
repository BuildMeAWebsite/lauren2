import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Box, Typography } from '@mui/material';

const FloatingCard4 = () => {
  const overlayStyle = {
    position: 'absolute',
    padding: '1rem 2rem',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Match the section height
    zIndex: 1,
  };

  const outerContentStyle = {
    margin: '10px 20px',
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
    fontSize: '1.5rem',
    fontWeight: 400, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Lora, sans-serif',
    textTransform: 'none', // Use normal case for the text
    marginBottom: '2rem',
  };

  const paragraphStyle = {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.6',
    textAlign: 'center',
  
  };

  return (
<ParallaxSection image="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154937/lightbackground_uxs2hg.jpg" minHeight="50vh" >
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <Typography variant="h2" sx={headerTextStyle}>
            Now accepting clients for virtual therapy.
          </Typography>
          <Typography sx={paragraphStyle}>
            Fill out the form below to schedule your 15-minute introductory call. I can also be reached at{' '}
            <a href="mailto:info@laurenmartyntherapy.ca" style={{ color: '#2b2d2b', textDecoration: 'underline' }}>
              info@laurenmartyntherapy.ca
            </a>.
          </Typography>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FloatingCard4;