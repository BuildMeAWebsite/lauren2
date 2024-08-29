import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GoogleFormEmbed from '../GoogleForm';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const ContactHero2 = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
  const navigate = useNavigate(); // Create a navigate instance for navigation

  useEffect(() => {
    // Directly trigger the animation on page load
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transition = `transform 1s ease-in-out ${index * 0.1}s, opacity 1s ease-in-out ${index * 0.1}s`;
        ref.style.transform = 'translateY(0)';
        ref.style.opacity = '1';
      }
    });
  }, []);

  const handleButtonClick = () => {
    navigate('/contact-form'); // Use navigate to go to the contact form route
  };

  return (
    <Grid container spacing={0} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: '5rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCFAF4', // Cream background
          minHeight: '80vh',
        }}
      >
     <div style={{ position: 'relative', width: '60%' }}>
  <img
    src={`${process.env.PUBLIC_URL}/Images/contactfern.jpg`} // Replace with your actual image path
    alt="Contact Us"
    style={{
      maxWidth: '100%',
      height: 'auto',
      transform: 'translateY(100%)',
      opacity: 0,
      transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
    }}
    ref={(el) => (textRefs.current[0] = el)}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#fcfaf4',
      opacity: 0.3, // Adjust opacity for the fade effect
    }}
  ></div>
</div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: isFormVisible ? '1px' : '3rem 2rem', // Adjust padding based on form visibility
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8FBC8F', // Soft green background
          minHeight: '400px',
          transition: 'padding 0.3s ease', // Smooth transition for padding change
        }}
      >
        {isFormVisible ? (
          <GoogleFormEmbed />
        ) : (
          <>
            <Typography
              variant="h5"
              align="center"
              style={{
                fontFamily: "PT Sans, sans-serif",
                marginBottom: '20px',
                color: '#FCFAF4', // Cream text color
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out, color 0.5s ease-in-out',
              }}
              ref={(el) => (textRefs.current[1] = el)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700'; // Yellow on hover
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FCFAF4'; // Revert to cream
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Let’s connect for a quick 15-minute chat to explore how I can help, answer your questions, and guide you through the next steps to booking.
            </Typography>
            <Button
              onClick={handleButtonClick}
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1.2rem',
                color: '#FCFAF4', // Cream text color
                textTransform: 'none',
                borderRadius: '0px',
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out, color 0.5s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                background: 'transparent', // Ensure no background change
                outline: 'none', // Remove any outline that may appear on focus or click
                boxShadow: 'none', // Remove any box shadow that may appear
              }}
              ref={(el) => (textRefs.current[2] = el)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700'; // Yellow on hover
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FCFAF4'; // Revert to cream
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Contact
              <ArrowForwardIosIcon style={{ fontSize: '1rem', marginLeft: '10px', color: '#FCFAF4' }} />
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactHero2;