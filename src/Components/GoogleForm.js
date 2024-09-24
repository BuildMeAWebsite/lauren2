import React from 'react';
import ParallaxSection from './Home/ParallaxSection';

const GoogleFormEmbed = () => {
  const outerContainerStyle = {
    margin: '1rem auto', // Add some padding around the form
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 100, // Ensure this is higher than other overlapping elements
  };

  const iframeStyle = {
    margin: '0 1rem',
    border: 'none',
    borderRadius: '1px',
    maxWidth: '100%',
    minWidth: '500px', // Constrain the maximum width of the form
    height: '1500px',
    zIndex: 1300, // Ensure this is higher than the AppBar
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/ferncouch.jpg`} minHeight="100vh">
      <div style={outerContainerStyle}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf7NaBdfNFzRTJF17ZdeR0fbMFKArZfW7uQl9ODmGF5sGsEGA/viewform?embedded=true"
          style={iframeStyle}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </ParallaxSection>
  );
};

export default GoogleFormEmbed;