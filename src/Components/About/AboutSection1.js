import React from 'react';
import styles from './AboutSection1.module.css';

const AboutSection1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}> <em>experience</em> </p>
        <h1 className={styles.heading}>
        I have been a Registered Psychotherapist since 2019, with a Master’s degree in Counselling Psychology. My experience spans both community and post-secondary settings, and I currently serve as a School Counsellor at an Independent School. I offer expertise in navigating school environments and recognize the unique challenges they present.

 </h1>      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default AboutSection1;