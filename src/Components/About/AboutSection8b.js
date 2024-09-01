import React from 'react';

const AboutSection8b = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h2 style={styles.header}>We can help with:</h2>
        <ul style={styles.list}>
   

         
         
          <li>Anxiety</li>
          <li>Depression</li>
          <li>Perfectionism</li>
          <li>Emotional and Behavioural Challenges</li>
          <li>Attention Deficit Hyperactivity Disorder</li>
          <li>Academic Concerns and Learning Disabilities</li>
          <li>Bullying and Social Challenges</li>
          <li>Relationship Issues</li>
          <li>Self-Esteem and Body Image</li>
          <li>Career and Post-Secondary Guidance</li>
          <li>Life Coaching</li>
         
        </ul>
      </div>
      <div style={styles.rightColumn}>
        <h2 style={styles.header}>Book a session:</h2>
        <p style={styles.paragraph}>
          To get started, click the button below to schedule a free, 15-minute introductory call with us. We’ll talk about your availability and preferences and match you with a therapist that will best meet your needs.
        </p>
        <a href="#schedule-call" style={styles.button}>
          schedule an introductory call
        </a>
        <p style={styles.faq}>
          Questions? <a href="#faq" style={styles.link}>Read our FAQs</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '100px',
    backgroundColor: '#1a1d1f', // Dark background color
    color: '#FCFAF4', // Light text color
    fontFamily: "'Merriweather', serif",
  },
  leftColumn: {
    flex: 1,
    marginRight: '50px',
  },
  rightColumn: {
    flex: 1,
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    lineHeight: '1.8',
    fontSize: '1.25rem',
  },
  paragraph: {
    lineHeight: '1.8',
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    border: '1px solid #FCFAF4',
    color: '#FCFAF4',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  faq: {
    fontSize: '1.25rem',
  },
  link: {
    color: '#FCFAF4',
    textDecoration: 'underline',
  },
};

export default AboutSection8b;