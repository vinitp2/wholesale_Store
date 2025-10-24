import React from 'react';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <motion.section className="banner" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <img src="https://picsum.photos/1200/300?random=1" alt="New UK Snacks Available" /> {/* Pregenerated banner image */}
      <div className="banner-text">
        <h1>New UK Snacks Available</h1>
        <p>Bulk deals for retailers and small businesses.</p>
        <a href="#" className="cta-button">Shop Now</a>
      </div>
    </motion.section>
  );
}

export default Banner;