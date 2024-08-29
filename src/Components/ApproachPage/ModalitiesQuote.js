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
     
      <div style={styles.quoteContainer}>
        <blockquote className="quote" style={{ ...styles.quote, ...styles.hidden }}>
        My approach is rooted in strength-based, solution-focused, emotion-focused and narrative therapy. I customize my approach to best fit each client's unique needs and goals. I use a variety of therapeutic interventions:             </blockquote>
      </div>
    </div>
  );
};

const styles = {
  sectionContainer: {
    backgroundColor: '#FCFAF4',
    padding: '1rem 1rem',
    margin: '0 auto',
  },
  banner: {
    margin: '1rem',
    transform: 'translateY(100%)', // Start off-screen at the bottom
    opacity: 0,
  },
  quoteContainer: {
    display: 'flex',
    minHeight: '20vh',
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
    textAlign: 'center',
    lineHeight: '1.5',
    margin: '0',
    padding: '1rem ', // Add padding to the left and right
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
