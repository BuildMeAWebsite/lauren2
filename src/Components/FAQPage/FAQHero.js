import React from 'react';
import ParallaxSection from '../Home/ParallaxSection';
import FAQSection from './FAQSection';
import { Typography, Box } from '@mui/material';

const FAQHero = () => {
  return (
    <ParallaxSection minHeight="80vh">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Ensure the video stays in the background
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/Images/yellowflower.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '1rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Title */}
 

        {/* FAQ Section */}
        <FAQSection />
      </Box>
    </ParallaxSection>
  );
};

export default FAQHero;