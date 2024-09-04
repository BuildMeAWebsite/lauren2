import React, { useState } from 'react';

const AboutSection9a = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.heroSection}>
      <p
        style={{
          ...styles.smallText,
          color: isHovered ? '#FFD700' : '#333',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        methods
      </p>
      <h1 style={styles.heading}>
        My approach is rooted in strength-based, solution-focused, emotion-focused and narrative therapy. I customize my approach to best fit each client's unique needs and goals. I use a variety of therapeutic interventions:
      </h1>
    </div>
  );
};

const styles = {
  heroSection: {
    padding: '100px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Lora, sans-serif',
  },
  smallText: {
    backgroundColor: '#ffffff',
    fontSize: '1rem', // Small text
    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    transition: 'color 0.3s ease, transform 0.3s ease', // Transition for hover effects
  },
  heading: {
    fontFamily: 'Georgia, serif', // Font family
    fontSize: '2rem', // Adjust the size as needed
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#333', // Dark gray color for the text
  },
};

export default AboutSection9a;