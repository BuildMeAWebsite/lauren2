import React, { useState, useEffect } from 'react';

const SplittingImageText = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
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

    document.querySelectorAll(".fade-in").forEach((element) => {
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
            className="fade-in"
          />
          <h1 style={styles.heading} className="fade-in">
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
    padding: '10rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  },
  gridContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fcfaf4',
    maxWidth: '1000px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  item2: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Center text vertically
  },
  image: {
    maxWidth: '50%', // Adjust the width of the image to be smaller
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.95)',
    visibility: 'hidden', // Initially hidden for animation
    opacity: 0, // Start with opacity 0 for fade-in effect
  },
  heading: {
    position: 'absolute',
    top: '0%',
    transform: 'translateY(-50%)', // Center the text vertically
    fontSize: '1.5rem',
    fontFamily: "PT Sans, sans-serif",
    textTransform: 'lowercase',
    textAlign: 'center',
    padding: '0 20px', // Reduce padding to make it more centered
    textShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    color: '#fcfaf4',
    visibility: 'hidden', // Initially hidden for animation
    opacity: 0,
  },
  link: {
    color: '#fcfaf4',
    textDecoration: 'none',
    borderBottom: '1px solid #fcfaf4',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
    maxWidth: '400px',
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

