import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/About/AboutHero';
import QuoteSection from '../Components/About/AboutSectionQuote';
import TherapeuticModalities from '../Components/About/Modalities';
import ServicesOffered from '../Components/About/ServicesOffered';
import TextBanner from '../Components/About/TextBanner';
import FAQComponent from '../Components/About/FAQSection';
import IssuesComponent from '../Components/About/Issues';

const ApproachesPageComponent = () => {
  return (
    <Grid container spacing={0}
    style = {{padding: '5rem 0' }}>
    
            <Grid item xs={12}>
        <TextBanner text="Therapeutic Modalities" backgroundColor= '#fcfaf4' textColor= '#01796F' padding = '4rem' />
      </Grid>
          <Grid item xs={12} id="services-offered">
        <ServicesOffered />
      </Grid>
      
  

      <Grid item xs={12}>
        <QuoteSection />
      </Grid>

      <Grid item xs={12} id="issues">
        <IssuesComponent />
      </Grid>

  

    

      <Grid item xs={12}>
        <TextBanner text="Frequently Asked Questions" />
      </Grid>
      <Grid item xs={12} id="faq">
        <FAQComponent questionFontSize="1.5rem" answerFontSize="1rem" />
      </Grid>

      <Grid item xs={12} id="top">
        <Hero />
      </Grid>
    </Grid>
  );
};

export default ApproachesPageComponent;
