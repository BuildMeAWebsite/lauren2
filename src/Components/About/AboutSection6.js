import React from 'react';
import styles from './AboutSection6.module.css';

const HomeSection6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}>compassionate, <em> non-blaming </em> empathy.</p>
        <h1 className={styles.heading}>
          I believe the most important part of the therapeutic process is building a safe, trusting, collaborative, and genuine bond. From there, we can deepen the understanding of your lived experience and emotions. Together, we work to re-frame your story with an emphasis on strengths, hope, and solutions to help you towards their full potential.
        </h1>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default HomeSection6;