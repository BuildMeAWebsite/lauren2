import React, { useState } from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  const handleTitleMouseEnter = () => setHoveredTitle(true);
  const handleTitleMouseLeave = () => setHoveredTitle(false);

  return (
    <Box sx={styles.container}>
      <Grid container spacing={0} justifyContent="center">
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

const faqs = [
  [
    {
      title: 'What is the cost per session?',
      answer: 'My rate is $180 per 50 minute session.',
    },
    {
      title: 'Do you accept insurance?',
      answer: 'I do not bill insurance companies directly. You will receive a receipt to submit to your insurer after each session.',
    },
    {
      title: 'What are the payment options?',
      answer: 'I accept E-transfers and credit card payments.',
    },
    {
      title: 'What are your hours?',
      answer:
        'Currently, I offer therapy sessions in the evening Monday-Friday to accommodate those in school and working. If you prefer another time, I will try my best to accommodate.',
    },
    {
      title: 'How long are your sessions?',
      answer:
        'Each session is 50 minutes long. Appointments will be scheduled for 60 minutes to allow time for documentation and resource sending after the session is completed.',
    },
    {
      title: 'How do I schedule an appointment?',
      answer:
        'You can contact me <a href="mailto:laurenmpsychotherapy@gmail.com" style="text-decoration: underline; color: inherit;">here</a> by email to schedule your initial or returning appointment.',
    },
    {
      title: 'What can I expect in the first session?',
      answer:
        'The first session is an opportunity to begin to get to know each other, review the consent and confidentiality form, begin to understand your reasons for seeking support, and discuss your hopes for therapy.',
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
      title: 'Can I schedule an appointment if I live or am travelling outside of Ontario?',
      answer:
        'Unfortunately, I am only able to offer services to those residing in Ontario and are located in Ontario at the time of our sessions.',
    },
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
      title: 'I haven’t attended a session in a long time, can I return?',
      answer: 'Absolutely, anytime you feel ready to return, please reach out to schedule your next appointment.',
    },
  ],
];

const styles = {
  container: {
    fontFamily: "Quicksand, sans-serif",
    maxWidth: '100%',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      padding: '2rem',
      margin: '0 auto',
    },
    '@media (max-width: 800px)': {
      padding: '2rem',
      margin: '0 auto',
    },
    '@media (max-width: 600px)': {
      padding: '2.5rem',
      margin: '0 auto',
    },
    '@media (max-width: 450px)': {
      padding: '2.5rem',
      margin: '0 auto',
    },
  },
  titleCard: {
    padding: '1rem 2rem',
    maxWidth: '40%',
    margin: 'auto',
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
  accordion: {
    border: '1.5px solid #2b3d2b',
    marginBottom: '15px',
  },
  accordionSummary: {
    backgroundColor: '#fcfaf4',
    transition: 'none',
  },
  question: {
    fontFamily: "'Lora', sans-serif",
  },
  accordionDetails: {
    backgroundColor: '#fcfaf4',
  },
  answer: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: '1rem',
  },
};

export default FAQSection;