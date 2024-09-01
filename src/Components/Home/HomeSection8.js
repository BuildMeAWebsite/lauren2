import React, { useState, useEffect } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const FullPageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/Images/slider2.jpg`,
      captionTitle: "What to expect",
      buttonText: "Start Your Journey",
    },
    {
      src: `${process.env.PUBLIC_URL}/Images/mountainstars.jpg`,
      captionTitle: "Therapeutic Modalities",
      buttonText: "Learn about my approaches to therapy",
    },
    {
      src: `${process.env.PUBLIC_URL}/Images/slider3.jpg`,
      captionTitle: "Frequently Asked",
      buttonText: "Read FAQs",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setPrevIndex(activeIndex);
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(true);
      }
    }, 3500); // Rotate every 2.5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [activeIndex, isAnimating, images.length]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setPrevIndex(null);
  };

  const carouselStyle = {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  const slideStyle = (index) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    fontFamily: "Lora, serif",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${images[index].src})`,
    transition: "transform .9s ease-in-out",
    transform:
      index === activeIndex
        ? "translateX(0)"
        : index === prevIndex
        ? "translateX(0)"
        : "translateX(100%)",
    zIndex: index === activeIndex ? 2 : 1,
  });

  const useResponsiveStyles = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isTablet = windowWidth <= 768;
    const isMobile = windowWidth <= 480;

    return {
      captionContainerStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fcfaf4",
        textAlign: "center",
        width: isMobile ? "90%" : "80%", // Adjust width for responsiveness
        padding: isMobile ? "0 10px" : "0 20px",
        boxSizing: "border-box",
      },
      captionTitleStyle: {
        fontSize: isMobile ? "2rem" : isTablet ? "3rem" : "100px",
        marginBottom: isMobile ? "0.5rem" : "0.5rem", // Adjust margin for spacing
        fontWeight: "300",
        textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
        fontFamily: "Lora, serif",
      },
      captionTextStyle: {
        fontSize: '1rem',
        marginBottom: '0.1rem'
      },
      buttonStyle: {
        background: "transparent",
        color: "#fff",
        border: "none",
        textDecoration: 'none',
        borderRadius: "50px",
        padding: isMobile ? "6px 25px" : isTablet ? "8px 35px" : "11px 45px",
        fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
        cursor: "pointer",
        marginTop: isMobile ? "1rem" : "1.5rem", // Adjust spacing between text and button
        display: 'inline-flex',
        alignItems: 'center',
      },
      iconStyle: {
        marginLeft: "8px", // Space between text and icon
        fontSize: isMobile ? "1rem" : "1rem", // Adjust icon size based on screen
      },
    };
  };

  const {
    captionContainerStyle,
    captionTitleStyle,
    captionTextStyle,
    buttonStyle,
    iconStyle,
  } = useResponsiveStyles();

  return (
    <div id="myCarousel" style={carouselStyle}>
      {/* Wrapper for Slides */}
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={slideStyle(index)}
            onTransitionEnd={handleAnimationEnd}
          >
            <div style={captionContainerStyle}>
              <h2 style={captionTitleStyle}>{images[index].captionTitle}</h2>
              <p style={captionTextStyle}>{images[index].captionText}</p>
              <p>
                <a href="#" style={buttonStyle}>
                  {images[index].buttonText}
                  <ArrowCircleRightIcon style={iconStyle} />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <a
        className="left carousel-control"
        href="#myCarousel"
        onClick={() => {
          setPrevIndex(activeIndex);
          setActiveIndex((activeIndex - 1 + images.length) % images.length);
          setIsAnimating(true);
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <span className="icon-prev"></span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        onClick={() => {
          setPrevIndex(activeIndex);
          setActiveIndex((activeIndex + 1) % images.length);
          setIsAnimating(true);
        }}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <span className="icon-next"></span>
      </a>
    </div>
  );
};

export default FullPageCarousel;