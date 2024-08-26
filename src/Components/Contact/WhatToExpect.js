import React from 'react';

const WhatToExpect = () => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardHeader}>What to Expect</h3>
      <p style={styles.cardText}>
        During the initial 15-minute introductory call, we will discuss your reasons for starting therapy and what kind of support you are looking for. It is an opportunity for us to ask each other questions and see if we are a good therapeutic fit.
      </p>
      <p style={styles.cardText}>
        The first session is an intake process where I will be collecting information about your background, current life situation, and goals. It is also an opportunity for you to ask questions about me and my approach. Consent, limits of confidentiality, fees and cancellation policy will also be discussed.
      </p>
      <p style={styles.cardText}>
        Your therapy session is your time and space for yourself. You are free to choose a topic of discussion and give yourself time to process what is important for you. As a therapist, I will provide you with support and listen to you without judgement. I may summarize our previous work and check-in on how we felt in our last session.
      </p>
      <p style={styles.cardText}>
        The main predictor of success in therapy is the strength of a therapeutic relationship. As our sessions progress, I invite you to reflect on how you feel in my presence and whether a safe and trusting relationship is being developed.
      </p>
      <p style={styles.cardText}>
        Sessions typically occur on a weekly basis, although depending on your situation the frequency can be adjusted. Therapy is an active and collaborative process meaning that both sides have to put in work to make progress. We will work together on identifying goals and areas of life you’d like to improve.
      </p>
      <p style={styles.cardText}>
        Occasionally, I will invite you to practice strategies in your life and complete assigned material when needed. That is done for you to be able to gradually regulate your emotions and develop new skills in between sessions. As you gain more self-awareness and practical tools, you are likely to experience relief, curiosity and confidence. It is important to note that progress is not linear and there might be times when you will be feeling less hopeful. Know that this is a part of the process.
      </p>
      <p style={styles.cardText}>
        As you will be feeling more stable and confident in your abilities, we can start having sessions less frequently. Some people decide to continue therapy for ongoing support. As always, we will discuss what works best for you.
      </p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    marginTop: '40px',
    fontFamily: 'Libre Baskerville, serif',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardHeader: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  cardText: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
};

export default WhatToExpect;
