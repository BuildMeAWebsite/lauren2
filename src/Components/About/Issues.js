import React, { useEffect } from 'react';
import TextBanner from './TextBanner';

const SplittingImageText = () => {
  useEffect(() => {
    // Trigger the animation after component mounts
    const elements = document.querySelectorAll('.bullet-item, img');
    elements.forEach((element) => {
      element.style.visibility = 'visible';
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    });
  }, []);

  const items = [
    "Anxiety",
    "Depression",
    "Stress",
    "Perfectionism",
    "Emotional and Behavioural Challenges",
    "Attention Deficit Hyperactivity Disorder",
    "Academic Concerns and Learning Disabilities",
    "Bullying and Social Challenges",
    "Relationship Issues",
    "Self-Esteem and Body Image",
    "Career and Post-Secondary Guidance",
    "Life Coaching"
  ];

  return (
    <div style={styles.body}>
      <TextBanner
        text="I can assist you or your child who are seeking support with:"
        fontSize="2rem"
        padding="2rem 1rem"
        backgroundColor="#8FBC8F" // Updated to the soft green
        textColor="#FCFAF4" // Cream text color
        textAlign="left"
        fontFamily="PT Sans, Sans-serif"
      />
      <div style={styles.gridContainer}>
        <div style={styles.item1}>
          <div style={styles.listContainer}>
            {items.map((item, index) => (
              <div key={index} className="bullet-item" style={styles.bulletItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div style={styles.item2}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/background.jpg`} 
            alt="Overlap"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#FCFAF4', // Cream background color
    fontFamily: "PT Sans, sans-serif",
    paddingTop: '0px',
    marginTop: '0px',
    padding: '1rem 1rem',
    minHeight: '100%',
  },
  gridContainer: {
    display: 'grid',
    backgroundColor: '#FCFAF4', // Cream background color
    gridTemplate: 'repeat(6, [row] 1fr) / repeat(12, [col] 1fr)',
    gridGap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  item1: {
    gridColumn: 'col 2 / span 7',
    gridRow: 'row 2 / span 4',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    color: '#546A2F', // Darker green text color
    textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2px', // Space between bullet items
  },
  bulletItem: {
    fontSize: '1.25rem',
    fontFamily: "PT Sans, sans-serif",
    textTransform: 'lowercase',
    lineHeight: 1,
    visibility: 'hidden',
    transform: 'translateY(50px)', // Start slightly below
    opacity: 0,
    transition: 'transform 1s ease-out, opacity 1s ease-out', // Slide up and fade in
    color: '#546A2F', // Darker green text color
  },
  item2: {
    gridColumn: 'col 5 / span 8',
    gridRow: 'row 1 / span 6',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.95)',
    visibility: 'hidden',
    transform: 'translateY(50px)', // Start slightly below
    opacity: 0,
    transition: 'transform 1s ease-out, opacity 1s ease-out', // Slide up and fade in
    maxHeight: 'calc(60vh - 50px)',
  },
};

export default SplittingImageText;