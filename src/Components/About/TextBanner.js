import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const TextBanner = ({
  text,
  fontSize = '3rem',
  padding = '3rem 0',
  backgroundColor = '#01796F',
  textColor = '#FCFAF4',
  textAlign = 'center',
  fontFamily = 'PT Sans, sans-serif',
  ...otherProps
}) => {
  return (
    <div
      style={{
        ...styles.bannerContainer,
        padding,
        backgroundColor,
        ...otherProps, // Apply other styles passed as props
      }}
    >
      <Typography
        variant="h3"
        align={textAlign}
        style={{
          fontSize,
          color: textColor,
          fontFamily,
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

TextBanner.propTypes = {
  text: PropTypes.string.isRequired, // Ensures that the text prop is required and of type string
  fontSize: PropTypes.string, // Allows fontSize to be passed as a string
  padding: PropTypes.string, // Allows padding to be passed as a string
  backgroundColor: PropTypes.string, // Allows backgroundColor to be passed as a string
  textColor: PropTypes.string, // Allows textColor to be passed as a string
  textAlign: PropTypes.string, // Allows textAlign to be passed as a string
  fontFamily: PropTypes.string, // Allows fontFamily to be passed as a string
};

const styles = {
  bannerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
};

export default TextBanner;
