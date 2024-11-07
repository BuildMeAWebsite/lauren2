import React from 'react';

const HomeSection2 = () => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.sideBar, border: '2px solid #8FBC8F' }}>
        <p style={styles.sideText}>Hello and <em>Welcome</em></p>
      </div>
      <div style={styles.contentWrapper}>
        <p style={styles.smallText}>Ontario <em>Psychotherapy</em></p>
        <div style={styles.textBox}>
        <div style = {{maxWidth: '50%'}}>
          <h1 style={styles.mainText}>
          
            If you are reading this, you have already taken the biggest step in your therapeutic journey. My name is Lauren Martyn, and I am a registered psychotherapist dedicated to supporting school-aged children, youth, and young adults as they navigate life’s challenges. I currently offer virtual counselling to those residing in Ontario, Canada. Explore my website to learn more about me, and if you feel we’re a good fit, let's continue this therapeutic journey together.
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fcfaf4',
    padding: 0,
  },
  contentWrapper: {
    flex: 2.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10rem',
  },
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#fcfaf4',
    color: '#333',
    fontWeight: 'normal',
    textAlign: 'center',
    boxSizing: 'border-box',
    overflow: 'auto',
    width: '100%',
  },
  sideBar: {
    flex: 0.5,
    backgroundColor: '#8FBC8F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    boxSizing: 'border-box',
  },
  smallText: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    color: '#666',
    textAlign: 'center',
  },
  mainText: {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    padding: '1rem',
  },
  sideText: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: '#fff',
    letterSpacing: '1px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      height: 'auto',
    },
    contentWrapper: {
      margin: '10rem 1rem',
    },
    textBox: {
      padding: '2rem 1rem',
      fontSize: '1.25rem',
    },
    sideBar: {
      width: '100%',
      height: 'auto',
      padding: '1rem 0',
    },
    sideText: {
      writingMode: 'horizontal-tb',
      transform: 'none',
      textAlign: 'center',
      fontSize: '0.875rem',
    },
  },
};

export default HomeSection2;