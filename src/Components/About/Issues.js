import React, { useEffect } from 'react';
import Splitting from 'splitting'; // Importing Splitting for text effects
import TextBanner from './TextBanner';

const SplittingImageText = () => {
  useEffect(() => {
    // Splitting.js for text effects
    Splitting();

    // Intersection Observer for handling the fade-in effect
    const options = {
      root: null, // use the document's viewport as the container
      rootMargin: "0px", // % or px - offsets added to each side of the intersection
      threshold: 0.1
    };

    let fadeupCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
          entry.target.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)'; // Animate sliding into view
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    };

    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

    document.querySelectorAll(".bullet-item, img").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });

    // Clean up the observer on component unmount
    return () => {
      fadeupObserver.disconnect();
    };
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
    <>
      <div style={styles.body}>
        <TextBanner
          text="I can assist you or your child who are seeking support with:"
          fontSize="2rem"
          padding="2rem 1rem"
          backgroundColor="#01796F"
          textColor="#fcfaf4"
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
    </>
  );
};

const styles = {
  body: {
    backgroundColor: '#01796F',
    fontFamily: "PT Sans, sans-serif",
    paddingTop: '0px',
    marginTop: '0px',
    padding: '1rem 1rem',
    minHeight: '100%',
  },
  gridContainer: {
    display: 'grid',
    backgroundColor: '#01796F',
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
    color: '#fcfaf4',
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
    opacity: 0, // Initially hidden for animation
    transform: 'translateY(20px)', // Slide in from below
    visibility: 'hidden', // Initially hidden
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
    visibility: 'hidden', // Initially hidden for animation
    maxHeight: 'calc(60vh - 50px)',
  },
};

export default SplittingImageText;
