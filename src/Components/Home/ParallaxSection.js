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
    minHeight: '80vh',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: isMobile && !showOnMobile ? 'none' : 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // For the overlay to work properly
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 20% white overlay
    zIndex: 1, // Ensure overlay is on top of the image
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
