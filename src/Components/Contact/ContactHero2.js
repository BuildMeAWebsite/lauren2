import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GoogleFormEmbed from '../GoogleForm';
import { useNavigate } from 'react-router-dom'; 

const ContactHero2 = () => {
  const textRefs = useRef([]); 
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transition = `transform 1s ease-in-out ${index * 0.1}s, opacity 1s ease-in-out ${index * 0.1}s`;
        ref.style.transform = 'translateY(0)';
        ref.style.opacity = '1';
      }
    });
  }, []);

  const handleButtonClick = () => {
    navigate('/contact-form');
  };

  const handleImageMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <Grid container spacing={0} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: '2rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCFAF4',
          minHeight: '70vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px', // Limit the width of the image container
            margin: '0 auto', // Center on smaller screens
            display: 'flex',
            justifyContent: 'flex-end', // Align image to the right on large screens
          }}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/contactimage.jpg`}
            alt="Contact Us"
            style={{
              width: '100%',
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
              opacity: isImageHovered ? 0 : 0.3,
              transition: 'opacity 0.3s ease-in-out',
            }}
          ></div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: isFormVisible ? '1px' : '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fcfaf4',
          minHeight: '400px',
          transition: 'padding 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '500px', // Limit the width of the text container
            width: '100%',
            textAlign: 'left', // Align text to the left on large screens
            margin: '0 auto', // Center the text container on smaller screens
          }}
        >
          {isFormVisible ? (
            <GoogleFormEmbed />
          ) : (
            <>
              <Typography
                variant="h5"
                align="left"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  marginBottom: '20px',
                  color: '#8FBC8F',
                  transform: 'translateY(100%)',
                  opacity: 0,
                  transition: 'transform 1s ease-in-out, opacity 1s ease-in-out, color 0.5s ease-in-out',
                }}
                ref={(el) => (textRefs.current[1] = el)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8FBC8F';
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
                  color: '#8FBC8F',
                  textTransform: 'none',
                  borderRadius: '0px',
                  transform: 'translateY(100%)',
                  opacity: 0,
                  transition: 'transform 1s ease-in-out, opacity 1s ease-in-out, color 0.5s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: 'transparent',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                ref={(el) => (textRefs.current[2] = el)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8FBC8F';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Contact
                <ArrowForwardIosIcon style={{ fontSize: '1rem', marginLeft: '10px', color: '#8FBC8F' }} />
              </Button>
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactHero2;