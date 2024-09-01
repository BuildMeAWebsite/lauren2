import React from 'react';

const AboutSection9a = () => {
  return (
    <div style={styles.heroSection}>
      <p style={styles.smallText}>therapy in montreal.</p>
      <h1 style={styles.heading}>
        We’re a team of Psychologists dedicated to providing high quality, modern mental health care to the Montreal, Laval, and North Shore communities.
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
    fontFamily: 'Georgia, serif', // You can replace this with the actual font family used
  },
  smallText: {
    fontSize: '0.875rem', // Small text
    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    color: '#333', // Dark gray color for the text
  },
  heading: {
    fontSize: '2rem', // Adjust the size as needed
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#333', // Dark gray color for the text
  },
};

export default AboutSection9a;