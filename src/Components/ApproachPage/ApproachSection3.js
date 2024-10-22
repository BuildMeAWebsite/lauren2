import React, { useState, useEffect } from 'react';

const ApproachSection3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to detect screen resize and set "isMobile" state based on screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Attach the resize event listener when the component mounts and clean up when it unmounts
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ ...styles.container, flexDirection: isMobile ? 'column' : 'row' }}>
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
          approach
        </p>
        <h1 style={styles.heading}>
          My approach is rooted in offering a warm, genuine, approachable, playful and optimistic space. I customize my approach to best fit each client's unique needs and goals. I use a variety of therapeutic interventions:
        </h1>
      </div>

      {/* Image Container */}
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/Images/lauren2.webp`}
          alt="Lauren Martyn"
          style={styles.image}
        />
        <p style={styles.caption}>Lauren Martyn RP, MA</p> {/* Caption added below the image */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
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
  },
  smallText: {
    fontSize: '2rem',
    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
    marginBottom: '20px',
    transition: 'color 0.3s ease, transform 0.3s ease',
    fontFamily: 'Lora, sans-serif',
    fontStyle: 'italic', // This makes the text italic
  },
  heading: {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '20px',
    lineHeight: '1.5',
    fontWeight: '400',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Ensure caption is below image
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  caption: {
    fontFamily: 'Lora, sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
    color: '#2b3d2b',
    textAlign: 'center',
    marginTop: '1rem',
  },
};

export default ApproachSection3;