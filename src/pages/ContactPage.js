import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm.js';
import ContactMap from '../components/ContactMap.js';
import FadeInWhenVisible from '../utils/InviewHelper.js';

function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FadeInWhenVisible>
        <ContactForm />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ContactMap />
      </FadeInWhenVisible>
    </motion.main>
  );
}
export default ContactPage;
