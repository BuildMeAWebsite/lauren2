import React from 'react';
import styles from './AboutSection2.module.css';

const AboutSection2 = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.heroSection1}>
        <p className={styles.smallText1}> <em>Experience</em> </p>
        <h1 className={styles.heading1}>
          I have been a Registered Psychotherapist since 2019, with a Master’s degree in Counselling Psychology. 
          My experience spans both community and post-secondary settings, and I currently serve as a School Counsellor at an Independent School. 
          I offer expertise in navigating school environments and recognize the unique challenges they present.
        </h1>
      </div>
    
      <div className={styles.imageContainer1}>
      <img
  src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728154935/lauren4_vo7lr2.webp"
  alt="Lauren Martyn"
  style={styles.image1}
/>
      </div>
    </div>
  );
};

export default AboutSection2;