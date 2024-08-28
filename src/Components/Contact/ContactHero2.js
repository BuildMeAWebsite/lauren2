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
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    textRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
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
          backgroundColor: '#FCFAF4',
          minHeight: '70vh',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/path/to/your/image.jpg`} // Replace with your actual image path
          alt="Contact Us"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            transform: 'translateY(100%)',
            opacity: 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
          }}
          ref={(el) => (textRefs.current[0] = el)}
        />
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
          backgroundColor: '#339991',
          minHeight: '400px',
          transition: 'padding 0.3s ease', // Smooth transition for padding change
        }}
      >
        {isFormVisible ? (
          <GoogleFormEmbed />
        ) : (
          <>
            <Typography
              variant="h4"
              align="center"
              style={{
                fontFamily: "PT Sans, sans-serif",
                marginBottom: '20px',
                color: '#ffffff',
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
              }}
              ref={(el) => (textRefs.current[1] = el)}
            >
              Let’s connect for a quick 15-minute chat to explore how I can help, answer your questions, and guide you through the next steps to booking
            </Typography>
            <Button
              onClick={handleButtonClick}
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1.2rem',
                color: '#ffffff',
                textTransform: 'none',
                borderRadius: '0px',
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                display: 'flex',
                alignItems: 'center',
              }}
              ref={(el) => (textRefs.current[2] = el)}
            >
              Contact
              <ArrowForwardIosIcon style={{ fontSize: '1rem', marginLeft: '10px' }} />
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactHero2;
