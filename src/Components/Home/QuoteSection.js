import React, { useEffect } from 'react';
import TextBanner from '../About/TextBanner';

const QuoteSection = () => {
  useEffect(() => {
    const quote = document.querySelector('.quote');
    const banner = document.querySelector('.banner');

    // Trigger animations on component mount (page load)
    if (banner) {
      banner.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
      banner.style.transform = 'translateY(0)';
      banner.style.opacity = '1';
    }

    if (quote) {
      quote.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
      quote.style.transform = 'translateY(0)';
      quote.style.opacity = '1';
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={styles.sectionContainer}>
      <div className="banner" style={{ ...styles.banner, ...styles.hidden }}>
        <TextBanner text="Hello and welcome" fontSize="2rem" padding="1rem" backgroundColor="#fcfaf4" textColor="#556B2F"  />
      </div>
      <div style={styles.quoteContainer}>
        <blockquote className="quote" style={{ ...styles.quote, ...styles.hidden }}>
          If you are reading this, you have already taken the biggest step in your therapeutic journey. My name is Lauren Martyn, and I am a registered psychotherapist dedicated to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counseling to those residing in Ontario, Canada. Explore my website to learn more about me, and if you feel we’re a good fit, let's continue this therapeutic journey together.
        </blockquote>
      </div>
    </div>
  );
};

const styles = {
  sectionContainer: {
    backgroundColor: '#FCFAF4',
    padding: '1rem 0rem',
    margin: '0 auto',
  },
  banner: {
    margin: '1rem',
    transform: 'translateY(100%)', // Start off-screen at the bottom
    opacity: 0,
  },
  quoteContainer: {
    display: 'flex',
    minHeight: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: '#FCFAF4',
  },
  quote: {
    fontFamily: "PT Sans, sans-serif",
    backgroundColor: "transparent",
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: '#556B2F',
    maxWidth: '600px',
    textAlign: 'left',
    lineHeight: '1.5',
    margin: '0',
    padding: '1rem 2rem', // Add padding to the left and right
  },
  hidden: {
    transform: 'translateY(100%)', // Start off-screen at the bottom
    opacity: 0,
  },
  // Media query for smaller screens
  '@media (max-width: 600px)': {
    quote: {
      padding: '0 1rem', // Increase padding on smaller screens
    },
  },
};

export default QuoteSection;
