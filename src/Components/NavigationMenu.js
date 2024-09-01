import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavigationMenuBar = () => {
  return (
    <header style={styles.header}>
      {/* Top Dark Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContainer}>
          <span style={styles.topBarItem}>Ottawa</span>
          <span style={styles.topBarItem}>Ontario</span>
          <span style={styles.topBarItem}>info@laurenmartyntherapy.ca</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <div style={styles.logoContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/logo.png`} // Update with your logo path
              alt="l'espace logo"
              style={styles.logo}
            />
          </div>
          <nav style={styles.navMenu}>
            <Link to="/" style={styles.navLink}>home</Link>
            <Link to="/about" style={styles.navLink}>about</Link>
            <Link to="/services" style={styles.navLink}>contact</Link>
            <Link to="/book-session" style={styles.navLink}>book a session</Link>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

const styles = {
  header: {
    overflowX: 'hidden', // Prevent horizontal overflow
  },
  topBar: {
    backgroundColor: '#2B3D2B', // Dark color for the top bar
    color: '#FCFAF4', // Light text color
    padding: '20px 10px',
    fontFamily: 'Merriweather, sans-serif', // You can replace this with the actual font family used
    fontSize: '1rem',
    width: '100%',
  },
  topBarContainer: {
    maxWidth: '17500px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 3rem',
  },
  topBarItem: {
    marginLeft: '20px',
  },
  appBar: {
    backgroundColor: '#ffffff', // White background for the main navbar
    boxShadow: 'none', // Remove shadow
    borderBottom: '1px solid #fcfaf4', // Light border at the bottom
    width: '100%',
    overflowX: 'hidden', // Prevent horizontal overflow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '35px 0', // Padding around the logo and nav items
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '25px', // Space between logo and nav items
  },
  logo: {
    height: '150px', // Adjust logo size as needed
  },
 
  navMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink: {
    fontFamily: 'Merriweather, sans-serif', // You can replace this with the actual font family used
    fontSize: '1.35rem',
    color: '#3a3a3a',
    textDecoration: 'none',
    textTransform: 'lowercase',
    margin: '0 10px', // 10px gap between each item
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap', // Prevent text wrapping
  },
};

export default NavigationMenuBar;