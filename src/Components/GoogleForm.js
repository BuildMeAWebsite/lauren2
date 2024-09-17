import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <div style={{ 
      padding: '1rem 0', 
        backgroundColor: '#fcfaf4', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative',
      zIndex: 100 // Ensure this is higher than the AppBar
    }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf7NaBdfNFzRTJF17ZdeR0fbMFKArZfW7uQl9ODmGF5sGsEGA/viewform?embedded=true"
        width="100%"
      

        height="500px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ 
          border: 'none', 
   
          borderRadius: '1px',
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
