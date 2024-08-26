import React, { useEffect, useState } from 'react';
import ParallaxSection from '../Home/ParallaxSection';

const Hero = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const textCard = document.querySelector('.textCard');
    textCard.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    textCard.style.transform = 'translateX(0)';
    textCard.style.opacity = '1';
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const therapyApproaches = [
    "Person-Centred Therapy",
    "Strength-Based Therapy",
    "Psychodynamic Therapy",
  ];

  const topics = [
    {
      title: "Client-Centered Approaches",
      content: therapyApproaches,
    },
    {
      title: "Cognitive and Behavioural Approaches",
      content: therapyApproaches,
    },
    {
      title: "Emotion and Trauma-Focused Approaches",
      content: therapyApproaches,
    },
    {
      title: "Creative and Expressive Approaches",
      content: therapyApproaches,
    }
  ];

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.heroContainer}>
        <div style={styles.cardContainer}>
          <div className="textCard" style={styles.textCard}>
            <h1 style={styles.title}>A little more<em> about </em> me.</h1>
            <div style={styles.accordionContainer}>
              {topics.map((topic, index) => (
                <div key={index} style={styles.accordionItem}>
                  <div 
                    style={styles.accordionHeader}
                    onClick={() => toggleAccordion(index)}
                  >
                    {topic.title}
                    <span style={styles.accordionArrow}>
                      {activeAccordion === index ? '▲' : '▼'}
                    </span>
                  </div>
                  <div 
                    style={{
                      ...styles.accordionContent,
                      maxHeight: activeAccordion === index ? '100px' : '0',
                      opacity: activeAccordion === index ? 1 : 0,
                    }}
                  >
                    <ul>
                      {topic.content.map((approach, i) => (
                        <li key={i}>{approach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
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
    opacity: 1,
    transform: 'translateX(0)',
  },
  title: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '3rem',
    fontWeight: '600',
    color: '#3a3a3a',
    margin: '0 auto',
    lineHeight: '1',
  },
  accordionContainer: {
    margin: '20px 0',
  },
  accordionItem: {
    marginBottom: '10px',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
  },
  accordionHeader: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1.2rem',
    fontWeight: 'normal',
    color: '#01796F',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#e6e6e6',
    borderRadius: '5px',
  },
  accordionArrow: {
    fontSize: '1rem',
  },
  accordionContent: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    color: '#3a3a3a',
    paddingLeft: '10px',
    borderLeft: '2px solid #01796F',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    maxHeight: '0',
    opacity: 0,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
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
    borderRadius: '0px',
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
    accordionHeader: {
      fontSize: '1rem',
    },
    accordionContent: {
      fontSize: '0.9rem',
    },
    contactButton: {
      fontSize: '0.9rem',
    },
  },
};

export default Hero;
