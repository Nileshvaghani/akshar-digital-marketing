import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Services from '../components/Services';
import Founder from '../components/Founder';
import Methodology from '../components/Methodology';
import CaseStudies from '../components/CaseStudies';
import Consultation from '../components/Consultation';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Services />
      <Founder />
      <Methodology />
      <CaseStudies />
      <Consultation />
    </>
  );
};

export default HomePage;
