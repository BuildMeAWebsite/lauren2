import React, { useState, useEffect } from 'react';

const ParallaxSection = ({ image, children, showOnMobile = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${image})`,
    minHeight: '30vh',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: isMobile && !showOnMobile ? 'none' : 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.005)', // Black overlay with 50% opacity
    zIndex: 1, // Ensure the overlay is on top
  };

  const contentStyle = {
    zIndex: 2, // Ensure content is on top of the overlay
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
