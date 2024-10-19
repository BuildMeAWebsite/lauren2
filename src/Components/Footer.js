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
        padding: { xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 5rem' },
        textAlign: 'center',
        position: 'relative',
        zIndex: 9,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{
          marginTop: '1rem',
flexDirection: 'column', // Stack content in column layout
          justifyContent: 'center',
        }}
      >
        {/* Center Column: Quick Links */}
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
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
                color: '#FFD700',
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
                color: '#FFD700',
                transform: 'scale(1.05)',
              },
            }}
          >
            About
          </Link>
          <Link
            href="/approaches"
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
            Approach
          </Link>
          <Link
            href="/frequently-asked-questions"
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
            FAQ
          </Link>
          <Link
            href="/contact"
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
        </Grid>

        {/* Logos Row */}
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem', // Spacing between the two logos
          }}
        >
          {/* Left Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/logonew.png`}
              alt="Logo"
              style={{
                maxWidth: '100px',
                height: 'auto',
                display: 'block',
                borderRadius: '5px',
              }}
            />
          </Box>

          {/* Right Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/prideflag.png`}
              alt="Pride Flag"
              style={{
                maxWidth: '50px',
                height: 'auto',
                display: 'block',
                borderRadius: '5px',
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Back to Top Button */}
      {showButton && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'transparent',
            padding: '1.5rem',
            borderRadius: '2px',
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
                background: 'none',
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#fcfaf4',
              fontFamily: 'Lora, sans-serif',
              backgroundColor: 'none',
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