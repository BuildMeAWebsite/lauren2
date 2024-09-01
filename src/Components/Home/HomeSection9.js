import React from 'react';

const HomeSection9 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h1 style={styles.title}>
          <span style={styles.titlePrimary}>my</span>
          <span style={styles.titleSecondary}>approach</span>
        </h1>
        <hr style={styles.line} />
      </div>
      <div style={styles.rightColumn}>
        <div style={styles.serviceItem}>
          <div style={styles.serviceNumber}>01.</div>
          description: 'During the initial session, we will discuss your concerns, goals, and expectations. This is a crucial step to understand your needs and create a tailored approach to address them.',

          <div style={styles.serviceDetails}>
            <h2 style={styles.serviceTitle}>Individual Therapy</h2>
            <p style={styles.serviceDescription}>
              Individual therapy is for anyone aiming to better understand their personal life, work life, or relationships within the privacy of one-on-one conversations with a therapist.
            </p>
          </div>
        </div>

        <div style={styles.serviceItem}>
          <div style={styles.serviceNumber}>02.</div>
          <div style={styles.serviceDetails}>
            <h2 style={styles.serviceTitle}>Couples Therapy</h2>
            <p style={styles.serviceDescription}>
              Couples therapy is for partnered individuals experiencing conflict, communication issues, sexual/intimacy problems, or any other relationship distress.
            </p>
          </div>
        </div>

        <div style={styles.serviceItem}>
          <div style={styles.serviceNumber}>03.</div>
          <div style={styles.serviceDetails}>
            <h2 style={styles.serviceTitle}>Child & Adolescent Therapy</h2>
            <p style={styles.serviceDescription}>
              We offer individual therapy for children 0-18 to help with emotion regulation, behavior problems, anxiety, depression, and many other challenging experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '50px',
    fontFamily: "'Merriweather', serif",
    color: '#333',
  },
  leftColumn: {
    flex: '1',
    marginRight: '50px',
    textAlign: 'right',
  },
  title: {
    fontSize: '4rem',
    lineHeight: '1',
    marginBottom: '20px',
  },
  titlePrimary: {
    display: 'block',
    color: '#b5854c', // Brownish color
  },
  titleSecondary: {
    display: 'block',
    color: '#b5854c', // Brownish color
  },
  line: {
    borderTop: '2px solid #000',
    width: '50%',
    margin: '0 auto',
    marginTop: '20px',
  },
  rightColumn: {
    flex: '2',
  },
  serviceItem: {
    marginBottom: '50px',
  },
  serviceNumber: {
    fontSize: '1.5rem',
    color: '#b5854c', // Brownish color
    marginBottom: '10px',
  },
  serviceDetails: {
    marginLeft: '20px',
  },
  serviceTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
  },
};

export default HomeSection9;