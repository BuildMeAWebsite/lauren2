import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Home3Boxes = () => {
  const textRefs = useRef([]);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const services = [
    {
      title: 'About My Practice',
      backgroundColor: '#FCFAF4', 
      href: '/about', 
    },
    {
      title: 'My Approaches',
      backgroundColor: '#8FBC8F', 
      href: '/approaches', 
    },
    {
      title: 'FAQs',
      backgroundColor: '#2B3D2B', 
      href: '/frequently-asked-questions', 
    },
  ];

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

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#FFD700';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = e.currentTarget.dataset.originalColor;
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleNavigation = (href) => {
    navigate(href); // Navigate to the href link
  };

  return (
    <Grid container spacing={0}>
      {services.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          key={index}
          style={{
            backgroundColor: service.backgroundColor,
            padding: '30px 20px',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            cursor: 'pointer',
          }}
          onClick={() => handleNavigation(service.href)}
        >
          <Typography
            ref={(el) => (textRefs.current[index] = el)}
            variant="h4"
            align="center"
            style={{
              fontFamily: "PT Sans, sans-serif",
              marginBottom: '20px',
              color: service.backgroundColor === '#FCFAF4' ? '#556B2F' : '#fcfaf4',
              transform: 'translateY(100%)',
              opacity: 0,
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
            data-original-color={service.backgroundColor === '#FCFAF4' ? '#556B2F' : '#fcfaf4'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleNavigation(service.href)}
          >
            {service.title}
          </Typography>
          <Button
            href={service.href}
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: '1.25rem',
              color: service.backgroundColor === '#FCFAF4' ? '#546A2F' : '#ffffff',
              textTransform: 'none',
              borderRadius: '0px',
              marginTop: '20px',
              transform: 'translateY(100%)',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
              background: 'transparent',
              outline: 'none',
              boxShadow: 'none',
            }}
            ref={(el) => (textRefs.current[index + services.length * 2] = el)}
          >
            <ArrowForwardIosIcon style={{ fontSize: '1rem', marginLeft: '10px', color: service.backgroundColor === '#FCFAF4' ? '#546A2F' : '#ffffff' }} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home3Boxes;