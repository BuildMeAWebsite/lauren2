import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextBanner from '../About/TextBanner';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Collapse from '@mui/material/Collapse';

const WhatToExpect = () => {
  const textRefs = useRef([]);
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const expectations = [
    {
      title: 'Introduction and Assessment',
      description: 'During the initial session, we will discuss your concerns, goals, and expectations. This is a crucial step to understand your needs and create a tailored approach to address them.',
      dropdownText: `In our 15-minute introductory call, we’ll explore your reasons for starting therapy and determine if we're a good fit. The first session will gather information about your background, life situation, and goals. We'll also discuss consent, confidentiality, fees, and cancellation policies.`,
      backgroundColor: '#FCFAF4',
      textColor: '#556B2F',
    },
    {
      title: 'Personalized Approach',
      description: 'Based on the assessment, we will develop a personalized approach to your situation. This may involve different strategies and techniques aimed at achieving your desired outcomes.',
      dropdownText: `Your therapy session is your space to discuss what matters most to you. I’ll support and listen without judgment, sometimes summarizing our progress or checking in on how you felt last time. Together, we'll identify goals and areas to improve. Therapy is a collaborative process, and I may suggest strategies or assignments to help you build new skills between sessions.`,
      backgroundColor: '#D1BFA9',
      textColor: '#FCFAF4',
    },
    {
      title: 'Ongoing Support and Feedback',
      description: 'As we progress, regular sessions will be held to monitor your progress, make adjustments as needed, and ensure you feel supported throughout the process.',
      dropdownText: `As you gain self-awareness and practical tools, you may feel relief and confidence, though progress can sometimes be uneven. The strength of our relationship is key to success, so reflect on how safe and supported you feel. Sessions are usually weekly, but we can adjust the frequency as you progress. Some continue therapy for ongoing support, which we can discuss based on your needs.`,
      backgroundColor: '#8FBC8F',
      textColor: '#FCFAF4',
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
    e.currentTarget.style.color = e.currentTarget.getAttribute('data-original-color');
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div>
      <TextBanner text="What To Expect" padding="5rem" backgroundColor="#fcfaf4" textColor="#546A2F" />
      <Grid container spacing={0}>
        {expectations.map((expectation, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={index}
            style={{
              backgroundColor: expectation.backgroundColor,
              padding: '1rem 5rem',
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
                color: expectation.textColor,
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
                cursor: 'pointer',
              }}
              data-original-color={expectation.textColor}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleExpandClick(index)}
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
                color: expectation.textColor,
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
                cursor: 'pointer',
              }}
              data-original-color={expectation.textColor}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {expectation.description}
            </Typography>
            <Button
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1rem',
                color: expectation.textColor,
                textTransform: 'none',
                borderRadius: '0px',
                marginTop: '20px',
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                outline: 'none',
                boxShadow: 'none',
                border: 'none',
              }}
              ref={(el) => (textRefs.current[index + expectations.length * 2] = el)}
              data-original-color={expectation.textColor}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleExpandClick(index)}
              onFocus={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Learn More
              <ArrowForwardIosIcon
                style={{
                  fontSize: '1rem',
                  marginLeft: '10px',
                  color: expectation.textColor,
                  transition: 'transform 0.3s ease',
                  transform: expanded[index] ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </Button>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <Typography
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: '1rem',
                  marginTop: '15px',
                  color: expectation.textColor,
                  textAlign: 'left',
                }}
              >
                {expectation.dropdownText}
              </Typography>
            </Collapse>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WhatToExpect;