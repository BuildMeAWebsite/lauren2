import React, { useState, useEffect } from 'react';

const ParallaxSection = ({
  image,
  children,
  minHeight = '100vh',
  showOnMobile = true,
  overlayColor = 'rgba(255, 255, 255, 0.3)', // Default white transparent overlay
}) => {
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
    minHeight: minHeight,
    opacity: 1,
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
    backgroundColor: overlayColor, // Use the overlayColor prop
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
  };

  return (
    <div style={parallaxStyle}>
      <div style={overlayStyle}></div> {/* Overlay with adjustable color */}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;