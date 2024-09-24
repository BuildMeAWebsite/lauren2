import React from 'react';
import styles from './AboutSection1.module.css';

const AboutSection1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}>compassionate, <em>non-blaming</em> empathy.</p>
        <h1 className={styles.heading}>
Hey Lauren, since we switched up the approaches and about page, should we come up with a different line here that would be a good "about me" intro? Maybe something like Hi, I'm lauren and I grew up in Ontario, I like to hike, etc... </h1>      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default AboutSection1;