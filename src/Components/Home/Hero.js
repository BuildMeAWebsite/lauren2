/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ParallaxSection from './ParallaxSection';

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background1.jpg`}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column-reverse', md: 'row' }} // Stack image below text on small screens, side by side on large screens
        css={styles.heroContainer}
        spacing={3}
      >
        <Grid item xs={12} md={6} css={styles.slideIn}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/h.jpg`}
            alt="Lauren Martyn Headshot"
            css={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={6} css={styles.slideIn}>
          <h2 css={styles.subtitle}>ONTARIO PSYCHOTHERAPY</h2>
          <h1 css={styles.title}>
            To be seen, to be heard, and to be <em>understood</em>.
          </h1>
          <div css={styles.buttonContainer}>
            <a href="/contact" css={styles.contactButton}>Contact</a>
          </div>
        </Grid>
      </Grid>
    </ParallaxSection>
  );
};

const styles = {
  heroContainer: css`
    min-height: 90vh;
    color: #3a3a3a;
    padding: 4rem 5rem;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 900px;
  `,
  slideIn: css`
    animation: ${slideInFromBottom} 1.5s ease-in-out forwards;
  `,
  subtitle: css`
    font-family: "Libre Baskerville, serif";
    font-size: 0.75rem;
    font-weight: normal;
    color: #3a3a3a;
    text-transform: uppercase;
    letter-spacing: 2px;
  `,
  title: css`
    font-family: "PT Sans, sans-serif";
    font-size: 2.5rem;
    font-weight: 400;
    color: #3a3a3a;
    margin: 0;
    line-height: 1;
  `,
  buttonContainer: css`
    display: flex;
    margin: 2rem 0;
    justify-content: center;
  `,
  contactButton: css`
    padding: 10px 20px;
    font-family: "PT Sans, sans-serif";
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 1rem;
    background-color: #3a3a3a;
    color: #fcfaf4;
    text-decoration: none;
    border-radius: 0px;
  `,
  image: css`
    max-width: 100%;
    border-radius: 10px;
    height: auto;
    object-fit: contain;
  `,
};

export default Hero;
