import React from 'react';

const AboutSection9a = () => {
  return (
    <div style={styles.heroSection}>
      <p style={styles.smallText}>methods</p>
      <h1 style={styles.heading}>
      My approach is rooted in strength-based, solution-focused, emotion-focused and narrative therapy. I customize my approach to best fit each client's unique needs and goals. I use a variety of therapeutic interventions:       </h1>
    </div>
  );
};

const styles = {
  heroSection: {
    padding: '100px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Lora, sans-serif', // You can replace this with the actual font family used
  },
  smallText: {
    backgroundColor: '#ffffff',

    fontSize: '1rem', // Small text
    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    color: '#333', // Dark gray color for the text
  },
  heading: {
    fontFamily: 'Georgia, serif', // You can replace this with the actual font family used

    fontSize: '2rem', // Adjust the size as needed
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#333', // Dark gray color for the text
  },
};

export default AboutSection9a;