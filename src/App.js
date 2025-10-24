import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './index.css';

const products = [
  { id: 1, name: 'UK Crisps Pack', category: 'snacks', sku: '12345', desc: 'Delicious bulk crisps from the UK.', price: 10.99, img: 'https://picsum.photos/200/150?random=6' }, // Pregenerated product image
  { id: 2, name: 'Korean Energy Drink', category: 'drinks', sku: '67890', desc: 'Energizing drinks from Korea.', price: 15.49, img: 'https://picsum.photos/200/150?random=7' }, // Pregenerated product image
  { id: 3, name: 'Zippo Lighter', category: 'lighters', sku: '54321', desc: 'Reliable lighters for wholesale.', price: 8.99, img: 'https://picsum.photos/200/150?random=8' }, // Pregenerated product image
  // Add more products as needed
];

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalProduct, setModalProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    alert(`${product.name} added to wishlist!`);
  };

  const filteredProducts = products.filter(p => 
    (filter === 'all' || p.category === filter) && 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header 
        cartCount={cart.length} 
        wishlistCount={wishlist.length} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setFilter={setFilter} 
      />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Banner />
        <Categories setFilter={setFilter} />
        <Carousel products={filteredProducts} addToCart={addToCart} addToWishlist={addToWishlist} setModalProduct={setModalProduct} />
      </motion.main>
      <Footer />
      {modalProduct && <Modal product={modalProduct} onClose={() => setModalProduct(null)} addToCart={addToCart} />}
    </div>
  );
}

export default App;