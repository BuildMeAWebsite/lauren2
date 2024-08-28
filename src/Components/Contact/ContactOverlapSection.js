import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';

const SplittingImageText = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    Splitting();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const itemDelay = 0.1;

    const fadeupCallback = (entries, self) => {
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
            ease: "power3.out",
          });
          itemLoad++;
          self.unobserve(entry.target);
        }
      });
    };

    const fadeupObserver = new IntersectionObserver(fadeupCallback, options);

    document.querySelectorAll("h1 span, img").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });

    return () => {
      fadeupObserver.disconnect();
    };
  }, []);

  const handleFormOpen = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div style={styles.body}>
      <div style={styles.gridContainer}>
        <div style={styles.item2}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/couch.jpg`}
            alt="Overlap"
            style={styles.image}
          />
        </div>
        <div style={styles.item1}>
          <h1 data-splitting="lines" style={styles.heading}>
            Click <a href="#" onClick={handleFormOpen} style={styles.link}>here</a> to schedule a 15 minute call
          </h1>
        </div>
      </div>

      {isFormOpen && (
        <div style={styles.overlay} onClick={handleFormClose}>
          <div style={styles.formContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleFormClose} style={styles.closeButton}>X</button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf7NaBdfNFzRTJF17ZdeR0fbMFKArZfW7uQl9ODmGF5sGsEGA/viewform?embedded=true"
              width="100%"
              height="600px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{ border: 'none' }}
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  body: {
    background: '#01796F',
    padding: '1rem 10vw',
  },
  gridContainer: {
    display: 'grid',
    gridTemplate: 'repeat(6, [row] 1fr) / repeat(12, [col] 1fr)',
    gridGap: '20px',
    background: '#01796F',
    maxWidth: '600px',
    margin: '0 auto',
    overflow: 'hidden',
    minHeight: '70vh',
  },
  item1: {
    gridColumn: 'col 6 / span 7',
    gridRow: 'row 2 / span 4',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    color: '#fcfFAF4',
  },
  item2: {
    gridColumn: 'col 2 / span 5',
    gridRow: 'row 1 / span 6',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fcfFAF4',

  },
  image: {
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.95)',
    visibility: 'hidden',
    maxHeight: 'calc(60vh - 100px)',
  },
  heading: {
    fontSize: '2rem',
    fontFamily: "PT Sans, sans-serif",
    textTransform: 'lowercase',
    overflow: 'hidden',
    display: 'block',
    lineHeight: 1.1,
    color: '#fcfFAF4',

  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    borderBottom: '1px solid #ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#fcfFAF4',

  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  }
};

export default SplittingImageText;
