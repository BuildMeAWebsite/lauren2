import React from 'react';
import ParallaxSection from '../Home/ParallaxSection';

const ContactFloatingHero = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',  // Match the parallax section height
    zIndex: 1,
  };
  const outerContentStyle = {
    padding: '2rem 0', // Add padding around the border for spacing
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the outer content fills the height of the section
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: '#fcfaf4', // No background color inside the card
    padding: '5rem', // Adjusted padding for more space
    border: '1.5px solid #2b2d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '100%',
    maxWidth: '30rem', // Set max width for larger screens
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b2d2b', // Text color to match the border
    lineHeight: '1.5',
    display: 'flex',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: 'auto', // Allow height to adjust based on content
  };

  const headerTextStyle = {
    fontSize: '1.75rem',
    fontWeight: 'normal', // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Georgia, serif',
    textTransform: 'lowercase', // Make the text uppercase
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/cherryblossoms.jpg`} minHeight='80vh'>
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}> 
          <p style={headerTextStyle}>contact me</p>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ContactFloatingHero;