import React from 'react';

const QuoteSection = () => {
  return (
    <div style={styles.quoteContainer}>
      <blockquote style={styles.quote}>
      My therapeutic approach is rooted in compassionate, non-blaming empathy. I believe the most important part of the therapeutic process is building a safe, trusting, collaborative, and genuine bond. From there, we can deepen the understanding of your lived experience and emotions. Together, we work to re-frame your story with an emphasis on strengths, hope, and solutions to help you towards their full potential.
      </blockquote>
      <div style={styles.imageContainer}>
        <img 
          src={`${process.env.PUBLIC_URL}/Images/lauren.png`} 
          alt="Lauren Martyn" 
          style={styles.image} 
        />
      </div>
    </div>
  );
};

const styles = {
  quoteContainer: {
    display: 'flex',
    minHeight: '60vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 5rem',
    backgroundColor: '#01796F',
    flexDirection: 'row', // Ensures the image is placed next to the text
    flexWrap: 'wrap', // Allows wrapping on smaller screens
  },
  quote: {
    fontFamily: "Libre Baskerville, serif",
    backgroundColor: "transparent",
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#FFFACD',
    maxWidth: '1000px',
    textAlign: 'left',
    lineHeight: '1.25',
    marginRight: '20px', // Adds space between the text and image
    flex: 1, // Ensures the text takes up available space
  },
  imageContainer: {
    flexShrink: 0, // Prevents the image from shrinking
  },
  image: {
    width: '300px', // Controls the image size
    height: 'auto',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  '@media (max-width: 800px)': {
    quoteContainer: {
      flexDirection: 'column', // Stacks text and image vertically on small screens
      alignItems: 'center',
    },
    image: {
      width: '150px', // Adjusts image size on smaller screens
      marginTop: '10px', // Adds space above the image
    },
  },
};

export default QuoteSection;
