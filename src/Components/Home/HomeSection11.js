import React from 'react';

const HomeSection11 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.line}></div>
     
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#8FBC8F', 
    height: '150px', // Adjust height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '10px',
  },
  line: {
    borderTop: '1px solid #FCFAF4', // Light color for the line
    width: '50%',
    marginRight: '10px',
  },
  buttonContainer: {
    position: 'absolute',
    right: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    border: '1px solid #FCFAF4', // Light color for the border
    color: '#FCFAF4', // Light color for the text
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: "Lora, sans-serif",
    fontSize: '1rem',
    lineHeight: '1.5',
    backgroundColor: 'transparent',
  },
};

export default HomeSection11;