import React from 'react';
import styles from './ContactSection1.module.css';

const ContactSection1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.smallText}>now accepting clients for <em> virtual </em> therapy.</p>
        <h1 className={styles.heading}>
          Fill out the form below to schedule your 15-minute introductory call. I can also be reached at <em>
            <a href="mailto:info@laurenmartyntherapy.ca" className={styles.emailLink}>
              info@laurenmartyntherapy.ca
            </a>
          </em>
        </h1>
      </div>

    </div>
  );
};

export default ContactSection1;