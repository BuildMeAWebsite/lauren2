import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

const CounselingServices = () => {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#FFD700'; // Yellow on hover
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the text
    e.currentTarget.style.cursor = 'pointer'; // Show hand cursor on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = e.currentTarget.dataset.originalColor; // Revert to original color
    e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
  };

  const services = [
    {
      title: 'Client-Centered Approaches',
      therapies: [
        { name: 'Person-Centred Therapy', description: 'Focuses on the individual’s self-worth and values.' },
        { name: 'Strength-Based Therapy', description: 'Identifies and builds on client strengths.' },
        { name: 'Psychodynamic Therapy', description: 'Explores unconscious patterns influencing behaviour.' },
      ],
      backgroundColor: '#FCFAF4', // Light Cream
      textColor: '#556B2F', // Olive Green
    },
    {
      title: 'Cognitive and Behavioural Approaches',
      therapies: [
        { name: 'Cognitive Behavioural Therapy', description: 'Changes unhelpful thinking and behaviour.' },
        { name: 'Dialectical Behavioural Therapy', description: 'Combines CBT with mindfulness techniques.' },
        { name: 'Acceptance and Commitment Therapy', description: 'Encourages acceptance of thoughts and feelings.' },
      ],
      backgroundColor: '#D1BFA9', // Desaturated Beige
      textColor: '#FCFAF4', // Cream
    },
    {
      title: 'Emotion and Trauma-Focused Approaches',
      therapies: [
        { name: 'Emotion-Focused Therapy', description: 'Focuses on emotion as the key to change.' },
        { name: 'Compassion-Focused Therapy', description: 'Develops self-compassion to manage emotions.' },
        { name: 'Trauma-Informed Therapy', description: 'Understands and responds to the impact of trauma.' },
      ],
      backgroundColor: '#B2C2A1', // Muted Sage
      textColor: '#FCFAF4', // Cream
    },
    {
      title: 'Creative and Expressive Approaches',
      therapies: [
        { name: 'Play Therapy', description: 'Uses play to help children express themselves.' },
        { name: 'Art Therapy', description: 'Uses art as a means of communication and expression.' },
        { name: 'Narrative Therapy', description: 'Helps clients rewrite their life stories.' },
      ],
      backgroundColor: '#8FBC8F', // Soft Green
      textColor: '#FCFAF4', // Cream Text
    },
  ];

  return (
    <Grid container spacing={0}>
      {services.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          key={index}
          style={{
            backgroundColor: service.backgroundColor,
            padding: '1rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',

            minHeight: '500px',
          }}
        >
          <Typography
            fontSize='1.25rem'
            align="center"
            style={{
              fontFamily: 'PT Sans, sans-serif',
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',

              marginBottom: '20px',
              color: service.textColor, // Adjusted text color
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
              cursor: 'pointer',
            }}
            data-original-color={service.textColor} // Store original color
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {service.title}
          </Typography>
          <Button
            onClick={() => handleExpandClick(index)}
            style={{
              fontFamily: 'PT Sans, sans-serif',
              fontSize: '1rem',
              color: service.textColor, // Adjusted text color
              textTransform: 'none',
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',

              borderBottom: `1px solid ${service.textColor}`, // Adjusted border color
              borderRadius: '0px',
              cursor: 'pointer',
              background: 'transparent', // Ensure no background color
              outline: 'none', // Remove any outline that may appear
              boxShadow: 'none', // Remove any box shadow that may appear
              transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
            data-original-color={service.textColor} // Store original color
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {expanded[index] ? 'Hide' : 'View'}
          </Button>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <ul style={{ marginTop: '20px', color: service.textColor }}>
              {service.therapies.map((therapy, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <Typography
                    variant="body1"
                    style={{
                      color: service.textColor,
                      transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
                      cursor: 'pointer',
                    }}
                    data-original-color={service.textColor} // Store original color
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {therapy.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      marginLeft: '20px',
                      fontStyle: 'italic',
                      color: service.textColor,
                      transition: 'color 0.5s ease-in-out, transform 0.5s ease-in-out',
                      cursor: 'pointer',
                    }}
                    data-original-color={service.textColor} // Store original color
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {therapy.description}
                  </Typography>
                </li>
              ))}
            </ul>
          </Collapse>
        </Grid>
      ))}
    </Grid>
  );
};

export default CounselingServices;