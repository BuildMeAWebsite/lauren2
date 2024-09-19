import React from 'react';
import styles from './AboutSection1.module.css';

const AboutSection1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}>compassionate, <em>non-blaming</em> empathy.</p>
        <h1 className={styles.heading}>
        methods

My approach is rooted in strength-based, solution-focused, emotion-focused and narrative therapy. I customize my approach to best fit each client's unique needs and goals. I use a variety of therapeutic interventions:        </h1>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default AboutSection1;