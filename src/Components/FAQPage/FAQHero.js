import React from 'react';
import ParallaxSection from '../Home/ParallaxSection';
import FAQSection from './FAQSection';
import { Typography, Box, Grid } from '@mui/material';
import Hero from '../Home/faq1';
import HomeSection11ColorChange from '../Home/HomeSection11ColorChange';

const FAQHero = () => {
  return (
    <>
    <Hero/>
<HomeSection11ColorChange/>
    <ParallaxSection image="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154906/treebackground_tfbjel.jpg" >
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
 

       
        <FAQSection />
      </Box>
    </ParallaxSection>
    
    </>

  );
};

export default FAQHero;