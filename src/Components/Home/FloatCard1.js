import React from 'react';
import ParallaxSection from './ParallaxSection';

const FloatingCard = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',  // Match the section height
    zIndex: 1,
  };

  const outerContentStyle = {
    margin: '10px auto',
        backgroundColor: '#fcfaf4',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',

        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Ensure the outer content fills the height of the section
      };

  const contentStyle = {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',

    zIndex: 2,
    backgroundColor: 'transparent', // No background color inside the card
    padding: '3rem', // Adjusted padding for more space
    border: '1.5px solid #2b2d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '200px',
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 'normal',
    color: '#2b2d2b', // Text color to match the border
    lineHeight: '1.5',
    display: 'flex',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: '10vh', // Allow height to adjust based on content
  };


  const headerTextStyle = {
    fontSize: '24px',
    fontWeight: 100, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'lowercase', // Make the text uppercase
  };

  return (
<ParallaxSection
  image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1728154938/sunshine_y8vg4l.jpg"
  minHeight="50vh"
>      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={outerContentStyle}>
        <div style={contentStyle}>
          <p style={headerTextStyle}>about</p>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FloatingCard;