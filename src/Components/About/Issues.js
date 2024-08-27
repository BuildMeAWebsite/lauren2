import React, { useEffect } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting'; // Importing Splitting for text effects
import TextBanner from './TextBanner';

const SplittingImageText = () => {
  useEffect(() => {
    // Splitting.js
    Splitting();

    // Intersection Observer and GSAP
    const options = {
      root: null, // use the document's viewport as the container
      rootMargin: "0px", // % or px - offsets added to each side of the intersection
      threshold: 0.1
    };

    const itemDelay = 0.1;

    let fadeupCallback = (entries, self) => {
      let itemLoad = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.set(entry.target, { visibility: "visible" });
          tl.from(entry.target, {
            duration: 1,
            y: 200,
            skewY: 40,
            autoAlpha: 0,
            delay: itemLoad * itemDelay,
            ease: "power3.out"
          });
          itemLoad++;
          self.unobserve(entry.target);
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
  backgroundColor="#fcfaf4"
  textColor="#01796F"
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
    backgroundColor: '#fcfaf4',
    fontFamily: "PT Sans, sans-serif",
    paddingTop: '0px',
    marginTop: '0px',
    padding: '1rem 1rem',
    minHeight: '100%',
  },
  gridContainer: {
    display: 'grid',
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
    color: '#01796F',
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
    visibility: 'hidden', // Initially hidden for animation
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
    maxHeight: 'calc(60vh - 50px)',
  },
};

export default SplittingImageText;
