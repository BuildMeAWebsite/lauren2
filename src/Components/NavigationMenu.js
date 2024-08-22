import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
        {['Home', 'About', 'Contact', 'Book Now'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
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
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px' }}> {/* Increased padding */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              style={{ marginRight: '20px', transform: 'scale(1.25)' }} // Increased icon size by 25%
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: 'black' }} />
            </IconButton>
            {!isMobile && (
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 600,
                  fontSize: '1.5rem', // Increased font size by 25%
                  color: 'black',
                  flexGrow: 0,
                }}
              >
                Lauren Martyn
              </Typography>
            )}
          </div>

          {!isMobile && (
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
              <Button
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 300,
                  fontSize: '1.5rem', // Increased font size by 25%
                  color: 'black',
                  textTransform: 'none',
                  marginLeft: '12px', // Slightly increased margin
                  transition: 'color 0.3s ease',
                }}
                color="inherit"
              >
                Home
              </Button>
              <Button
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 300,
                  fontSize: '1.5rem', // Increased font size by 25%
                  color: 'black',
                  textTransform: 'none',
                  marginLeft: '12px', // Slightly increased margin
                  transition: 'color 0.3s ease',
                }}
                color="inherit"
              >
                About
              </Button>
              <Button
                style={{
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: 300,
                  fontSize: '1.5rem', // Increased font size by 25%
                  color: 'black',
                  textTransform: 'none',
                  marginLeft: '12px', // Slightly increased margin
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
              style={{
                fontFamily: "Libre Baskerville, serif",
                fontWeight: 500,
                fontSize: '1.125rem', // Increased font size by 25%
                color: 'black',
                textTransform: 'none',
                marginLeft: '12px', // Slightly increased margin
                transition: 'color 0.3s ease',
                border: '1px solid black',
                padding: '6px 18px', // Increased padding
              }}
              color="inherit"
            >
              Book Now
            </Button>
          )}

          {isMobile && (
            <Typography
              variant="h6"
              style={{
                fontFamily: "Libre Baskerville, serif",
                fontWeight: 600,
                fontSize: '1.5rem', // Increased font size by 25%
                color: 'black',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
              }}
            >
              Lauren Martyn
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default NavigationMenuBar;
