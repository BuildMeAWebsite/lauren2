import React, { useEffect } from 'react';

const QuoteSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const quote = document.querySelector('.quote');
      const quotePosition = quote.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (quotePosition < screenPosition) {
        quote.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        quote.style.transform = 'translateY(0)';
        quote.style.opacity = '1';
        window.removeEventListener('scroll', handleScroll); // Remove the event listener once the animation is triggered
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.quoteContainer}>
      <blockquote className="quote" style={{ ...styles.quote, ...styles.hidden }}>
      If you are reading this you have already taken the biggest step in the therapeutic journey. My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to those residing in Ontario, Canada. Explore my website to learn more about me and if you feel it’s a good fit, let's continue this therapeutic journey together.      </blockquote>
    </div>
  );
};

const styles = {
  quoteContainer: {
    display: 'flex',
    minHeight: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 2rem',
    margin: '0 auto',
    backgroundColor: '#FCFAF4',
  },
  quote: {
    fontFamily: "PT Sans, sans-serif",
    backgroundColor: "transparent",
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: '#01796F',
    maxWidth: '700px',
    textAlign: 'left',
    lineHeight: '1.5',
    margin: '0', // Remove margin to eliminate spacing around text
    opacity: 1,
    transform: 'translateY(0)',
  },
  hidden: {
    transform: 'translateY(100%)', // Start off-screen at the bottom
    opacity: 0,
  },
};

export default QuoteSection;
