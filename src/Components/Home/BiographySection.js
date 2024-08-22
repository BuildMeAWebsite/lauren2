import React from 'react';
import ParallaxSection from '../../layout/ParallaxSection';

const BioSection = () => {
  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.heroContainer}>
        <div style={styles.cardContainer}>
          <div style={styles.imageContainer}>
            <img 
              src={`${process.env.PUBLIC_URL}/Images/background.jpg`} 
              alt="John Doe Profile" 
              style={styles.image} 
            />
          </div>

          <div style={styles.textCard}>
            <h2 style={styles.subtitle}>PROFESSIONAL BIOGRAPHY</h2>
            <h1 style={styles.title}>John Doe – Crafting Excellence in Software Engineering</h1>
            <p style={styles.text}>
              With over a decade of experience in the tech industry, John Doe has established himself as a seasoned software engineer, specializing in cutting-edge web development and innovative software solutions. His journey from a passionate coder to a thought leader in the field exemplifies dedication, continuous learning, and an unwavering commitment to excellence.
            </p>
            <p style={styles.text}>
              John’s expertise spans across various programming languages, frameworks, and technologies, enabling him to deliver robust, scalable, and efficient solutions. His collaborative approach and ability to communicate complex technical concepts in a clear and accessible manner have made him a sought-after mentor and leader in the development community.
            </p>
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
    padding: '100px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Semi-transparent white background for better text readability
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',  // Soft shadow for depth
    boxSizing: 'border-box',
    width: '100%',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',  // Same grid template
    gap: '40px',  // Increased gap for better spacing
    maxWidth: '1200px',
    width: '100%',
    padding: '20px 40px',  // Increased padding for a spacious feel
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  textCard: {
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    padding: '20px 0',
  },
  subtitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.2rem',  // Slightly larger font size for better readability
    fontWeight: '600',  // Increased weight for prominence
    color: '#555',  // Darker shade for a more refined look
    textTransform: 'uppercase',
    letterSpacing: '3px',  // Increased letter spacing for a polished feel
    marginBottom: '15px',
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '3rem',  // Reduced slightly for balance
    fontWeight: '700',
    color: '#222',  // Darker for better contrast
    marginBottom: '30px',  // Increased spacing below the title
    lineHeight: '1.3',
  },
  text: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#555',  // Slightly lighter for contrast with the title
    lineHeight: '1.8',
    marginBottom: '20px',  // Spacing between paragraphs
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',  // Shadow for image depth
    overflow: 'hidden',  // Ensures the image fits within the rounded corners
  },
  image: {
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
  },
};

export default BioSection;
