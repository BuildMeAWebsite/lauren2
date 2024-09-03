import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';

const Footer = ({ onContactClick }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2b3d2b !important',
        backdropFilter: 'blur(10px) !important',
        padding: '5rem 10rem',
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
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column', // Ensure links are stacked vertically
            alignItems: { xs: 'center', sm: 'flex-start' }, // Center on small screens, align left on larger
            gap: '10px',
            paddingBottom: { xs: '20px', sm: '0' }, // Adjust padding for spacing
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              fontFamily: 'Lora, sans-serif',
              fontSize: '1.5rem',
              color: '#fcfaf4',
              textAlign: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              },
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            underline="none"
            sx={{
              fontFamily: 'Lora, sans-serif',
              fontSize: '1.5rem',
              color: '#fcfaf4',
              textAlign: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              },
            }}
          >
            About
          </Link>
          <Link
            href="/contact-form"
            onClick={onContactClick}
            underline="none"
            sx={{
              fontFamily: 'Lora, sans-serif',
              fontSize: '1.5rem',
              color: '#fcfaf4',
              textAlign: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              },
            }}
          >
            Contact
          </Link>
          <Link
            href="/sitemap"
            onClick={onContactClick}
            underline="none"
            sx={{
              fontFamily: 'Lora, sans-serif',
              fontSize: '1.5rem',
              color: '#fcfaf4',
              textAlign: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              },
            }}
          >
            Sitemap
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'center' },
            gap: '10px',
            marginTop: { xs: '20px', sm: '0' },
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
            alt="Pride Flag"
            style={{
              maxWidth: '100px',
              maxHeight: '60px',
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
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-end' },
            justifyContent: { xs: 'center', sm: 'flex-end' },
            textAlign: { xs: 'center', sm: 'right' },
            gap: '10px',
            paddingTop: { xs: '20px', sm: '0' },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Lora, sans-serif',
                fontSize: '1.25rem',
                color: '#fcfaf4',
                transition: 'color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  color: '#FFD700', // Yellow on hover
                  transform: 'scale(1.05)', // Slightly enlarge on hover
                },
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