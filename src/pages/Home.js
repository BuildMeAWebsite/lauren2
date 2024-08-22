import React from 'react';
import Hero from '../Components/Home/Hero';
import BioSection from '../Components/Home/BiographySection';
import BookNowBanner from '../Components/Home/BookNowBanner';
import QuoteSection from '../Components/Home/QuoteSection';

const Home = () => {
  return (
    <>
      <Hero />
      <QuoteSection />
      <BioSection />
      <BookNowBanner />
    </>
  );
};

export default Home;