import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedCareers from '../components/FeaturedCareers';
import SuccessStories from '../components/SuccessStories';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <FeaturedCareers />
      <SuccessStories />
    </div>
  );
};

export default Home;