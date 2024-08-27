import React, { useEffect } from 'react';
import ParallaxSection from '../Home/ParallaxSection';

const Hero = () => {
  useEffect(() => {
    const textCard = document.querySelector('.textCard');
    const imageContainer = document.querySelector('.imageContainer');
    const caret = document.querySelector('.caret');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    [textCard, imageContainer, caret].forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      [textCard, imageContainer, caret].forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToHome3Boxes = () => {
    const home3BoxesSection = document.querySelector('.home3Boxes');
    if (home3BoxesSection) {
      home3BoxesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/couch.jpg`}>
      <div style={styles.heroContainer}>
        {/* Inline style for the keyframes */}
        <style>
          {`
            @keyframes fadeInOut {
              0%, 100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
            }

            @keyframes slideIn {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div style={styles.cardContainer}>
          <div className="imageContainer" style={{ ...styles.imageContainer, ...styles.hidden }}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/lauren.png`}
              alt="Decorative"
              style={styles.image}
            />
          </div>
          <div className="textCard" style={{ ...styles.textCard, ...styles.hidden }}>
            <h2 style={styles.subtitle}>LAUREN MARTYN PSYCHOTHERAPY</h2>
            <h1 style={styles.title}>To be seen,
to be heard,
and to be  <em>understood</em>.</h1>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent', // Add a semi-transparent background
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '90vh',
    color: '#3a3a3a',
    position: 'relative',
    overflow: 'hidden',
    padding: '4rem 5rem',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '800px',
    width: '100%',
  },
  textCard: {
    flex: 1,
    padding: '10px 0',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    opacity: 1,
    transform: 'translateY(100%)',
    animation: 'slideIn 1s ease-in-out forwards',
  },
  hidden: {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#3a3a3a',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  title: {
    fontFamily: "PT Sans, sans-serif",
    fontSize: '2.5rem',
    fontWeight: '400',
    color: '#01796f',
    margin: '0',
    lineHeight: '1',
  },
  buttonContainer: {
    display: 'flex',
    margin: '2rem 0',
    justifyContent: 'flex-start',
  },
  contactButton: {
    padding: '10px 20px',
    fontFamily: "PT Sans, sans-serif",
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontSize: '1rem',
    backgroundColor: '#3a3a3a',
    color: '#fcfaf4',
    textDecoration: 'none',
    borderRadius: '0px',
  },
  imageContainer: {
    flex: 1,
    paddingRight: '1rem',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    animation: 'slideIn 1s ease-in-out forwards',
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'contain',
  },
  caret: {
    fontSize: '5rem',
    color: '#3a3a3a',
    animation: 'fadeInOut 2s ease-in-out 2, slideIn 1s ease-in-out forwards',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    opacity: 0,
  },
  '@media (max-width: 1024px)': {
    cardContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer: {
      paddingRight: '0',
      paddingBottom: '0px',
      order: 2,
    },
    textCard: {
      order: 1,
    },
    title: {
      fontSize: '2.5rem',
    },
    caret: {
      marginTop: '0px',
    },
  },
};

// Add hover effect
styles.caret['&:hover'] = {
  transform: 'scale(1.1)',
};

export default Hero;
