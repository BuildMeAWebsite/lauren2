import React, { useState } from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  const handleTitleMouseEnter = () => setHoveredTitle(true);
  const handleTitleMouseLeave = () => setHoveredTitle(false);

  return (
    <Box sx={styles.container}>
      {/* Centered Title */}
      <Box sx={styles.centeredTitle}>
        <Box sx={styles.titleCard}>
          <Typography
            variant="h2"
            sx={{
              ...styles.title,
              color: hoveredTitle ? '#FFD700' : '#2b2d2b',
              transition: 'color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={handleTitleMouseEnter}
            onMouseLeave={handleTitleMouseLeave}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        <hr style={styles.line} />
      </Box>

      {/* Grid Container for FAQ Items */}
      <Grid container spacing={5} justifyContent="center">
        {faqs.map((faqSection, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={styles.faqSection}>
              {faqSection.map((faqItem, idx) => (
                <Accordion key={idx} sx={styles.accordion} disableGutters>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionSummary}>
                    <Typography variant="h5" sx={styles.question}>
                      {faqItem.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={styles.accordionDetails}>
                    <Typography sx={styles.answer} dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Sample FAQ Data
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
      answer:
        'Parent involvement varies based on the needs of the child. I believe in collaboration and may involve parents in certain aspects of therapy to support their child’s progress. This will be assessed ongoing in the therapy sessions.',
    },
    {
      title: 'What is your rate?',
      answer: 'My rate is $170 per session.',
    },
    {
      title: 'What are your hours?',
      answer:
        'Currently, I offer therapy sessions in the evening Monday-Friday to accommodate those in school and working. If you prefer another time, I will try my best to accommodate.',
    },
    {
      title: 'How long are your sessions?',
      answer:
        'Each session is scheduled for 60 minutes. We have up to 50 minutes for counseling and 10 minutes are used for documentation and sending resources discussed.',
    },
    {
      title: 'Do you accept insurance?',
      answer: '(see policy information below)',
    },
    {
      title: 'What are the payment options?',
      answer: '(see policy information below)',
    },
    {
      title: 'How do I schedule an appointment?',
      answer:
        'You can contact me <a href="mailto:info@laurenmartyntherapy.ca" style="text-decoration: underline; color: inherit;">here</a> by email to schedule your initial or returning appointment.',
    },
    {
      title: 'Can I schedule an appointment if I live or am travelling outside of Ontario?',
      answer:
        'Unfortunately, I am only able to offer services to those residing in Ontario and are located in Ontario at the time of our sessions.',
    },
    {
      title: 'How often are therapy sessions?',
      answer:
        'The frequency of therapy sessions depends on individual needs, goals, and budget. Initially, I recommend weekly sessions and then transition to bi-weekly or monthly as progress is made.',
    },
    {
      title: 'How many therapy sessions can I have?',
      answer:
        'There is no limit to how many therapy sessions you can have. Some people may be seeking brief support, others may be looking for ongoing support over a longer period of their life.',
    },
    {
      title: 'What can I expect in the first session?',
      answer:
        'The first session is an opportunity to get to know you or your child, understand your concerns, and discuss goals for therapy.',
    },
    {
      title: 'I haven’t attended a session in a long time, can I return?',
      answer: 'Absolutely, anytime you feel ready to return, please reach out to schedule your next appointment.',
    },
  ],
];

const styles = {
  container: {
    padding: '1rem 2rem',
    fontFamily: "'Lora', sans-serif",
    maxWidth: '100%',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      padding: '50px 40px',
    },
    '@media (max-width: 800px)': {
      padding: '40px 30px',
    },
    '@media (max-width: 600px)': {
      padding: '30px 20px',
    },
    '@media (max-width: 450px)': {
      padding: '20px 15px',
    },
  },
  centeredTitle: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  titleCard: {
    padding: '1rem 2rem',
    maxWidth: '40%',
    margin: '0 auto',
    backgroundColor: '#fcfaf4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #2b2d2b',
    borderRadius: '0px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.75rem',
    lineHeight: '1.2',
    marginBottom: '0',
    fontFamily: "'Georgia', serif",
  },
  line: {
    borderTop: '1.25px solid #8FBC8F',
    width: '50%',
    margin: '0 auto',
    marginTop: '20px',
    '@media (max-width: 800px)': {
      width: '75%',
    },
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  faqSection: {
    marginBottom: '50px',
  },
  accordion: {
    marginBottom: '15px',
  },
  accordionSummary: {
    backgroundColor: '#fcfaf4',
    transition: 'none', // Ensure no background transition occurs
  },
  question: {
    fontFamily: "'Lora', sans-serif",
  },
  accordionDetails: {
    backgroundColor: '#fcfaf4',
  },
  answer: {
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
  },
};

export default FAQSection;