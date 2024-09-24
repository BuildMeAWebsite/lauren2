import React, { useState } from 'react';

const ApproachSection3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.container}>
      {/* Text on the left and Image on the right */}
      <div style={styles.textContainer}>
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
          My approach is rooted in strength-based, solution-focused,
          emotion-focused and narrative therapy. I customize my approach to best
          fit each client's unique needs and goals. I use a variety of
          therapeutic interventions:
        </h1>
      </div>

      {/* Image Container */}
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/Images/lauren4.webp`}
          alt="Lauren Martyn"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px 20px',
    backgroundColor: '#fcfaf4',
    gap: '20px',
  },
  textContainer: {
    backgroundColor: '#fcfaf4',
    flex: 1,
    padding: '20px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Lora, sans-serif',
  },
  smallText: {
    backgroundColor: '#fcfaf4',    fontSize: '1rem',
    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  heading: {
    fontFamily: 'Georgia, serif',
    fontSize: '2rem',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    textContainer: {
      maxWidth: '100%',
    },
  },
};

export default ApproachSection3;