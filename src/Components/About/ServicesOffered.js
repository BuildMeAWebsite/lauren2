import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CounselingServices = () => {
  const services = [
    {
      title: 'Individual Counseling',
      description: "It's like a physical trainer, but for your soul.",
      backgroundColor: '#01796F', // Main color
    },
    {
      title: 'Anxiety',
      description: 'Learn to live in the moment instead of dwelling on the past or worrying about the future.',
      backgroundColor: '#339991', // Lighter shade
    },
    {
      title: 'Depression',
      description: 'Regain your energy, your happiness, and your life.',
      backgroundColor: '#66B3A4', // Lightest shade
    },
  ];

  return (
    <Grid container spacing={0}>
      {services.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          key={index}
          style={{
            backgroundColor: service.backgroundColor,
            padding: '50px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{
              fontFamily: 'Libre Baskerville, serif',
              marginBottom: '20px',
              color: '#ffffff', // Text color white for contrast
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{
              fontFamily: 'Libre Baskerville, serif',
              marginBottom: '40px',
              fontSize: '1.2rem',
              color: '#ffffff', // Text color white for contrast
            }}
          >
            {service.description}
          </Typography>
          <Button
            href="#"
            style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: '1rem',
              color: '#ffffff', // Text color white for contrast
              textTransform: 'none',
              borderBottom: '2px solid #ffffff', // White bottom border
              borderRadius: '0px',
            }}
          >
            Read More
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CounselingServices;
