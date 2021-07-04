import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../components/HomeHero.js';
import HomeAbout from '../components/HomeAbout';
import HomeSwiper from '../components/HomeSwiper';
import HomeProject from '../components/HomeProject';
import FadeInWhenVisible from '../utils/InviewHelper.js';

function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HomeHero />
      <FadeInWhenVisible>
        <HomeAbout />
      </FadeInWhenVisible>
      <HomeSwiper />
      <FadeInWhenVisible>
        <HomeProject />
      </FadeInWhenVisible>
    </motion.main>
  );
}

export default HomePage;
