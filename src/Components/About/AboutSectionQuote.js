import React from 'react';

const QuoteSection = () => {
  return (
    <div style={styles.quoteContainer}>
      <blockquote style={styles.quote}>
        I have experience working with a variety of concerns and types of clients across the lifespan. You may know exactly what you want to work on or not be sure where to start. You are in the driver seat, and I am your passenger. Whenever you are ready, we can begin to move forward. We can take the long way, go slow, or change directions towards your destination of a life worth living. Counseling provides a space where we can explore challenges, growth, healing, and everything in between.
      </blockquote>
    </div>
  );
};

const styles = {
  quoteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 2rem',    
    backgroundColor: '#fcfaf4',
    flexDirection: 'column', // Ensures the text is centered
    width: '100%',
  },
  quote: {
    fontFamily: "PT Sans, sans-serif",
    fontSize: '1.25rem',
    color: '#01796F',
    maxWidth: '700px',
    textAlign: 'left',
    lineHeight: '1.75',
    margin: 0, // Removes default margin from blockquote
  },
};

export default QuoteSection;
