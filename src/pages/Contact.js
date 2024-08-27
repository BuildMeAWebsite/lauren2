import React, { useState } from 'react';
import ParallaxSection from '../Components/Home/ParallaxSection';
import WhatToExpectComponent from '../Components/Contact/WhatToExpect';
import SplittingImageText from '../Components/Contact/ContactOverlapSection';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOverlayClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
       <SplittingImageText/>
          <WhatToExpectComponent /> {/* Add WhatToExpect component */}
     
      </ParallaxSection>

      {showModal && (
        <div style={styles.modalOverlay} onClick={handleOverlayClick}>
          <div style={styles.modal}>
            <h2 style={styles.modalHeader}>Book an Appointment</h2>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input type="text" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input type="tel" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Date & Time</label>
                <input type="datetime-local" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Additional Notes</label>
                <textarea style={styles.textarea}></textarea>
              </div>
              
              {/* Payment & Insurance Info */}
              <div style={styles.disclaimerContainer}>
                <h3 style={styles.subHeader}>Payment & Insurance Information</h3>
                <p style={styles.text}>
                  E-transfer is the preferred payment method to be paid at the time the session is held. A credit card will also be saved to your file at the start of therapy, as an alternative method and for any outstanding fees. Receipts are sent promptly by email. I do not bill insurance companies. My therapist’s license number is on the receipt for insurance purposes. Insurance plans differ in what they cover, so please contact your specific provider to verify your coverage for Registered Psychotherapist, for coverage details, and claim procedures.
                </p>
                <h3 style={styles.subHeader}>Cancellation Policy</h3>
                <p style={styles.text}>
                  I have a 24-hour cancellation policy. Appointments can be cancelled or rescheduled via email or through the booking software. Providing less than 24 hours notice will result in being charged the full session fee. This fee may be waived in emergency situations.
                </p>
              </div>

              <div style={styles.buttonContainer}>
                <button type="submit" style={styles.submitButton}>Submit</button>
                <button type="button" onClick={toggleModal} style={styles.cancelButton}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  text: {
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  infoSection: {
    marginBottom: '30px',
  },
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
  disclaimerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
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
    paddingTop: '20vh', // Increased top padding to ensure the modal is positioned further down
  },

  modal: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh', // Set a maximum height
    overflowY: 'auto', // Enable vertical scrolling if content overflows
    boxSizing: 'border-box',
    margin: '0 20px', 
  },

  // Adjust input fields to reduce size if needed
  input: {
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
  },

  textarea: {
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
    height: '80px', // Adjust height for better fit
    resize: 'none',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '5px',
  },


  submitButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#3b83f6',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Libre Baskerville, serif',
    transition: 'background-color 0.3s',
    marginRight: '10px',
  },
  cancelButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    color: '#333',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Libre Baskerville, serif',
    transition: 'background-color 0.3s',
    marginLeft: '10px',
  },
};


export default Contact;

