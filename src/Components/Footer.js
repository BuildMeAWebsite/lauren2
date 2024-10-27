import React, { useState, useEffect } from 'react';
import { Typography, Box, Link, Grid, IconButton, useMediaQuery } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = ({ onContactClick }) => {
  const [showButton, setShowButton] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile screen sizes

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
        margin: '0 auto !important',
        padding: { xs: '5rem 2rem', sm: '5rem 1rem', md: '5rem 1rem' },
        textAlign: 'center',
        position: 'relative',
        zIndex: 9,
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{
          width: '100%',
          flexDirection: 'column', // Stack content in column layout
          justifyContent: 'center',
        }}
      >
        {/* Center Column: Quick Links */}
        <Grid
          item
          xs={10}
          sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'space-around', // Adjust for mobile
            flexDirection: isMobile ? 'column' : 'row', // Stack links vertically on mobile
            alignItems: 'center',
            gap: isMobile ? '1rem' : '2rem', // Adjust spacing between links
            zIndex: 11,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={linkStyles}
          >
            Home
          </Link>

          <Link
            href="/about"
            underline="none"
            sx={linkStyles}
          >
            About
          </Link>

          <Link
            href="/frequently-asked-questions"
            underline="none"
            sx={linkStyles}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            underline="none"
            sx={linkStyles}
          >
            Contact
          </Link>

          <Link
            href="/approaches"
            underline="none"
            sx={linkStyles}
          >
            Approach
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/buildmelogo.png`}
              alt="Pride Flag"
              style={{
                maxWidth: '100px',
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
            padding: '1rem',
            borderRadius: '5px',
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
              fontFamily: 'Quicksand, sans-serif',
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

// Link styles for reuse
const linkStyles = {
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: '100',
  fontSize: '1.25rem',
  color: '#fcfaf4',
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#FFD700',
    transform: 'scale(1.05)',
  },
  textAlign: 'center',
};

export default Footer;