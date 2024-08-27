import React from 'react';

const ContactFormPopout = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    // Close the form if the click is outside the form container
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.formContainer}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <h2 style={styles.heading}>Schedule a 15 Minute Call</h2>
        <form>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL}/Images/couch.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay for transparency
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backgroundBlendMode: 'overlay', // Blend the image with the color for transparency
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with transparency
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '90%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    display: 'block',
    margin: '1rem auto',
    width: '80%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    display: 'block',
    width: '80%',
    margin: '1rem auto',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    height: '100px',
    resize: 'none',
  },
  submitButton: {
    display: 'block',
    width: '80%',
    margin: '1rem auto',
    padding: '12px',
    borderRadius: '5px',
    backgroundColor: '#01796F',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  }
};

export default ContactFormPopout;
