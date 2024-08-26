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
        borderTop: '1px solid rgba(0, 0, 0, 0.1)', // Use a more transparent border if needed
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
        <img
          src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
          alt="Pride Flag"
          style={{ width: '90px', height: '60px', borderRadius: '5px' }}
        />
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

