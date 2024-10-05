import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Policies = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  const handleTitleMouseEnter = () => setHoveredTitle(true);
  const handleTitleMouseLeave = () => setHoveredTitle(false);

  return (
    <Box sx={styles.container}>
      {/* Centered Title */}
      <Box sx={styles.centeredTitle}>
        <Typography
          variant="h1"
          sx={{
            ...styles.title,
            color: hoveredTitle ? '#FFD700' : '#2B3D2B',
            transform: hoveredTitle ? 'scale(1.05)' : 'scale(1)',
            transition: 'color 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={handleTitleMouseEnter}
          onMouseLeave={handleTitleMouseLeave}
        >
          <span style={styles.titlePrimary}>payment &</span>
          <span style={styles.titleSecondary}>insurance</span>
        </Typography>
        <hr style={styles.line} />
      </Box>

      {/* Grid Container for Service Items */}
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={8} sx={styles.rightColumn}>
          {serviceItems.map((item, index) => (
            <Box sx={styles.serviceItem} key={index}>
              <Typography variant="h2" sx={styles.serviceNumber}>
                {item.number}
              </Typography>
              <Box sx={styles.serviceDetails}>
                <Typography variant="h3" sx={styles.serviceTitle}>
                  {item.title}
                </Typography>
                <Typography sx={styles.serviceDescription}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

const serviceItems = [
  {
    number: '01.',
    title: 'Payment Method',
    description:
      'E-transfer is the preferred payment method to be paid at the time the session is held. A credit card will also be saved to your file at the start of therapy, as an alternative method and for any outstanding fees. Receipts are sent promptly by email.',
  },
  {
    number: '02.',
    title: 'Insurance Information',
    description:
      'I do not bill insurance companies. My therapist’s license number is on the receipt for insurance purposes. Insurance plans differ in what they cover, so please contact your specific provider to verify your coverage for Registered Psychotherapist, for coverage details, and claim procedures.',
  },
  {
    number: '03.',
    title: 'Cancellation Policy',
    description:
      'I have a 24-hour cancellation policy. Appointments can be cancelled or rescheduled via email or through the booking software. Providing less than 24 hours notice will result in being charged the full session fee. This fee may be waived in emergency situations.',
  },
];

const styles = {
  container: {
    padding: '2rem 0',
    fontFamily: "'Lora', sans-serif",
    maxWidth: '1300px',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      padding: '1rem 5rem',    },
    '@media (max-width: 800px)': {
      padding: '1rem 5rem',    },
    '@media (max-width: 600px)': {
      padding: '1rem 5rem',    },
    '@media (max-width: 450px)': {
      padding: '1rem 5rem',    },
  },
  centeredTitle: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1',
    marginBottom: '1rem',
    '@media (max-width: 1100px)': {
      fontSize: '70px',
      marginBottom: '1rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '60px',
      marginBottom: '1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '40px',
      marginBottom: '1rem',
    },
  },
  titlePrimary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: '400',
    color: '#2B3D2B',
  },
  titleSecondary: {
    display: 'block',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    color: '#2B3D2B',
  },
  line: {
    borderTop: '1.25px solid #8FBC8F',
    width: '50%',
    margin: '0 auto',
    marginTop: '20px',
    '@media (max-width: 800px)': {
      width: '75%',
    },
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  rightColumn: {
    '@media (max-width: 800px)': {
      textAlign: 'center',
    },
  },
  serviceItem: {
    marginBottom: '50px',
    textAlign: 'left',

    '@media (max-width: 800px)': {
      marginBottom: '40px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  serviceNumber: {
    fontSize: '2rem',
    color: '#8FBC8F',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      fontSize: '1.4rem',
      margin: '1rem 0',
    },
    '@media (max-width: 800px)': {
      fontSize: '2rem',
      margin: '0.6rem 0',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem',
      margin: '0.5rem 0',
    },
  },
  serviceDetails: {
    marginLeft: '40px',
    textAlign: 'left',
    '@media (max-width: 1100px)': {
      marginLeft: '10px',
      width: '70%',
      margin: '0 auto',
    },
    '@media (max-width: 800px)': {
      textAlign: 'center',
    },
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontFamily: "'Lora', sans-serif",
    fontWeight: 'normal',
    marginBottom: '15px',
    '@media (max-width: 1100px)': {
      fontSize: '1.8rem',
      marginBottom: '12px',
    },
    '@media (max-width: 800px)': {
      fontSize: '1.6rem',
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
      marginBottom: '8px',
    },
  },
  serviceDescription: {
    fontSize: '1.25rem',
    fontFamily: "Quicksand, sans-serif",
    margin: '20px 0',
    lineHeight: '1.6',
    '@media (max-width: 1100px)': {
      fontSize: '1.15rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem',
    },
  },
};

export default Policies;