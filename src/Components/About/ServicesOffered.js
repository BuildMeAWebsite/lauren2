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

  const services = [
    {
      title: 'Client-Centered Approaches',
      therapies: [
        { name: 'Person-Centred Therapy', description: 'Focuses on the individual’s self-worth and values.' },
        { name: 'Strength-Based Therapy', description: 'Identifies and builds on client strengths.' },
        { name: 'Psychodynamic Therapy', description: 'Explores unconscious patterns influencing behavior.' },
      ],
      backgroundColor: '#01796F', // Teal
      textColor: '#ffffff', // White text for teal background
    },
    {
      title: 'Cognitive and Behavioural Approaches',
      therapies: [
        { name: 'Cognitive Behavioural Therapy', description: 'Changes unhelpful thinking and behavior.' },
        { name: 'Dialectical Behavioural Therapy', description: 'Combines CBT with mindfulness techniques.' },
        { name: 'Acceptance and Commitment Therapy', description: 'Encourages acceptance of thoughts and feelings.' },
      ],
      backgroundColor: '#66B3A4', // Mid-teal
      textColor: '#ffffff', // White text for mid-teal background
    },
    {
      title: 'Emotion and Trauma-Focused Approaches',
      therapies: [
        { name: 'Emotion-Focused Therapy', description: 'Focuses on emotion as the key to change.' },
        { name: 'Compassion-Focused Therapy', description: 'Develops self-compassion to manage emotions.' },
        { name: 'Trauma-Informed Therapy', description: 'Understands and responds to the impact of trauma.' },
      ],
      backgroundColor: '#88C9BB', // Neutral green
      textColor: '#ffffff', // White text for neutral green background
    },
    {
      title: 'Creative and Expressive Approaches',
      therapies: [
        { name: 'Play Therapy', description: 'Uses play to help children express themselves.' },
        { name: 'Art Therapy', description: 'Uses art as a means of communication and expression.' },
        { name: 'Narrative Therapy', description: 'Helps clients rewrite their life stories.' },
      ],
      backgroundColor: '#F0EFE6', // Pastel yellow
      textColor: '#01796F', // Teal text for pastel yellow background
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
            minHeight: '500px',
          }}
        >
          <Typography
            fontSize= '1.25rem'
            align="center"
            style={{
              fontFamily: 'PT Sans, sans-serif',
              marginBottom: '20px',
              color: service.textColor, // Adjusted text color
            }}
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
              borderBottom: `1px solid ${service.textColor}`, // Adjusted border color
              borderRadius: '0px',
            }}
          >
            {expanded[index] ? 'Hide' : 'View'}
          </Button>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <ul style={{ marginTop: '20px', color: service.textColor }}>
              {service.therapies.map((therapy, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <Typography variant="body1" style={{ color: service.textColor }}>
                    {therapy.name}
                  </Typography>
                  <Typography variant="body2" style={{ marginLeft: '20px', fontStyle: 'italic', color: service.textColor }}>
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
