import React, { useEffect } from 'react';
import Splitting from 'splitting'; // Importing Splitting for text effects

const SplittingImageText = () => {
  useEffect(() => {
    // Splitting.js
    Splitting();

    // Intersection Observer for fade-in animation
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const fadeInCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = "visible";
          entry.target.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    };

    const fadeInObserver = new IntersectionObserver(fadeInCallback, options);

    document.querySelectorAll(".bullet-item, img").forEach((element) => {
      element.style.opacity = 0;
      element.style.transform = "translateY(100px)";
      fadeInObserver.observe(element);
    });

    // Clean up the observer on component unmount
    return () => {
      fadeInObserver.disconnect();
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
    <div style={styles.body}>
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
            src={`${process.env.PUBLIC_URL}/Images/couch.jpg`} 
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
    backgroundColor: '#01796F',
    padding: '40px 5vw',
  },
  gridContainer: {
    display: 'grid',
    gridTemplate: 'repeat(6, [row] 1fr) / repeat(12, [col] 1fr)',
    gridGap: '20px',
    maxWidth: '700px',
    margin: '0 auto',
    overflow: 'hidden',
    minHeight: '70vh',
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
    textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px', // Space between bullet items
  },
  bulletItem: {
    fontSize: '1.25rem',
    fontFamily: "PT Sans, sans-serif",
    textTransform: 'lowercase',
    lineHeight: 1,
    visibility: 'hidden', // Initially hidden for animation
    opacity: 0,
    transform: 'translateY(100px)',
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
    opacity: 0,
    transform: 'translateY(100px)',
    maxHeight: 'calc(60vh - 100px)',
  },
};

export default SplittingImageText;
