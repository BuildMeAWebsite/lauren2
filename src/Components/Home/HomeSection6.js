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
    backgroundColor: 'transparent', // Transparent to show parallax behind
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
    flexDirection: 'row', // Default row layout
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse', // Stack with image on top on small screens
      height: '100%',
      width: 'auto',
      margin: '10px ',
    },
  };

  const contentStyle = {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    zIndex: 2,
    backgroundColor: '#fcfaf4', // Background for the content inside the border
    padding: '1.5rem',
    margin: '1rem auto',
    border: '1.75px solid #2b2d2b',
    textAlign: 'left',
    width: '70%', // Responsive width for large screens
    maxWidth: '400px',
    aspectRatio: 'auto',
    position: 'relative',
    color: '#2b2d2b',
    lineHeight: '1.8',
    '@media (max-width: 1200px)': {
      width: '75%', // Adjust width for medium screens
    },
    '@media (max-width: 768px)': {
      maxWidth: '90%', // Smaller padding on very small screens
      padding: '5px',
      margin: '0 auto', // Space between text and image on small screens
      order: 2, // Content should come after the image on small screens
    },
    '@media (max-width: 576px)': {
      maxWidth: '90%', // Smaller padding on very small screens
      margin: '0 auto', // Space between text and image on small screens
      paddingTop: '10px',

    },
  };

  const headerTextStyle = {
    fontSize: '1.5rem',
    fontWeight: '400',
    letterSpacing: '0.05em',
    fontFamily: 'Lora, sans-serif',
    color: '#2b2d2b',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    lineHeight: '1.5',
    textAlign: 'left',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 100,
    color: '#2b2d2b',
  };

  const imageContainerStyle = {
    display: 'flex',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // To make the blur effect relative to the image
    '@media (max-width: 768px)': {
      marginLeft: '0', // Reset margin on small screens
      order: 1, // Ensure the image is on top on small screens
    },
  };

  const imageStyle = {
    maxWidth: '300px',
    width: '300px',
    backgroundColor: 'transparent',
    padding: '10px', // Space between the image and the border
    border: '0.075px solid #fcfaf4',
    borderRadius: '0px',
    boxShadow: '0px 0px 15px 10px rgba(0, 0, 0, 0.2)', // 10px blur effect
    '@media (max-width: 768px)': {
      maxWidth: '200px',

    },
  };

  const captionStyle = {
    fontFamily: 'Lora, sans-serif',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    border: '1.25px solid #fcfaf4',
    padding: '10px',
    fontSize: '400',
    backgroundColor: '#2b2d2b',
    color: '#fcfaf4',
    margin: '1rem auto',
    textAlign: 'center',
  };

  return (
    <ParallaxSection
      image="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729515914/pexels-valiphotos-589802_mibnwj.jpg"
      minHeight="100vh"
    >
      <div style={overlayStyle}></div>
  
      <div style={outerContentStyle}>
        {/* Image and Caption */}
        <div style={imageContainerStyle}>
          <img
            src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154934/lauren1_xmyolw.webp"
            alt="Lauren Martyn"
            style={imageStyle}
          />
          <p style={captionStyle}>Lauren Martyn RP, MA</p>
        </div>
    
  
        {/* Text Content */}
        <div style={contentStyle}>
          <p style={headerTextStyle}>
            Hello and <em>welcome</em>.
          </p>
          <h1 style={headingStyle}>
            If you are reading this, you have already taken the biggest step in the therapeutic journey. My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to those residing in Ontario, Canada.
          </h1>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HomeSection6;