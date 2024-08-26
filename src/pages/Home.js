import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/Home/Hero';
import QuoteSection from '../Components/Home/QuoteSection';
import SplittingImageText from '../Components/Home/OverlapSection';
import CounselingServices from '../Components/About/ServicesOffered';

const Home = () => {
  return (
    <Grid container spacing={0}>
          <Grid item xs={12}>
        <Hero />
            
      <Grid item xs={12}>
        <QuoteSection />
      </Grid>
      </Grid>
     
      <Grid item xs={12}>
        <CounselingServices />
      </Grid>
     
      <Grid item xs={12}>
        <SplittingImageText/>
      </Grid>
   
   
    
    </Grid>
  );
};

export default Home;
