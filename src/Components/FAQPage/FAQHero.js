import React from 'react';
import ParallaxSection from '../Home/ParallaxSection';
import FAQSection from './FAQSection';
import { Typography, Box } from '@mui/material';

const FAQHero = () => {
  return (
       <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/rocksunflower.jpg`}>

      {/* Overlay and Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          paddingBottom: '1rem',
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