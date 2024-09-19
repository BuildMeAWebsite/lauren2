import React from 'react';

const HomeSection11ColorChange = ({ backgroundColor = '#2b3d2b', lineColor = '#FCFAF4' }) => {
  return (
    <div style={{ ...styles.container, backgroundColor }}>
      <div style={{ ...styles.line, borderTop: `1px solid ${lineColor}` }}></div>
    </div>
  );
};

const styles = {
  container: {
    height: '100px', // Adjust height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '10px',
  },
  line: {
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
    border: '1.5px solid #FCFAF4', // Light color for the border
    color: '#FCFAF4', // Light color for the text
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: "Lora, sans-serif",
    fontSize: '1rem',
    lineHeight: '1.5',
    backgroundColor: 'transparent',
  },
};

export default HomeSection11ColorChange;