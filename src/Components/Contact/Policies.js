import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextBanner from '../About/TextBanner';

const Policies = () => {
  const textRefs = useRef([]);

  const sections = [
    {
      title: 'Payment & Insurance Information',
      description: `
        E-transfer is the preferred payment method to be paid at the time the session is held. A credit card will also be saved to your file at the start of therapy, as an alternative method and for any outstanding fees. Receipts are sent promptly by email. I do not bill insurance companies. My therapist’s license number is on the receipt for insurance purposes. Insurance plans differ in what they cover, so please contact your specific provider to verify your coverage for Registered Psychotherapist, for coverage details, and claim procedures.
      `,
      backgroundColor: '#8FBC8F',
      textColor: '#FCFAF4',
    },
    {
      title: 'Cancellation Policy',
      description: `
        I have a 24-hour cancellation policy. Appointments can be cancelled or rescheduled via email. Providing less than 24 hours notice will result in being charged the full session fee. This fee may be waived in emergency situations.
      `,
      backgroundColor: '#FCFAF4',
      textColor: '#546A2F',
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

  const handleTextMouseEnter = (e) => {
    e.currentTarget.style.color = '#FFD700';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleTextMouseLeave = (e) => {
    e.currentTarget.style.color = e.currentTarget.getAttribute('data-original-color');
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div>
      <TextBanner text="Policies" padding="4rem" backgroundColor="#FCFAF4" textColor="#546A2F" />
      <Grid container spacing={0}>
        {sections.map((section, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            style={{
              backgroundColor: section.backgroundColor,
              padding: '3rem 4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '100%',
            }}
          >
            <Typography
              ref={(el) => (textRefs.current[index] = el)}
              variant="h4"
              align="center"
              style={{
                fontFamily: "PT Sans, sans-serif",
                marginBottom: '2rem',
                color: section.textColor,
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 0.25s ease-in-out, color 0.25s ease-in-out',
                cursor: 'pointer',
              }}
              data-original-color={section.textColor}
              onMouseEnter={handleTextMouseEnter}
              onMouseLeave={handleTextMouseLeave}
            >
              {section.title}
            </Typography>
            <Typography
              ref={(el) => (textRefs.current[index + sections.length] = el)}
              variant="body1"
              align="center"
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: '1rem',
                color: section.textColor,
                transform: 'translateY(100%)',
                opacity: 0,
                transition: 'transform 0.5s ease-in-out, color 0.5s ease-in-out',
                cursor: 'pointer',
              }}
              data-original-color={section.textColor}
              onMouseEnter={handleTextMouseEnter}
              onMouseLeave={handleTextMouseLeave}
            >
              {section.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Policies;