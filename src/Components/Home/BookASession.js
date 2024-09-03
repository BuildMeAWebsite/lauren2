import React, { useState } from 'react';

const HomeSection7 = () => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseEnter = () => {
    setButtonHover(true);
  };

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.rightColumn}>
        <h2 style={styles.header}>Book a session:</h2>
        <p style={styles.paragraph}>
          To get started, click the button below to schedule a free, 15-minute introductory call with us. We’ll talk about your availability and preferences and match you with a therapist that will best meet your needs.
        </p>
        <a
          href="#schedule-call"
          style={{
            ...styles.button,
            ...(buttonHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          schedule an introductory call
        </a>
        <p style={styles.faq}>
          Questions? <a href="#faq" style={styles.link}>Read our FAQs</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    padding: '100px',
    backgroundColor: '#2B3D2B', // Dark background color
    color: '#FCFAF4', // Light text color
    fontFamily: "Lora, sans-serif",
  },
  rightColumn: {
    flex: 1,
    maxWidth: '600px', // Limit the width of the text content for better readability
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'normal',
  },
  paragraph: {
    fontFamily: "Georgia, serif",
    lineHeight: '1.8',
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    border: '1px solid #FCFAF4',
    color: '#FCFAF4',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
  },
  buttonHover: {
    color: '#FFD700', // Yellow text color on hover
    borderColor: '#FFD700', // Yellow border color on hover
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
  faq: {
    fontSize: '1.25rem',
  },
  link: {
    color: '#FCFAF4',
    textDecoration: 'underline',
  },
};

export default HomeSection7;