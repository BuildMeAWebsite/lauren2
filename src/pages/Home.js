import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/Home/Hero';
import QuoteSection from '../Components/Home/QuoteSection';
import SplittingImageText from '../Components/Home/OverlapSection';
import CounselingServices from '../Components/About/ServicesOffered';
import Home3Boxes from '../Components/Home/Home3Section';
import TextBanner from '../Components/About/TextBanner';

const Home = () => {
  return (
    <Grid container spacing={0}>
       
      
          <Grid item xs={12}>
        <Hero />

      </Grid>
    


      <Grid item xs={12}>
        <QuoteSection />
      </Grid>
  
      <Grid item xs={12}>
        <Home3Boxes />
      </Grid>
    
   
   
    
    </Grid>
  );
};

export default Home;
