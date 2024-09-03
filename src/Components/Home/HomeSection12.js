import React from 'react';

const HomeSection12 = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden', // Ensure the content doesn't spill over
  };

  const parallaxStyle = {
    flex: '1 1 70%', // Parallax section takes up 70% of the width
    minWidth: '70%',
    backgroundImage: `url('${process.env.PUBLIC_URL}/Images/treeriver.jpg')`, // Ensure correct image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensures parallax section stays below content
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2, // Ensure overlay stays above the parallax background
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: Add a semi-transparent overlay if needed
  };

  const contentStyle = {
    zIndex: 3, // Ensure content is on top of everything
    backgroundColor: '#fcfaf4',
    padding: '12.5rem 5rem',
    border: '2px solid #8FBC8F',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    maxWidth: '500px',
    margin: 'auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    border: '1px solid #333',
    backgroundColor: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
  };

  const sidebarStyle = {
    flex: '0 0 200px', // Sidebar takes up 30% of the width
    backgroundColor: '#2B3D2B', // Dark green color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    zIndex: 3, // Ensure sidebar is on top
  };

  const verticalLineStyle = {
    height: '80%', // Height of the line relative to the sidebar
    width: '1px',
    backgroundColor: '#FFFFFF', // White color for the line
  };

  return (
    <div style={containerStyle}>
      <div style={parallaxStyle}>
        <div style={overlayStyle}></div> {/* Overlay */}
        <div style={contentStyle}>
          <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>serenity.</p>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>noun</p>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            The state of being calm, peaceful, and untroubled. Discover a space where young minds can find tranquility and clarity, guided by compassionate support.
          </p>
          <button style={buttonStyle}>Learn More</button>
        </div>
      </div>
      <div style={sidebarStyle}>
        <div style={verticalLineStyle}></div>
      </div>
    </div>
  );
};

export default HomeSection12;