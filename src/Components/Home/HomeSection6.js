import React from 'react';
import ParallaxSection from './ParallaxSection';

const HomeSection6 = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    height: '100%',
    padding: '3rem',
  };

  const contentStyle = {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    backgroundColor: 'transparent',
    padding: '3rem',
    border: '1.5px solid #2b2d2b',
    textAlign: 'left',
    width: '50%', // Adjust for more space
    aspectRatio: 'auto',
    position: 'relative',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 'normal',
    color: '#2b2d2b',
    lineHeight: '1.8',
  };

  const headerTextStyle = {
    fontSize: '24px',
    fontWeight: 100,
    fontStyle: 'italic',
    letterSpacing: '0.05em',
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'lowercase',
    color: '#2b2d2b',
    marginBottom: '1.5rem',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    textAlign: 'left',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 400,
    color: '#333',
    marginBottom: '1rem',
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2rem',
  };

  const imageStyle = {
    maxWidth: '200px',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const captionStyle = {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '1rem',
    color: '#2b2d2b',
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <ParallaxSection
      image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729297041/pexels-eye4dtail-114137_h9nkjj.jpg"
      minHeight="80vh"
    >
      <div style={overlayStyle}></div>

      <div style={outerContentStyle}>
        {/* Floating Card Content */}
        <div style={contentStyle}>
          <p style={headerTextStyle}>
            hello and <em>welcome</em>.
          </p>
          <h1 style={headingStyle}>
            If you are reading this, you have already taken the biggest step in the therapeutic journey. My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to those residing in Ontario, Canada.
          </h1>
        </div>

        {/* Image and Caption to the side */}
        <div style={imageContainerStyle}>
          <img
            src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1728154934/lauren1_xmyolw.webp"
            alt="Lauren Martyn"
            style={imageStyle}
          />
          <p style={captionStyle}>Lauren Martyn RP, MA</p>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HomeSection6;