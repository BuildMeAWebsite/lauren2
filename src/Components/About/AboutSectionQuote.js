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
    minHeight: '30vh',
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
    color: '#01796F',
    maxWidth: '600px',
    textAlign: 'left',
    lineHeight: '1.5',
    margin: '0',
    padding: '2rem 3rem', // Add padding to the left and right
    opacity: 1,
    transform: 'translateY(0)',
  },
};

export default QuoteSection;
