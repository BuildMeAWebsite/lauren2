import React from 'react';
import Grid from '@mui/material/Grid';

import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import IssuesComponent from '../Components/About/Issues';
import FAQHero from '../Components/FAQPage/FAQHero';
import Policies from '../Components/Contact/Policies';

const FAQPage = () => {
  return (
    <Grid container spacing={0}
    style = {{
        paddingTop: '5rem',
    }}
    >
        <Grid item xs={12}>
        <FAQHero/>
      </Grid>
   

  
          <Grid item xs={12} id="faq">
        <FAQComponent questionFontSize="1.5rem" answerFontSize="1rem" />
      </Grid>
    
      <Grid item xs={12}>
        <Policies/>
      </Grid>
    


      <Grid item xs={12}>
      <TextBanner text="Therapeutic Modalities" backgroundColor = '#fcfaf4' textColor = '#556B2F' padding = '5rem'/>
      </Grid>

      <Grid item xs={12} id="services-offered">
        <ServicesOffered />
      </Grid>


    
    </Grid>
  );
};

export default FAQPage;
