import React from 'react';
import HomeHero from '../components/HomeHero.js';
import HomeAbout from '../components/HomeAbout';
import HomeSwiper from '../components/HomeSwiper';

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeSwiper />
    </>
  );
}

export default HomePage;
