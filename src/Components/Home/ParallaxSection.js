import React, { useState, useEffect } from 'react';

const ParallaxSection = ({
  image,
  children,
  minHeight = '80vh',
  showOnMobile = true,
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

  const contentStyle = {
    zIndex: 2,
  };

  return (
    <div style={parallaxStyle}>
      {/* Removed the overlay */}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;