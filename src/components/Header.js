import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaChevronDown } from 'react-icons/fa';

function Header({ cartCount, wishlistCount, searchQuery, setSearchQuery, isMenuOpen, setIsMenuOpen, setFilter }) {
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSuggestions(query ? ['UK Crisps Pack', 'Korean Energy Drink'].filter(s => s.toLowerCase().includes(query.toLowerCase())) : []);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="top-nav">
        <div className="logo">
          <img src="https://via.placeholder.com/50x50/1E90FF/FFFFFF?text=W" alt="Wholesale Store Logo" />
          <span>Wholesale Store</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearch} />
          <button><FaSearch /></button>
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((s, i) => <div key={i} onClick={() => setSearchQuery(s)}>{s}</div>)}
            </div>
          )}
        </div>
        <div className="user-actions">
          <a href="#"><FaHeart /> Wishlist ({wishlistCount})</a>
          <a href="#"><FaShoppingCart /> Cart ({cartCount})</a>
          <a href="#"><FaUser /> Login/Register</a>
        </div>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}><FaBars /></button>
      </div>
      <nav className={`main-nav ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>All Categories <FaChevronDown className={isDropdownOpen ? 'rotate' : ''} /></a>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><a href="#" onClick={() => { setFilter('all'); setIsDropdownOpen(false); }}>All</a></li>
                <li><a href="#" onClick={() => { setFilter('snacks'); setIsDropdownOpen(false); }}>UK Snacks</a></li>
                <li><a href="#" onClick={() => { setFilter('drinks'); setIsDropdownOpen(false); }}>Korean Products</a></li>
                <li><a href="#" onClick={() => { setFilter('lighters'); setIsDropdownOpen(false); }}>Lighters & Butane</a></li>
                <li><a href="#" onClick={() => { setFilter('misc'); setIsDropdownOpen(false); }}>Miscellaneous Items</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;