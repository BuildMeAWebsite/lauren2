import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NavigationMenuBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [textColor, setTextColor] = useState('#01796F'); // Initialize with default color
  const [logoSrc, setLogoSrc] = useState(`${process.env.PUBLIC_URL}/Images/logo.png`); // Default logo

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowHeader(false);
        setTextColor('#FCFAF4'); // Change text color when scrolling down
        setLogoSrc(`${process.env.PUBLIC_URL}/Images/lightlogo.png`); // Change to light logo
      } else {
        setShowHeader(true);
        setTextColor(scrollTop === 0 ? '#01796F' : '#FCFAF4'); // Default color at the top, else light color
        setLogoSrc(scrollTop === 0 ? `${process.env.PUBLIC_URL}/Images/logo.png` : `${process.env.PUBLIC_URL}/Images/lightlogo.png`); // Change logo based on scroll position
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      style={{ width: 300 }} // Increased width for drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Contact', 'Book Now'].map((text, index) => (
          <ListItem button key={text} component="a" href={index === 0 ? '/' : `/${text.toLowerCase().replace(/\s/g, '')}`}>
            <ListItemText primary={text} style={{ color: textColor }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: showHeader ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          padding: '10px',
          boxShadow: showHeader ? 'none' : '0px 2px 5px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.4s ease',
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
          zIndex: 1200, // Slightly lower than the iframe
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              style={{ marginRight: '20px', transform: 'scale(1.25)', color: textColor }}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FCFAF4'}
              onMouseLeave={(e) => e.currentTarget.style.color = textColor}
            >
              <MenuIcon />
            </IconButton>
            {!isMobile && (
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img
                  src={logoSrc}
                  alt="Logo"
                  style={{
                    height: '5rem',
                    width: '12rem',
                    objectFit: 'contain',
                  }}
                />
              </Link>
            )}
          </div>

          {!isMobile && (
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
              <Button
                href="/"
                style={{
                  fontFamily: 'PT Sans, sans-serif',
                  borderRadius: '0px',
                  fontWeight: 100,
                  fontSize: '1.25rem',
                  color: textColor,
                  textTransform: 'none',
                  marginLeft: '12px',
                  transition: 'color 0.3s ease',
                }}
                color="inherit"
              >
                Home
              </Button>
              <Button
                href="/about"
                style={{
                  fontFamily: 'PT Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '1.25rem',
                  color: textColor,
                  textTransform: 'none',
                  marginLeft: '12px',
                  transition: 'color 0.3s ease',
                }}
                color="inherit"
              >
                About
              </Button>
              <Button
                href="/contact"
                style={{
                  fontFamily: 'PT Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '1.25rem',
                  color: textColor,
                  textTransform: 'none',
                  marginLeft: '12px',
                  transition: 'color 0.3s ease',
                }}
                color="inherit"
              >
                Contact
              </Button>
            </div>
          )}

          {!isMobile && (
            <Button
              href="/booking"
              style={{
                fontFamily: 'PT Sans, sans-serif',
                fontWeight: 500,
                fontSize: '1.25rem',
                color: textColor,
                textTransform: 'none',
                marginRight: '10px',
                transition: 'color 0.3s ease',
                border: `1px solid ${textColor}`,
                padding: '6px 18px',
                borderRadius: '0px',
              }}
              color="inherit"
            >
              Book Now
            </Button>
          )}

          {isMobile && (
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={logoSrc}
                alt="Logo"
                style={{
                  height: '5rem',  // Adjust the height for smaller screens
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Link>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: 'transparent', // Same transparent background as AppBar
            backdropFilter: 'blur(20px)', // Same blur effect as AppBar
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Add subtle shadow
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default NavigationMenuBar;
