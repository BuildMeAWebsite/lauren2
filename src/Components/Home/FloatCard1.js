import React from 'react';
import ParallaxSection from './ParallaxSection';

const FloatingCard = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '80vh',  // Match the parallax section height
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: '#fcfaf4',
    padding: '12.5rem 5rem',
    border: '2px solid #8FBC8F',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    maxWidth: '500px',
    margin: 'auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    border: '1px solid #333',
    backgroundColor: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1.jpg`} minHeight='100vh'>
   <div style={overlayStyle}></div> {/* Overlay */}
<div style={contentStyle}>
  <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>serenity.</p>
  <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>noun</p>
  <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
    The state of being calm, peaceful, and untroubled. Discover a space where young minds can find tranquility and clarity, guided by compassionate support.
  </p>
  <button style={buttonStyle}>Learn More</button>
</div>
    </ParallaxSection>
  );
};

export default FloatingCard;