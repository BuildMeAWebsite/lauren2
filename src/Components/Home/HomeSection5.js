import React from 'react';

const HeroSection = () => {
  return (
    <div style={styles.heroSection}>
      <div style={styles.leftBackground}></div>
      <div style={styles.middleBackground}></div>
      <div style={styles.heroText}>
        <h1 style={styles.heading}>
          Helping you reconnect in your relationships and feel happy again.
        </h1>
        <p style={styles.subText}>INDIVIDUAL & COUPLES THERAPY</p>
        <p style={styles.subText}>IN REDONDO BEACH + VIRTUAL ACROSS CALIFORNIA</p>
      </div>
      <div style={styles.heroImage}></div>
    </div>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontFamily: 'Garamond, serif',
  },
  leftBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#f7f2ee', // Light beige background
    zIndex: 1,
  },
  middleBackground: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '25%',
    height: '100%',
    backgroundColor: '#e2dcd7', // Slightly darker beige background
    zIndex: 2,
  },
  heroText: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'left',
    padding: '20px',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.5rem',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  subText: {
    fontSize: '1rem',
    margin: '5px 0',
    letterSpacing: '1px',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '40%',
    height: '100%',
    backgroundImage: 'url("/Images/treeriver.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },
};

export default HeroSection;