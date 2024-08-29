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
      href: '/about', // Link for the first box
    },
    {
      title: 'My Approaches',
      backgroundColor: '#D1BFA9', // Desaturated Beige for the middle box (smooth transition)
      href: '/approaches', // Link for the second box
    },
    {
      title: 'FAQs',
      backgroundColor: '#8FBC8F', // Soft green for the right box
      href: '/frequently-asked-questions', // Link for the third box
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

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#FFD700';
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the text
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = e.currentTarget.dataset.originalColor;
    e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
  };

  return (
    <Grid container spacing={0}>
      {services.map((service, index) => (
        <Grid
          item
          xs={12} // Always full width on extra small screens
          sm={12} // Full width on small screens (no 2 across)
          md={4} // 3 across on medium and larger screens
          key={index}
          style={{
            backgroundColor: service.backgroundColor,
            padding: '30px 20px',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
          }}
        >
          <Typography
            ref={(el) => (textRefs.current[index] = el)}
            variant="h4"
            align="center"
            style={{
              fontFamily: "PT Sans, sans-serif",

              marginBottom: '20px',
              color: service.backgroundColor === '#FCFAF4' ? '#556B2F' : '#fcfaf4', // Text color based on background
              transform: 'translateY(100%)', // Start off-screen at the bottom
              opacity: 0, // Start invisible
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition for color and scale change
              cursor: 'pointer', // Set cursor to pointer
            }}
            data-original-color={service.backgroundColor === '#FCFAF4' ? '#556B2F' : '#fcfaf4'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {service.title}
          </Typography>
          <Button
            href={service.href} // Set the correct link for each button
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: '1.25rem',
              color: service.backgroundColor === '#FCFAF4' ? '#546A2F' : '#ffffff', // Text color based on background
              textTransform: 'none',
              borderRadius: '0px',
              marginTop: '20px',
              transform: 'translateY(100%)', // Start off-screen at the bottom
              opacity: 0, // Start invisible
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer', // Set cursor to pointer for the button
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition for color and scale change
              background: 'transparent', // Ensure no background change
              outline: 'none', // Remove any outline that may appear on focus or click
              boxShadow: 'none', // Remove any box shadow that may appear
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