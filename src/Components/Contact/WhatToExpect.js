import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextBanner from '../About/TextBanner';


const WhatToExpect = () => {
  const textRefs = useRef([]); // Use refs to keep track of each text element

  const expectations = [
    {
      title: 'Introduction and Assessment',
      description: 'During the initial session, we will discuss your concerns, goals, and expectations. This is a crucial step to understand your needs and create a tailored approach to address them.',
      backgroundColor: '#FCFAF4', // Light cream color for the left box
    },
    {
      title: 'Personalized Approach',
      description: 'Based on the assessment, we will develop a personalized approach to your situation. This may involve different strategies and techniques aimed at achieving your desired outcomes.',
      backgroundColor: '#339991', // Teal-green for the middle box
    },
    {
      title: 'Ongoing Support and Feedback',
      description: 'As we progress, regular sessions will be held to monitor your progress, make adjustments as needed, and ensure you feel supported throughout the process.',
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
    <div>
      <TextBanner text="What To Expect" padding = '5rem' />
      <Grid container spacing={0}>
        {expectations.map((expectation, index) => (
          <Grid
            item
            xs={12} // Always full width on extra small screens
            sm={12} // Full width on small screens (no 2 across)
            md={4} // 3 across on medium and larger screens
            key={index}
            style={{
              backgroundColor: expectation.backgroundColor,
              padding: '3rem 5rem',
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
                color: expectation.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
                transform: 'translateY(100%)', // Start off-screen at the bottom
                opacity: 0, // Start invisible
              }}
            >
              {expectation.title}
            </Typography>
            <Typography
              ref={(el) => (textRefs.current[index + expectations.length] = el)}
              variant="body1"
              align="center"
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1rem',
                color: expectation.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
                transform: 'translateY(100%)', // Start off-screen at the bottom
                opacity: 0, // Start invisible
              }}
            >
              {expectation.description}
            </Typography>
            <Button
              href="#"
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1rem',
                color: expectation.backgroundColor === '#FCFAF4' ? '#01796F' : '#ffffff', // Text color based on background
                textTransform: 'none',
                borderRadius: '0px',
                marginTop: '20px',
                transform: 'translateY(100%)', // Start off-screen at the bottom
                opacity: 0, // Start invisible
                display: 'flex',
                alignItems: 'center',
              }}
              ref={(el) => (textRefs.current[index + expectations.length * 2] = el)}
            >
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WhatToExpect;
