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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the outer content fills the height of the section
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: '#fcfaf4',
    padding: '100px 50px', // Ensure padding around content
    textAlign: 'center',
    maxWidth: '300px', // Ensure the card stays square
    aspectRatio: '1 / 1', // Maintain square shape
    position: 'relative',
    fontFamily: 'Lora, sans-serif',
    fontWeight: 'normal',
    color: '#2b2d2b',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'column', // Stack text and arrow vertically
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    border: '1.5px solid #2b2d2b', // Darker border to match the design
  };


  const headerTextStyle = {
    fontSize: '24px',
    fontWeight: 100, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'lowercase', // Make the text uppercase
  };

  const arrowLinkStyle = {
    textDecoration: 'none',
    color: '#2b2d2b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem', // Space between the text and the arrow
    transition: 'transform 0.3s ease',
    cursor: 'pointer', // Add pointer cursor to the link
  };

  const iconStyle = {
    fontSize: '1rem',
    transition: 'transform 0.3s ease',
  };

  const linkTextStyle = {
    fontSize: '24px', // Base font size
    fontWeight: 100, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'lowercase',
    color: '#2b3d2b', // Base color
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none', // Remove underline
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Smooth transition for scaling
  };
  return (
<ParallaxSection
  image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729515914/pexels-valiphotos-589802_mibnwj.jpg"
  minHeight="100vh"
>      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
         
          <a href="/what-to-expect" style={arrowLinkStyle}>
            <span style={linkTextStyle}>About the process</span> {/* Text next to the arrow */}
            <ArrowForwardIcon sx={iconStyle} /> {/* Right-facing arrow icon */}
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FloatingCard2;