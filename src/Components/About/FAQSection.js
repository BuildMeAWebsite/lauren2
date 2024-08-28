import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import PropTypes from 'prop-types';

const FAQComponent = ({ questionFontSize = '1.5rem', answerFontSize = '1rem' }) => {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const faqs = [
    [
      {
        title: 'Do you offer in-person therapy sessions?',
        answer: 'At this time no, I offer video sessions. You can also request phone sessions.',
      },
      {
        title: 'Do you offer family or group therapy sessions?',
        answer: 'At this time no, I offer individual sessions only.',
      },
      {
        title: 'Are parents able to join therapy sessions?',
        answer: 'Parent involvement varies based on the needs of the child. I believe in collaboration and may involve parents in certain aspects of therapy to support their child’s progress. This will be assessed ongoing in the therapy sessions.',
      },
      {
        title: 'What is your rate?',
        answer: 'My rate is $170 per session.',
      },
      {
        title: 'What are your hours?',
        answer: 'Currently, I offer therapy sessions in the evening Monday-Friday to accommodate those in school and working. If you prefer another time, I will try my best to accommodate.',
      },
    ],
    [
      {
        title: 'How long are your sessions?',
        answer: 'Each session is scheduled for 60 minutes. We have up to 50 minutes for counseling and 10 minutes are used for documentation and sending resources discussed.',
      },
      {
        title: 'Do you accept insurance?',
        answer: '(see insurance information)',
      },
      {
        title: 'What are the payment options?',
        answer: '(See payment information)',
      },
      {
        title: 'How do I schedule an appointment?',
        answer: 'You can contact me here by email to schedule your initial or returning appointment. (email link)',
      },
      {
        title: 'Can I schedule an appointment if I live or am travelling outside of Ontario?',
        answer: 'Unfortunately, I am only able to offer services to those residing in Ontario and are located in Ontario at the time of our sessions.',
      },
    ],
    [
      {
        title: 'How often are therapy sessions?',
        answer: 'The frequency of therapy sessions depends on individual needs, goals, and budget. Initially, I recommend weekly sessions and then transition to bi-weekly or monthly as progress is made.',
      },
      {
        title: 'How many therapy sessions can I have?',
        answer: 'There is no limit to how many therapy sessions you can have. Some people may be seeking brief support, others may be looking for ongoing support over a longer period of their life.',
      },
      {
        title: 'What can I expect in the first session?',
        answer: 'The first session is an opportunity to get to know you or your child, understand your concerns, and discuss goals for therapy.',
      },
      {
        title: 'I haven’t attended a session in a long time, can I return?',
        answer: 'Absolutely, anytime you feel ready to return, please reach out to schedule your next appointment.',
      },
    ],
  ];

  // Flipped colors: Teal is now on the right, light cream is on the left, and intermediate green in the middle
  const colors = ['#F0EFE6', '#66B3A4', '#01796F']; // Light cream, intermediate green, and teal

  return (
    <Grid container spacing={0}>
      {faqs.map((faqGroup, boxIndex) => (
        <Grid
          item
          xs={12}
          sm={4}
          key={boxIndex}
          style={{
            backgroundColor: colors[boxIndex],
     
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '500px',
          }}
        >
          {faqGroup.map((faq, index) => (
            <div key={index} style={{ width: '100%' }}>
              <Typography
                variant="h5"
                align="left"
                style={{
                  fontFamily: 'PT Sans, sans-serif',
                  marginBottom: '10px',
                  color: boxIndex === 0 ? '#01796F' : '#ffffff', // Adjusted text color based on background
                  cursor: 'pointer',
                  fontSize: questionFontSize, // Question font size
                }}
                onClick={() => handleExpandClick(`${boxIndex}-${index}`)}
              >
                {faq.title}
              </Typography>
              <Collapse in={expanded[`${boxIndex}-${index}`]} timeout="auto" unmountOnExit>
                <Typography
                  variant="body1"
                  align="left"
                  style={{
                    fontFamily: 'PT Sans, sans-serif',
                    color: boxIndex === 0 ? '#01796F' : '#ffffff', // Adjusted text color based on background
                    marginBottom: '20px',
                    fontSize: answerFontSize, // Answer font size
                  }}
                >
                  {faq.answer}
                </Typography>
              </Collapse>
            </div>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

FAQComponent.propTypes = {
  questionFontSize: PropTypes.string,
  answerFontSize: PropTypes.string,
};

export default FAQComponent;
