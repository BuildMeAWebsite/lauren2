import React from 'react';
import Grid from '@mui/material/Grid';
import Hero from '../Components/About/AboutHero';
import GoogleFormEmbed from '../Components/GoogleForm';


const ContactForm = () => {
  return (
    <Grid container spacing={0}
    style = {{paddingTop : '1rem'}}
    >
      <Grid item xs={12} id="top">
        <GoogleFormEmbed />
      </Grid>

  
    </Grid>
  );
};

export default ContactForm;
