import React from 'react';
import { motion } from 'framer-motion';

function Modal({ product, onClose, addToCart }) {
  return (
    <motion.div 
      className="modal" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} />
        <p>{product.desc}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;