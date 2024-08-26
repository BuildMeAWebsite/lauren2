import React, { useState } from 'react';
import ParallaxSection from '../Home/ParallaxSection';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { id: 1, title: "Do you offer in-person therapy sessions?", content: "At this time no, I offer video sessions. You can also request phone sessions." },
    { id: 2, title: "Do you offer family or group therapy sessions?", content: "At this time no, I offer individual sessions only." },
    { id: 3, title: "Are parents able to join therapy sessions?", content: "Parent involvement varies based on the needs of the child. I believe in collaboration and may involve parents in certain aspects of therapy to support their child’s progress. This will be assessed ongoing in the therapy sessions." },
    { id: 4, title: "What is your rate?", content: "My rate is $170 per session." },
    { id: 5, title: "What are your hours?", content: "Currently, I offer therapy sessions in the evening Monday- Friday to accommodate those in school and working. If you prefer another time, I will try my best to accommodate." },
    { id: 6, title: "How long are your sessions?", content: "Each session is scheduled for 60 minutes. We have up to 50 minutes for counselling and 10 minutes are used for documentation and sending resources discussed. Some individuals may not need or be able to focus for 50 minutes, we can always end our session when ready to do so." },
    { id: 7, title: "Do you accept insurance?", content: "(see insurance information)" },
    { id: 8, title: "What are the payment options?", content: "(See payment information)" },
    { id: 9, title: "How do I schedule an appointment?", content: "You can contact me here by email to schedule your initial or returning appointment. (email link)" },
    { id: 10, title: "Can I schedule an appointment if I live or am travelling outside of Ontario?", content: "Unfortunately, I am only able to offer services to those residing in Ontario and are located in Ontario at the time of our sessions." },
    { id: 11, title: "How often are therapy sessions?", content: "The frequency of therapy sessions depends on individual needs, goals and budget. Initially, I recommend weekly sessions and then transition to bi-weekly or monthly as progress is made. We will have ongoing discussion about what is best for each individual." },
    { id: 12, title: "How many therapy sessions can I have?", content: "There is no limit to how many therapy sessions you can have. Some people may be seeking brief support, others may be looking for ongoing support over a longer period of their life. We will continue to discuss if goals have been achieved, if further sessions would be beneficial, or if it is time to terminate services." },
    { id: 13, title: "What can I expect in the first session?", content: "The first session is an opportunity to get to know you or your child, understand your concerns, and discuss goals for therapy. I will review my obligations and policies. It’s also a chance to ask questions and discuss how therapy works and see if we are a good fit for each other." },
    { id: 14, title: "I haven’t attended a session in a long time, can I return?", content: "Absolutely, anytime you feel ready to return, please reach out to schedule your next appointment. We can pick-up where we left off or start somewhere new." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.container}>
        <h2 style={styles.header}>Frequently Asked Questions</h2>
        <div style={styles.accordion}>
          {faqData.map((item, index) => (
            <div key={item.id} style={styles.accordionItem}>
              <button
                id={`accordion-button-${item.id}`}
                aria-expanded={activeIndex === index}
                onClick={() => toggleAccordion(index)}
                style={styles.button}
              >
                <span style={styles.accordionTitle}>{item.title}</span>
                <span style={styles.icon} aria-hidden="true"></span>
              </button>
              <div
                style={{
                  ...styles.accordionContent,
                  height: activeIndex === index ? '150px' : '0',
                  overflow: 'hidden',
                }}
              >
                <div style={styles.accordionContentInner}>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    marginTop: '30px',
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '1rem auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  accordion: {
    backgroundColor: 'transparent',
    borderRadius: '8px',
  },
  accordionItem: {
    borderBottom: '1px solid #ddd',
  },
  button: {
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    width: '100%',
    padding: '1em 0',
    color: '#333',
    fontSize: '1.15rem',
    fontWeight: '400',
    border: 'none',
    background: 'none',
    outline: 'none',
    transition: 'color 0.2s ease',
    fontFamily: 'Libre Baskerville, serif',
  },
  accordionTitle: {
    padding: '1em 1.5em 1em 0',
  },
  icon: {
    display: 'inline-block',
    position: 'absolute',
    top: '18px',
    right: '0',
    width: '22px',
    height: '22px',
    border: '1px solid #333',
    borderRadius: '22px',
  },
  accordionContent: {
    fontFamily: 'Libre Baskerville, serif',
    transition: 'height 0.2s ease',
    overflow: 'hidden',
  },
  accordionContentInner: {
    padding: '1em 1.5em',
    color: '#3a3a3a',
    fontSize: '1rem',
    fontWeight: '300',
    lineHeight: '1.6',
    height: '100%',
    overflowY: 'auto',
  },
};

export default FAQ;
