import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/About/AboutHero';
import QuoteSection from '../Components/About/About2Section';
import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import IssuesComponent from '../Components/About/Issues';
import ApproachHero from '../Components/ApproachPage/ApproachHero';

const ApproachesPageComponent = () => {
  return (
    <Grid container spacing={0}
    style = {{paddingTop: '2.5rem ' }}>
    <Grid item xs={12}>
<ApproachHero/>
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

export default ApproachesPageComponent;
