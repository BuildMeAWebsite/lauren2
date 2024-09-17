import React, { useState, useEffect, useRef } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const FullPageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const carouselRef = useRef(null);

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/Images/background3.jpg`,
      captionTitle: "What to expect.",
      buttonText: "start your journey",
      href: "/what-to-expect",
    },
 
  ];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPrevIndex(activeIndex);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPrevIndex(activeIndex);
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setPrevIndex(null);  // Clear the previous index once animation ends
  };

  const slideStyle = (index) => {
    if (index === activeIndex) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        fontFamily: "'Lora', sans-serif",
        fontWeight: 'normal',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${images[index].src})`,
        transition: "transform .9s ease-in-out",
        transform: "translateX(0)",
        zIndex: 2,
      };
    } else if (index === prevIndex) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        fontFamily: "'Lora', sans-serif",
        fontWeight: 'normal',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${images[index].src})`,
        transition: "transform .9s ease-in-out",
        transform: "translateX(-100%)",
        zIndex: 1,
      };
    } else {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        fontFamily: "'Lora', sans-serif",
        fontWeight: 'normal',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${images[index].src})`,
        transform: "translateX(100%)",
        zIndex: 1,
      };
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const cardStyle = {
    backgroundColor: '#fafafa',
    padding: '2rem',
    border: '2px solid #2b2d2b',
    textAlign: 'center',
    width: '100%',
    maxWidth: '22rem',
    maxHeight: '22rem',
    height: '15.5rem',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    color: '#2b2d2b',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1 / 1',
    boxSizing: 'border-box',
  };

  const captionContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const captionTitleStyle = {
    padding: '1rem',
    fontSize: "2rem",
    fontWeight: "normal",
    fontFamily: "Lora, sans-serif",
    textTransform: 'lowercase',
    color: '#2b2d2b',
    textAlign: 'center',
    margin: 0,
  };

  const captionTextStyle = {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    fontWeight: 400,
    textAlign: 'center',
    margin: 0,
  };

  const buttonStyle = {
    backgroundColor: "#fafafa",
    color: "#2b3d2b",
    fontFamily: "Georgia, serif",
    textDecoration: 'none',
    borderRadius: "50px",
    padding: "10px 30px",
    fontSize: "1rem",
    cursor: "pointer",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const buttonHoverStyle = {
    color: "#FFD700",
    transform: "scale(1.05)",
  };

  const iconStyle = {
    marginLeft: "8px",
    fontSize: "1rem",
  };

  const arrowButtonStyle = {
    fontSize: "2rem", 
    color: "#fff", 
    transform: "rotate(180deg)" // Rotate the arrow for left direction
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAutoRotating(true);
        } else {
          setIsAutoRotating(false);
        }
      },
      { threshold: 0.5 } // Start auto-rotation when 50% of the carousel is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [carouselRef]);

  useEffect(() => {
    let intervalId;
    if (isAutoRotating) {
      intervalId = setInterval(() => {
        if (!isAnimating) {
          handleNext();
        }
      }, 5000); // Rotate every 5 seconds
    }

    return () => clearInterval(intervalId);
  }, [isAutoRotating, isAnimating]);

  return (
    <div id="myCarousel" ref={carouselRef} style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <div style={containerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            style={slideStyle(index)}
            onTransitionEnd={handleAnimationEnd}
          >
            <div style={captionContainerStyle}>
              <div style={cardStyle}>
                <h2 style={captionTitleStyle}>{image.captionTitle}</h2>
                <p style={captionTextStyle}>{image.captionText}</p>
                <a
                  href={image.href}
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, buttonHoverStyle);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, {
                      color: "#2b3d2b",
                      transform: "scale(1)",
                    });
                  }}
                >
                  {image.buttonText}
                  <ArrowRightAltIcon style={iconStyle} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <a
        className="left carousel-control"
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <ArrowRightAltIcon style={arrowButtonStyle} />
      </a>
      <a
        className="right carousel-control"
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <ArrowRightAltIcon style={{ fontSize: "2rem", color: "#fff" }} />
      </a>
    </div>
  );
};

export default FullPageCarousel;