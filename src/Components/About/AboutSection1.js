import React from 'react';
import styles from './AboutSection1.module.css';

const AboutSection1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}> Philosophy </p>
        <h1 className={styles.heading}>
        My therapeutic philosophy is rooted in the belief that everyone has the potential to thrive when provided with a safe and supportive environment. When individuals can freely express their thoughts and feelings and explore their experiences, they gain deeper insights into themselves. I strive to foster a trusting and genuine relationship that encourages self-discovery and empowers clients to navigate their challenges, ultimately guiding them toward achieving their full potential.
 </h1>      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default AboutSection1