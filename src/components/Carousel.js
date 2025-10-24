import React from 'react';
import { motion } from 'framer-motion';

function Categories({ setFilter }) {
  const categories = [
    { name: 'Snacks', img: 'https://picsum.photos/200/150?random=2', filter: 'snacks' }, // Pregenerated snacks image
    { name: 'Drinks', img: 'https://picsum.photos/200/150?random=3', filter: 'drinks' }, // Pregenerated drinks image
    { name: 'Lighters', img: 'https://picsum.photos/200/150?random=4', filter: 'lighters' }, // Pregenerated lighters image
    { name: 'Miscellaneous', img: 'https://picsum.photos/200/150?random=5', filter: 'misc' }, // Pregenerated misc image
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            className="category-card" 
            onClick={() => setFilter(cat.filter)} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
          >
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categories;