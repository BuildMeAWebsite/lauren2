import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/Home/Hero';

import Home3Boxes from '../Components/Home/Home3Section';
import HomeSection2 from '../Components/Home/HomeSection2';

const Home = () => {
  return (
    <Grid container spacing={0}
    style = {{paddingTop : '4rem'}}
    >
       
      
          <Grid item xs={12}>
        <Hero />

      </Grid>
    


      <Grid item xs={12}>
        <HomeSection2 />
      </Grid>
  
      <Grid item xs={12}>
        <Home3Boxes />
      </Grid>
    
   
   
    
    </Grid>
  );
};

export default Home;
