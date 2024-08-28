import React from 'react';
import WhatToExpectComponent from '../Components/Contact/WhatToExpect';
import SplittingImageText from '../Components/Contact/ContactOverlapSection';
import GoogleFormEmbed from '../Components/GoogleForm';

const Contact = ({ isFormOpen, handleFormClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleFormClose();
    }
  };

  return (
    <>
        <SplittingImageText />
        <WhatToExpectComponent />
      

      {isFormOpen && (
        <div style={styles.modalOverlay} onClick={handleOverlayClick}>
          <div style={styles.modal}>
            <button onClick={handleFormClose} style={styles.closeButton}>Close</button>
            <GoogleFormEmbed />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  buttonContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  bookNowButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#3b83f6',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Libre Baskerville, serif',
    transition: 'background-color 0.3s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    paddingTop: '20vh',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '80%',
    width: '100%',
    boxSizing: 'border-box',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
  },
};

export default Contact;
