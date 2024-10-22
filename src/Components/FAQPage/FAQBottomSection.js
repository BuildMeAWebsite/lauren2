import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';
import ParallaxSection from '../Home/ParallaxSection';

const FAQBottomSection = () => {
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
    padding: '5rem 5rem', // Adjusted padding for more space
    border: '1.5px solid #2b3d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '100%',
    minWidth: '200px', // Set max width for larger screens
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 'normal',
    color: '#2b3d2b',
    lineHeight: '1',
    display: 'flex',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: 'auto', // Allow height to adjust based on content
    boxSizing: 'border-box',
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
  const iconStyle = {
    marginLeft: '0.5rem',
    color: hovered ? '#FFD700' : '#2b3d2b', // Change icon color on hover
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/ferncouch.jpg`} minHeight='50vh'>
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <Link
            href="/contact"
            style={linkTextStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            click to schedule introductory call <ArrowForwardIcon style={iconStyle} />
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FAQBottomSection;