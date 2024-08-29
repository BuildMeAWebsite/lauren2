import React from 'react';
import Grid from '@mui/material/Grid';
import Policies from '../Components/Contact/Policies';
import GoogleFormEmbed from '../Components/GoogleForm';
import WhatToExpect from '../Components/Contact/WhatToExpect';
import Hero from '../Components/Contact/ContactHero';

const ContactForm = () => {
  return (
    <Grid container spacing={0} style={{ paddingTop: '5rem' }}>
        <Grid item xs={12} >
        <Hero />
      </Grid>
          <Grid item xs={12} >
        <GoogleFormEmbed />
      </Grid>
      <Grid item xs={12} >
        <Policies />
      </Grid>
      <Grid item xs={12}  >
        <WhatToExpect />
      </Grid>
    
    </Grid>
  );
};

export default ContactForm;