import React from 'react';
import Hero from '../Components/About/AboutHero';
import QuoteSection from '../Components/About/AboutSectionQuote';
import FAQ from '../Components/About/FAQSection';
import TherapeuticModalities from '../Components/About/Modalities';
import ServicesOffered from '../Components/About/ServicesOffered';

const About = () => {
  return (
    <>
    <Hero />
      <QuoteSection />
      <ServicesOffered/>
      <TherapeuticModalities />  
      <div style={styles.faqContainer}>
        <FAQ />
      </div>
  
     
    </>
  );
};

const styles = {
  faqContainer: {
    padding: '40px 20px', // Add padding around the FAQ section
    margin: '40px auto',  // Center the FAQ section and add top and bottom margin
    maxWidth: '1000px',   // Limit the maximum width of the FAQ section
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Add a shadow to give it a card-like effect
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Add a semi-transparent background
    borderRadius: '8px',  // Round the corners to complete the card look
  },
};

export default About;
