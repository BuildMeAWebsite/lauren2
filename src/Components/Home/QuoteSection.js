import React from 'react';

const QuoteSection = () => {
  return (
    
    <div style={styles.quoteContainer}>
      <blockquote style={styles.quote}>
        "This is an inspirational quote that sets the tone for the website."
      </blockquote>
    </div>
  );
};

const styles = {
  quoteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: 'transparent',
  },
  quote: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#666',
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '1.8',
  },
};

export default QuoteSection;
