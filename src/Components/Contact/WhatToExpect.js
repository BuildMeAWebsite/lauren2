import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const WhatToExpectComponent = () => {
  return (
    <Grid container spacing={2}>
      {/* Left Box with the Paragraph */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: '5rem 5rem', // Increased padding for more space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '600px',
          backgroundColor: '#01796F',
        }}
      >
        <Typography
          variant="h5"
          align="left"
          style={{
            fontFamily: 'Libre Baskerville, serif',
            color: '#f8f8f8',
          }}
        >
          I have experience working with a variety of concerns and types of clients across the lifespan. You may know exactly what you want to work on or not be sure where to start. You are in the driver seat, and I am your passenger, whenever you are ready we can begin to move forward. We can take the long way, go slow, or change directions towards your destination of a life worth living. Counselling provides a space where we can explore challenges, growth, healing, and everything in between.
        </Typography>
      </Grid>

      {/* Right Box with "I can help you with..." */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '600px',
          backgroundColor: '#339991',
        }}
      >
        <Typography
          variant="h5"
          align="left"
          style={{
            fontFamily: 'Libre Baskerville, serif',
            color: '#ffffff',
            marginBottom: '20px',
          }}
        >
          I can assist you or your child who are seeking support with:
        </Typography>
        <ul style={{ marginTop: '20px', color: '#ffffff' }}>
          <li style={{ marginBottom: '10px' }}>Anxiety</li>
          <li style={{ marginBottom: '10px' }}>Depression</li>
          <li style={{ marginBottom: '10px' }}>Stress</li>
          <li style={{ marginBottom: '10px' }}>Perfectionism</li>
          <li style={{ marginBottom: '10px' }}>Emotional and Behavioural Challenges</li>
          <li style={{ marginBottom: '10px' }}>Attention Deficit Hyperactivity Disorder</li>
          <li style={{ marginBottom: '10px' }}>Academic Concerns and Learning Disabilities</li>
          <li style={{ marginBottom: '10px' }}>Bullying and Social Challenges</li>
          <li style={{ marginBottom: '10px' }}>Relationship Issues</li>
          <li style={{ marginBottom: '10px' }}>Self-Esteem and Body Image</li>
          <li style={{ marginBottom: '10px' }}>Career and Post-Secondary Guidance</li>
          <li style={{ marginBottom: '10px' }}>Life Coaching</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default WhatToExpectComponent;
