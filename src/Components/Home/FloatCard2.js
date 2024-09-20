import React from 'react';
import ParallaxSection from './ParallaxSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the right-facing arrow icon

const FloatingCard2 = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  };
  const outerContentStyle = {
    margin: '10px 20px',
        backgroundColor: '#fcfaf4',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Ensure the outer content fills the height of the section
      };


  const contentStyle = {
    zIndex: 2,
    backgroundColor: '#fcfaf4',
    padding: '2rem', // Ensure padding around content

    textAlign: 'center',
    width: '100%', // Limit width to ensure spacing around the card
    maxWidth: '250px', // Ensure the card stays square
    aspectRatio: '1 / 1', // Maintain square shape
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b2d2b',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'column', // Stack text and arrow vertically
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem', // Add spacing around the card
    boxSizing: 'border-box',
  };

  const headerTextStyle = {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    letterSpacing: '0.01em',
    fontFamily: 'Georgia, serif',
    textTransform: 'lowercase',

  };

  const arrowLinkStyle = {
    textDecoration: 'none',
    color: '#2b2d2b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem', // Space between the text and the arrow
    transition: 'transform 0.3s ease',
    cursor: 'pointer', // Add pointer cursor to the link
  };

  const iconStyle = {
    fontSize: '0.75rem',
    transition: 'transform 0.3s ease',
  };

  const linkTextStyle = {
    fontSize: '0.75rem',
    fontWeight: 100,
    textTransform: 'lowercase',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.01em',
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/busbackground.jpg`} minHeight='80vh'>
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <p style={headerTextStyle}>What to expect</p>
          <a href="/what-to-expect" style={arrowLinkStyle}>
            <span style={linkTextStyle}>start your journey</span> {/* Text next to the arrow */}
            <ArrowForwardIcon sx={iconStyle} /> {/* Right-facing arrow icon */}
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FloatingCard2;