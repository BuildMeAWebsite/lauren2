import React from 'react';
import Grid from '@mui/material/Grid';
import WhatToExpectComponent from '../Components/Contact/WhatToExpect';
import GoogleFormEmbed from '../Components/GoogleForm';
import ContactHero2 from '../Components/Contact/ContactHero2';
import Hero from '../Components/Contact/ContactHero';

const Contact = ({ isFormOpen, handleFormClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleFormClose();
    }
  };

  return (
    <>
  

      <Grid container spacing={0} style={{paddingTop: '5rem'}}>
      <Grid item xs={12}>
          <Hero />
        </Grid>
        
      <Grid item xs={12}>
          <ContactHero2 />
        </Grid>
        <Grid item xs={12}  >
          <WhatToExpectComponent />
        </Grid>
    
      </Grid>

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
  gridContainer: {
    padding: '0rem',
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
    position: 'relative',
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
