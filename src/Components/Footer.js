import React, { useState, useEffect } from 'react';
import { Typography, Box, Link, Grid, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = ({ onContactClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
        '@media (max-width: 768px)': {
          padding: '3rem 5rem', // Smaller padding for smaller screens
        },
        '@media (max-width: 576px)': {
          padding: '2rem 3rem', // Even smaller padding for mobile devices
        },
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
        {/* Left Column: Links */}
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
            padding: '0 1rem', // Add horizontal padding to avoid crowding
            '@media (max-width: 768px)': {
              padding: '0 0.5rem', // Smaller padding for smaller screens
            },
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
            href="/contact"
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

        {/* Center Column: Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'center' },
            alignItems: 'center',
            padding: '0 1rem', // Add horizontal padding to avoid crowding
            marginTop: { xs: '20px', sm: '0' },
            '@media (max-width: 768px)': {
              padding: '0 0.5rem', // Smaller padding for smaller screens
            },
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
            alt="Pride Flag"
            style={{
              maxWidth: '90px',
              maxHeight: '50px',
              borderRadius: '1px',
            }}
          />
        </Grid>

        {/* Right Column: Location */}
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
            padding: '0 1rem', // Add horizontal padding to avoid crowding
            '@media (max-width: 768px)': {
              padding: '0 0.5rem', // Smaller padding for smaller screens
            },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Lora, sans-serif',
                fontSize: '1rem',
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

      {/* Back to Top Button */}
      {showButton && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#2b3d2b',
            padding: '0.5rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#FFD700',
              color: '#2b3d2b',
            },
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          }}
          onClick={handleScrollToTop}
        >
          <IconButton
            sx={{
              color: '#fcfaf4',
              '&:hover': {
                color: '#2b3d2b',
                background: 'none'
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#2b3d2b',

              fontFamily: 'Lora, sans-serif',
              color: '#fcfaf4',
              marginTop: '-4px',
              '&:hover': {
                color: '#2b3d2b',
              },
            }}
          >
            Top
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;