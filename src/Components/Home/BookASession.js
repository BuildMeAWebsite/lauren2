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
        <p style={styles.paragraph}>
        To get started, click the button below to schedule a free, 15-minute introductory call with me. We’ll discuss your availability and preferences, and I’ll work to find the best approach to meet your needs.        </p>
       
       <div
       style = {{
        textAlign: 'center',
       }}
       >

<a
          href="contact"
          style={{
            ...styles.button,
            ...(buttonHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          schedule your introductory call
        </a>

       </div>
       
    
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally

    padding: '50px',
    backgroundColor: '#fcfaf4', // Dark background color
    color: '#2B3D2B', // Light text color
    fontFamily: "Lora, sans-serif",
  },
  rightColumn: {
    flex: 1,
    maxWidth: '600px', // Limit the width of the text content for better readability
  },
  header: {
    fontSize: '2rem',
    fontFamily: "Quicksand, sans-serif",
    lineHeight: '1',
    color : '#8FBC8F',
    margin: '10px auto',
    fontWeight: 'normal',
  },
  paragraph: {
    fontFamily: "Quicksand, sans-serif",
    lineHeight: '1.75',
    fontSize: '1.25rem',
    margin: '1rem auto',
  },
  button: {
    fontFamily: "Lora, sans-serif",
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',

    fontWeight: '300',
    display: 'inline-block',
    padding: '10px 30px',
    border: '1.25px solid #8FBC8F',
    color: '#2B3D2B',
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '0.88rem',
    margin: '1rem auto',
    textAlign: 'right',
    transition: 'color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
  },
  buttonHover: {
    color: '#FFD700', // Yellow text color on hover
    borderColor: '#FFD700', // Yellow border color on hover
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
  faq: {
    fontSize: '1rem',
  },
  link: {
    color: '#2B3D2B',
    textDecoration: 'underline',
  },
};

export default HomeSection7;