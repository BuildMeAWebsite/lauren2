import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home3Boxes = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element

  const services = [
    {
      title: 'About My Practice',
      backgroundColor: '#FCFAF4', // Light cream color for the left box
    },
    {
      title: 'My Approaches',
      backgroundColor: '#339991', // Teal-green for the middle box
    },
    {
      title: 'FAQs',
      backgroundColor: '#01796F', // Deep teal for the right box
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
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

  return (
    <Grid container spacing={0}>
      {services.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          style={{
            backgroundColor: service.backgroundColor,
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '500px',
          }}
        >
          <Typography
            ref={(el) => (textRefs.current[index] = el)}
            variant="h4"
            align="center"
            style={{
              fontFamily: "PT Sans, sans-serif",
              marginBottom: '20px',
              color: service.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
              transform: 'translateY(100%)', // Start off-screen at the bottom
              opacity: 0, // Start invisible
            }}
          >
            {service.title}
          </Typography>
          <Typography
            ref={(el) => (textRefs.current[index + services.length] = el)}
            variant="body1"
            align="center"
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: '1rem',
              color: service.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
              transform: 'translateY(100%)', // Start off-screen at the bottom
              opacity: 0, // Start invisible
            }}
          >
            {service.description}
          </Typography>
          <Button
            href="#"
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: '1rem',
              color: service.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
              textTransform: 'none',
              borderRadius: '0px',
              marginTop: '20px',
              transform: 'translateY(100%)', // Start off-screen at the bottom
              opacity: 0, // Start invisible
              display: 'flex',
              alignItems: 'center',
            }}
            ref={(el) => (textRefs.current[index + services.length * 2] = el)}
          >
            <ArrowForwardIosIcon style={{ fontSize: '1rem' }} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home3Boxes;
