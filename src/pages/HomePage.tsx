import React from 'react';
import HeroSection from '../components/HeroSection';
import ModelsGrid from '../components/ModelsGrid';
import ComparisonSection from '../components/ComparisonSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ModelsGrid />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default HomePage;