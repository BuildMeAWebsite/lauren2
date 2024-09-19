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
        padding: '2rem 5rem', // Reduced padding for a thinner footer
        textAlign: 'center',
        position: 'relative',
        zIndex: 9,
        '@media (max-width: 768px)': {
          padding: '1.5rem 3rem', // Smaller padding for smaller screens
        },
        '@media (max-width: 576px)': {
          padding: '1rem 2rem', // Even smaller padding for mobile devices
        },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', // Ensure horizontal layout
        }}
      >
        {/* Left Column: Pride Flag */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            alignItems: 'center',
            padding: '0 1rem',
            '@media (max-width: 768px)': {
              padding: '0 0.5rem',
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

        {/* Center Column: Quick Links */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px', // Add spacing between the links
            zIndex: 11,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              fontFamily: 'Lora, sans-serif',
              fontSize: '1.25rem',
              color: '#fcfaf4',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)',
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
              fontSize: '1.25rem',
              color: '#fcfaf4',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)',
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
              fontSize: '1.25rem',
              color: '#fcfaf4',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700',
                transform: 'scale(1.05)',
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
              fontSize: '1.25rem',
              color: '#fcfaf4',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#FFD700', // Yellow on hover
                transform: 'scale(1.05)',
              },
            }}
          >
            Sitemap
          </Link>
        </Grid>

        {/* Right Column: Custom Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            alignItems: 'center',
            padding: '0 1rem',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/logo.png`} // Replace with your custom logo
            alt="Custom Logo"
            style={{
              maxWidth: '120px',
              maxHeight: '50px',
              borderRadius: '1px',
            }}
          />
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
              zIndex: 10,
              marginTop: '1px',
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