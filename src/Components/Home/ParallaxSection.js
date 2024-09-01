import React, { useState, useEffect } from 'react';

const ParallaxSection = ({ image, children, minHeight = '30vh', showOnMobile = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVerySmall, setIsVerySmall] = useState(window.innerWidth <= 615);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsVerySmall(window.innerWidth <= 615);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${image})`,
    minHeight: minHeight,
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: isVerySmall ? 'cover' : isMobile ? 'cover' : 'auto', // Adjust background size for very small screens
    display: isMobile && !showOnMobile ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: isVerySmall ? '10px' : '20px', // Adjust padding for very small screens
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Adjust the overlay for better readability
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2, // Ensure content is on top of the overlay
    padding: isVerySmall ? '10px' : '20px',
    textAlign: 'center',
    fontSize: isVerySmall ? '0.875rem' : '1rem', // Adjust font size for very small screens
  };

  return (
    <div style={parallaxStyle}>
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;