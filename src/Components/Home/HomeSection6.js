import React from 'react';
import styles from './HomeSection6.module.css';

const HomeSection6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}>hello and <em>welcome</em>.</p>
        <h1 className={styles.heading}>
          if you are reading this you have already taken the biggest step in the therapeutic journey. My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counseling to those residing in Ontario, Canada.
        </h1>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.line}></div> {/* Vertical line added */}
      </div>
    </div>
  );
};

export default HomeSection6;