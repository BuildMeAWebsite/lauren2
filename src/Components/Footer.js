import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';

const Footer = ({ onContactClick }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FCFAF4 !important',
        backdropFilter: 'blur(10px) !important',
        padding: '2rem 4rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Grid
        container
        
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, // Vertical stacking on small screens, row on larger screens
        }}
      >
        <Grid
          item
          spacing = {0}
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Vertical stack on small screens
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              fontFamily: 'PT Sans, sans-serif',
              fontSize: '1rem',
              color: '#01796F',
              textAlign: 'center',

              '&:hover': {
                textDecoration: 'underline',
              },
              display: { xs: 'block', sm: 'inline-block' }, // Block on small screens, inline on larger screens
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            underline="none"
            sx={{
              fontFamily: 'PT Sans, sans-serif',
              fontSize: '1rem',
              color: '#01796F',
              '&:hover': {
                textDecoration: 'underline',
              },
              display: { xs: 'block', sm: 'inline-block' }, // Block on small screens, inline on larger screens
            }}
          >
            About
          </Link>
          <Link
            href="/contact-form"
            onClick={onContactClick}
            underline="none"
            sx={{
              fontFamily: 'PT Sans, sans-serif',
              fontSize: '1rem',
              color: '#01796F',
              '&:hover': {
                textDecoration: 'underline',
              },
              display: { xs: 'block', sm: 'inline-block' }, // Block on small screens, inline on larger screens
            }}
          >
            Contact
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'row' }, // Horizontal on both small and large screens
            justifyContent: { xs: 'center', sm: 'center' },
            gap: '10px',
            marginTop: { xs: '0px', sm: '0' },
          }}
        >
        
          <img
            src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
            alt="Pride Flag"
            style={{
              maxWidth: '70px',
              maxHeight: '40px',
              borderRadius: '5px',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Vertical on small screens, row on large
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
            textAlign: { xs: 'left', sm: 'right' }, // Align text left on small screens, right on large
            gap: '1px',
          }}
        >
          <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
          
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'PT Sans, sans-serif',
                fontSize: '1rem',
                color: '#01796F',
              }}
            >
              Ottawa, Ontario
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;


