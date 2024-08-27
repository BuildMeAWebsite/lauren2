import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#01796F !important',
        backdropFilter: 'blur(10px) !important',
        padding: '20px 40px',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Libre Baskerville, serif',
          fontSize: '1rem',
          color: '#f8f8f8',
        }}
      >
        © 2024 Lauren Martyn
      </Typography>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <div
          style={{
            position: 'relative', // Resetting any possible external styles
            overflow: 'hidden',   // Prevent overflow issues
            transform: 'none !important',  // Reset any transformation
            transition: 'none !important', // Disable transitions
            animation: 'none !important',  // Disable animations
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
            alt="Pride Flag"
            style={{
              width: '90px',
              height: '60px',
              borderRadius: '5px',
              display: 'block',
              transform: 'none !important',
              transition: 'none !important',
              animation: 'none !important',
              position: 'static', // Ensure the image remains in place
            }}
          />
        </div>
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#f8f8f8',
          }}
        >
          Email: info@psychotherapy.com
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#f8f8f8',
          }}
        >
          Location: Ottawa, Ontario
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

