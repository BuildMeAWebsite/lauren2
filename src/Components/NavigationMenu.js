import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavigationMenuBar = () => {
  return (
    <header style={styles.header}>
      {/* Top Dark Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContainer}>
          <span style={styles.topBarItem}>Now accepting virtual therapy clients in Ontario</span>
          <span style={styles.topBarItem}>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:info@laurenmartyntherapy.ca';
                e.preventDefault(); // Prevent the default link behavior
              }}
              style={styles.emailLink}
            >
              info@laurenmartyntherapy.ca
            </Link>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <div style={styles.logoContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/logo.png`} // Update with your logo path
              alt="lauren martyn logo"
              style={styles.logo}
            />
          </div>
          <nav style={styles.navMenu}>
            <NavLink to="/" label="home" />
            <NavLink to="/about" label="about" />
            <NavLink to="/frequently-asked-questions" label="faq" />
            <NavLink to="/contact" label="contact" />
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

const NavLink = ({ to, label }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const style = {
    fontFamily: 'Merriweather, sans-serif', // Font family for the nav items
    fontSize: '1rem',
    color: hovered ? '#FFD700' : '#3a3a3a',
    textDecoration: 'none',
    textTransform: 'lowercase',
    margin: '0 10px', // 10px gap between each item
    transition: 'color 0.3s ease, transform 0.3s ease',
    whiteSpace: 'nowrap', // Prevent text wrapping
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <Link
      to={to}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Link>
  );
};

const styles = {
  header: {
    width: '100%',
    zIndex: 1000, // Ensure the header is on top
    '@media (maxWidth: 100%)': {
      position: 'fixed', // Fix the header at the top of the screen on smaller screens
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff', // Ensure the header has a background when fixed
    },
  },
  topBar: {
    backgroundColor: '#8fbc8f', // Dark color for the top bar
    color: '#FCFAF4', // Light text color
    padding: '10px 0', // Adjust padding to prevent overflow
    fontFamily: 'Georgia, serif', // Font family for the top bar
    fontSize: '.75rem',
    width: '100%',
    boxSizing: 'border-box', // Include padding in the width calculation
  
  },
  topBarContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0.25rem 1.5rem',
    boxSizing: 'border-box', // Ensure padding is accounted for
  },
  topBarItem: {
    marginLeft: '20px',
  },
  emailLink: {
    color: '#FCFAF4', // Match the top bar text color
    textDecoration: 'none', // Remove underline
    cursor: 'pointer',
  },
  appBar: {
    backgroundColor: '#ffffff', // White background for the main navbar
    boxShadow: 'none', // Remove shadow
    width: '100%',
    overflowX: 'hidden', // Prevent horizontal overflow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem', // Padding around the logo and nav items
    '@media (max-width: 1000px)': {
      padding: '15px 0', // Adjust padding for smaller screens
    },
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.5rem', // Space between logo and nav items
  },
  logo: {
    height: '175px', // Adjust logo size as needed
    '@media (maxWidth: 1000px)': {
      height: '100px', // Smaller logo on small screens
    },
  },
  navMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.5rem', // Space between
  },
  navLink: {
    fontFamily: 'Lora, sans-serif', // Font family for the nav items
    fontSize: '1rem',
    color: '#3a3a3a',
    textDecoration: 'none',
    textTransform: 'lowercase',
    margin: '0 10px', // 10px gap between each item
    transition: 'color 0.3s ease, transform 0.3s ease',
    whiteSpace: 'nowrap', // Prevent text wrapping
  },
};

export default NavigationMenuBar;