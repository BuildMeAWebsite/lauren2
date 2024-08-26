import React, { useEffect } from 'react';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  useEffect(() => {
    const textCard = document.querySelector('.textCard');
    textCard.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    textCard.style.transform = 'translateX(0)'; // Slide in to the original position
    textCard.style.opacity = '1';
  }, []);

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.heroContainer}>
        <div style={styles.cardContainer}>
          <div className="textCard" style={{...styles.textCard, ...styles.hidden}}>
            <h2 style={styles.subtitle}>LAUREN MARTYN PSYCHOTHERAPY</h2>
            <h1 style={styles.title}>Hello and <em>welcome</em>.</h1>
            <p style={styles.text}>
              If you are reading this you have already taken the biggest step in the therapeutic journey. My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to those residing in Ontario, Canada. Explore my website to learn more about me and if you feel it’s a good fit, let's continue this therapeutic journey together.
            </p>
            <div style={styles.buttonContainer}>
              <a href="/contact" style={styles.contactButton}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem 1rem',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100vh',
    color: '#3a3a3a',
    position: 'relative',
  },
  cardContainer: {
    maxWidth: '700px',
    width: '100%',
    padding: '0 50px',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  textCard: {
    padding: '10px 0',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    opacity: 1, // Initially visible but hidden by transform
    transform: 'translateX(0)',
  },
  hidden: {
    transform: 'translateX(100%)', // Start off-screen to the right
    opacity: 0,
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#01796F',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  title: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '3rem',
    fontWeight: '600',
    color: '#3a3a3a',
    margin: '0 auto',
    lineHeight: '1',
  },
  text: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    fontWeight: 'normal',
    textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#01796F',
    lineHeight: '1.5rem',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align button to the right
  },
  contactButton: {
    padding: '10px 20px',
    fontFamily: "Libre Baskerville, serif",
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '0px', // No border radius for sharp edges
  },
  '@media (max-width: 800px)': {
    heroContainer: {
      padding: '2rem 1rem',
      minHeight: '80vh',
    },
    cardContainer: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      fontSize: '2.5rem',
    },
    text: {
      fontSize: '1rem',
      marginBottom: '10px',
    },
    contactButton: {
      fontSize: '0.9rem',
    },
  },
};

export default Hero;
