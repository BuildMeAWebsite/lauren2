import React, { useState } from 'react';
import ParallaxSection from './ParallaxSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';

const HomeSection13 = () => {
  const [hovered, setHovered] = useState(false);

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50vh',  // Match the parallax section height
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
    backgroundColor: 'transparent', // No background color inside the card
    padding: '3rem 2rem', // Adjusted padding for more space
    border: '1.5px solid #2b3d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '100%',
    maxWidth: '25rem', // Set max width for larger screens
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b3d2b',
    lineHeight: '1',
    display: 'flex',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: 'auto', // Allow height to adjust based on content
  };

  const linkTextStyle = {
    fontSize: '1.25rem', // Base font size
    fontWeight: 400, // Regular font weight
    letterSpacing: '0.1em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Georgia, serif',
    textTransform: 'lowercase',
    color: '#2b3d2b', // Base color
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none', // Remove underline
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Smooth transition for scaling
  };

  const linkTextHoverStyle = {
    transform: 'scale(1.05)', // Slightly enlarge text on hover
    color: '#FFD700', // Change color on hover
  };

  const iconStyle = {
    marginLeft: '0.5rem',
    fontSize: '1.25rem', // Base icon size
    transition: 'transform 0.3s ease', // Smooth transition for scaling
  };

  const iconHoverStyle = {
    transform: 'scale(1.05)', // Slightly enlarge icon on hover
  };

  return (
<ParallaxSection
  image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1728154937/ferncouch_q8nr26.jpg"
  minHeight="50vh"
>      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <Link
            href="/about"
            style={hovered ? { ...linkTextStyle, ...linkTextHoverStyle } : linkTextStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            more information 
            <ArrowForwardIcon style={hovered ? { ...iconStyle, ...iconHoverStyle } : iconStyle} />
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HomeSection13;