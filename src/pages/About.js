import React from 'react';
import Grid from '@mui/material/Grid';

import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import About2Boxes from '../Components/About/About2Section';
import Hero from '../Components/About/AboutHero';
import About2Boxes1 from '../Components/About/About2Section1';

const About = () => {
  return (
    <Grid container spacing={0} style={{ paddingTop: '5rem' }}>
       
       <Grid item xs={12} id="top">
        <Hero />
      </Grid>
      <Grid item xs={12} id="top">
        <About2Boxes1 />
      </Grid>
      <Grid item xs={12} id="top">
        <About2Boxes />
      </Grid>
    
   


    


      <Grid item xs={12}>
        <TextBanner text="Therapeutic Modalities" backgroundColor = '#fcfaf4' textColor = '#556B2F' padding = '5rem'/>
      </Grid>

      <Grid item xs={12} id="services-offered">
        <ServicesOffered />
      </Grid>

      <Grid item xs={12}>
      <TextBanner text="Frequently Asked Questions" backgroundColor = '#fcfaf4' textColor = '#556B2F' padding = '5rem'/>
      </Grid>

      <Grid item xs={12} id="faq">
        <FAQComponent questionFontSize="1.5rem" answerFontSize="1rem" />
      </Grid>
      
        
      </Grid>
   
  );
};

export default About;
