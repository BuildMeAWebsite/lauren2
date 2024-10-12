import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavigationMenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');

  const handleOpenMenu = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const menuItems = {
    home: [],
    about: [
      { label: 'Our Story', link: '/about/our-story' },
      { label: 'Team', link: '/about/team' },
    ],
    approaches: [
      { label: 'Psychodynamic Approach', link: '/approaches/psychodynamic' },
      { label: 'CBT', link: '/approaches/cbt' },
      { label: 'Mindfulness', link: '/approaches/mindfulness' },
      // More items...
    ],
    faq: [
      { label: 'Insurance', link: '/faq/insurance' },
      { label: 'Session Costs', link: '/faq/costs' },
      { label: 'What to Expect', link: '/faq/expectations' },
      // More items...
    ],
    contact: [],
  };

  return (
    <header style={styles.header}>
      {/* Top Dark Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContainer}>
          <span style={styles.topBarItem}>Now accepting clients in Ontario</span>
          <span style={styles.topBarItem}>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:info@laurenmartyn.ca';
                e.preventDefault();
              }}
              style={styles.emailLink}
            >
              info@laurenmartyn.ca
            </Link>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <nav style={styles.navMenu}>
            <NavLink
              to="/"
              label="home"
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              menuItems={menuItems.home}
            />
            <NavLink
              to="/about"
              label="about"
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              menuItems={menuItems.about}
            />
            <NavLink
              to="/approaches"
              label="approach"
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              menuItems={menuItems.approaches}
            />
            <NavLink
              to="/frequently-asked-questions"
              label="faq"
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              menuItems={menuItems.faq}
            />
            <NavLink
              to="/contact"
              label="contact"
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              menuItems={menuItems.contact}
            />
          </nav>

          <div style={styles.logoContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/logo.png`} // Update with your logo path
              alt="lauren martyn logo"
              style={styles.logo}
            />
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

// NavLink component to handle hover and dropdowns
const NavLink = ({ to, label, handleOpenMenu, handleCloseMenu, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    handleOpenMenu(event, label);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleCloseMenu();
  };

  return (
    <div>
      <Link
        to={to}
        onMouseEnter={handleMenuOpen}
        style={styles.navLink}
        onMouseLeave={handleMenuClose}
      >
        {label}
      </Link>

      {menuItems.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onMouseLeave={handleMenuClose}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Link to={item.link} style={styles.dropdownLink}>
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    zIndex: 1000, // Ensure the header is on top
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
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.5rem', // Space between logo and nav items
  },
  logo: {
    height: '175px', // Adjust logo size as needed
  },
  navMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.5rem', // Space between nav and logo
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
  dropdownLink: {
    textDecoration: 'none',
    color: '#000', // Default link color
  },
};

export default NavigationMenuBar;