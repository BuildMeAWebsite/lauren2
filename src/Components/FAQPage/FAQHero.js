import React from 'react';
import ParallaxSection from '../Home/ParallaxSection';
import FAQPage from '../../pages/FAQPage';
import FAQSection from './FAQSection';

const FAQHero = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',  // Match the section height
    zIndex: 1,
  };

  const outerContentStyle = {
    padding: '2rem 0', // Add padding around the border for spacing
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the outer content fills the height of the section
  };

  const contentStyle = {
    zIndex: 2,
    backgroundColor: '#fcfaf4',
    padding: '2rem', // Default padding
    paddingTop: '5rem',
    paddingBottom: '5rem',
    border: '1.5px solid #2b2d2b', // Darker border to match the design
    textAlign: 'center', // Center align the text
    width: '100%',
    maxWidth: '30rem', // Set max width for larger screens
    aspectRatio: 'auto', // The card will adapt its height based on the content
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b2d2b', // Text color to match the border
    lineHeight: '1.5',
    display: 'flex',
    justifyContent: 'center', // Center the text within the card
    alignItems: 'center', // Vertically center the text
    height: 'auto', // Allow height to adjust based on content
    boxSizing: 'border-box', // Include padding and border in the element's width and height
  };

  const headerTextStyle = {
    fontSize: '1.75rem',
    fontWeight: 400, // Regular font weight
    letterSpacing: '0.05em', // Slightly increase letter spacing for a cleaner look
    fontFamily: 'Georgia, serif',
    textTransform: 'lowercase', // Make the text lowercase
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/faq1.jpg`} minHeight='80vh'>
     
      <FAQSection/>
    </ParallaxSection>
  );
};

export default FAQHero;