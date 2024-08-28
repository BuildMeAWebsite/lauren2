import React, { useState, useEffect } from 'react';
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

    document.querySelectorAll("h1 span, img").forEach((element) => {
      element.style.opacity = 0;
      element.style.transform = "translateY(100px)";
      fadeInObserver.observe(element);
    });

    return () => {
      fadeInObserver.disconnect();
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
          <h1 data-splitting="lines" style={styles.heading}>
            Click <a href="#" onClick={handleFormOpen} style={styles.link}> <em style={{ fontSize: '2.5rem' }}>here </em></a> to schedule a 15 minute call
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
              height="500px"
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
    background: '#fcfaf4',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  gridContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fcfaf4',
    maxWidth: '800px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  item2: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.95)',
    visibility: 'hidden', // Initially hidden for animation
    maxHeight: 'calc(60vh - 10px)',
    transform: 'translateY(100px)',
    opacity: 0,
  },
  heading: {
    position: 'absolute',
    fontSize: '2rem',
    fontFamily: "PT Sans, sans-serif",
    textTransform: 'lowercase',
    overflow: 'hidden',
    display: 'block',
    lineHeight: 1.1,
    color: '#fcfaf4',
    textAlign: 'center',
    padding: '0 50px',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    visibility: 'hidden', // Initially hidden for animation
    transform: 'translateY(100px)',
    opacity: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    borderBottom: '1px solid #ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#fcFAF4',
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
