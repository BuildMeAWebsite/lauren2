import React from 'react';

const Hero = () => {
  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.heroContainer}>
        <div style={styles.cardContainer}>
          <div style={styles.textCard}>
            <h2 style={styles.subtitle}>NEW CHAPTER PSYCHOTHERAPY</h2>
            <h1 style={styles.title}>Break old cycles – write <em>new</em> stories.</h1>
            <p style={styles.text}>
              Providing in-person & virtual psychotherapy for Individuals, Couples & Teens in Ottawa & surrounding areas.
            </p>
            <div style={styles.buttonGroup}>
              <a href="/booking" style={styles.bookNowButton}>
                Contact
              </a>
              <a href="/consultation" style={styles.freeConsultationButton}>
                Methodologies
              </a>
            </div>
          </div>

          <div style={styles.imageContainer}>
            <img 
              src={`${process.env.PUBLIC_URL}/Images/sample-image.jpg`} 
              alt="Right Side Image" 
              style={styles.image} 
            />
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
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    width: '100%',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',  // Two equal columns for text and image
    gap: '20px',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  textCard: {
    padding: '20px 0',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1rem',
    fontWeight: '400',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  title: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  text: {
    fontFamily: "Libre Baskerville, serif",
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#333',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
  },
  bookNowButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#3b83f6',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: "Libre Baskerville, serif",
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  freeConsultationButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#6c8ff6',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: "Libre Baskerville, serif",
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
};

export default Hero;
