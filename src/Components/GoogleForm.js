import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <div style={{ 
      paddingTop: '150px', 
     
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative',
      zIndex: 1300 // Ensure this is higher than the AppBar
    }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf7NaBdfNFzRTJF17ZdeR0fbMFKArZfW7uQl9ODmGF5sGsEGA/viewform?embedded=true"
        width="80%"
        height="700px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ 
          border: 'none', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px',
          position: 'relative',
          zIndex: 1300 // Ensure this is also higher than the AppBar
        }}
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed;
