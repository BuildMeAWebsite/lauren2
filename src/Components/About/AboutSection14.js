import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';
import ParallaxSection from '../Home/ParallaxSection';

const AboutSection14 = () => {
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
    padding: '1.25rem', // Add padding around the border for spacing
    backgroundColor: 'white',
    color: '#8fbc8f',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the outer content fills the height of the section
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: 'transparent', // No background color inside the card
    padding: '4rem 2rem', // Adjusted padding for more space
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
    fontSize: '1.25rem',
    fontWeight: 400, // Regular font weight
    letterSpacing: '0.1em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Lora, sans-serif',
    textTransform: 'lowercase',
    color: hovered ? '#FFD700' : '#2b3d2b', // Change color on hover
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none', // Remove underline
    cursor: 'pointer',
    transform: hovered ? 'scale(1.05)' : 'scale(1)', // Slightly enlarge on hover
    transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition effect
  };

  const iconStyle = {
    marginLeft: '0.5rem',
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/abouthero.jpg`} minHeight='50vh'>
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <Link
            href="/frequently-asked-questions"
            style={linkTextStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            frequently asked questions <ArrowForwardIcon style={iconStyle} />
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AboutSection14;