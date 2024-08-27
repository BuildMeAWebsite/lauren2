import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';
import ContactFormPopout from './ContactFormPopout'; // Import the contact form component

const SplittingImageText = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    Splitting();

    const options = {
      root: null,
      rootMargin: "0px",
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

      {isFormOpen && <ContactFormPopout onClose={handleFormClose} />}
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
    color: 'white',
  },
  item2: {
    gridColumn: 'col 2 / span 5',
    gridRow: 'row 1 / span 6',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '400px',
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.95)',
    visibility: 'hidden',
    maxHeight: 'calc(60vh - 100px)',
  },
  heading: {
    fontSize: '2rem', // Adjusted font size to fit the text
    fontFamily: "Libre Baskerville, serif",
    textTransform: 'lowercase',
    overflow: 'hidden',
    display: 'block',
    lineHeight: 1.1,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    borderBottom: '1px solid #ffffff', // Border underline instead of text underline
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  linkHover: {
    color: '#ffffff',
    borderBottom: '1px solid #ffffff',
  }
};

export default SplittingImageText;
