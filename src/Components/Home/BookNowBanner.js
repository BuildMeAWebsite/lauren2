import React from 'react';

const BookNowBanner = () => {
  return (
    <div style={styles.bannerContainer}>
      <a href="/booking" style={styles.bookNowButton}>
        Book Now
      </a>
    </div>
  );
};

const styles = {
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent', // Transparent background
  },
  bookNowButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
    transition: 'background-color 0.3s',
  },
  bookNowButtonHover: {
    backgroundColor: '#555',
  },
};

export default BookNowBanner;
