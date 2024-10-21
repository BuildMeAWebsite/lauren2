import React from 'react';
import styles from './HomeSection6.module.css';
import ParallaxSection from './ParallaxSection';

const HomeSection6 = () => {
  return (
    <ParallaxSection
      image="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729297041/pexels-eye4dtail-114137_h9nkjj.jpg"
      minHeight="60vh"
    >
      {/* Overlay to darken the image */}
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.heroSection}>
            <p className={styles.smallText}>hello and <em>welcome</em>.</p>

            {/* Heading wrapped inside headingWrapper for hover effect */}
            <div className={styles.headingWrapper}>
              <h1 className={styles.heading}>
                If you are reading this, you have already taken the biggest step in the therapeutic journey. 
                My name is Lauren Martyn, I am a registered psychotherapist and I have dedicated myself to supporting school-aged 
                children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to 
                those residing in Ontario, Canada.
              </h1>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1728154934/lauren1_xmyolw.webp"
              alt="Lauren Martyn"
              className={styles.image}
            />
            <p className={styles.caption}>Lauren Martyn RP, MA</p>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HomeSection6;