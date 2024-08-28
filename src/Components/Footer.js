import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = ({ onContactClick }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FCFAF4 !important',
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
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Link
          href="/"
          underline="none"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#01796F',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          underline="none"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#01796F',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          About
        </Link>
        <Link
          href="#"
          onClick={onContactClick}
          underline="none"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#01796F',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Contact
        </Link>
      </Box>

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
              maxWidth: '70px',
              maxHeight: '40px',
              margin: '0 auto',
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
            color: '#01796F',
          }}
        >
          lauren@laurenmartyntherapy.ca
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '1rem',
            color: '#01796F',
          }}
        >
         Ottawa, Ontario
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
