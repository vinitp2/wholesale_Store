import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Add more icons

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setMessage('Subscribed successfully!');
    } else {
      setMessage('Invalid email.');
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="message">{message}</div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 123 Wholesale St, City, Country</p>
          <p><FaPhone /> +1 (123) 456-7890</p>
          <p><FaEnvelope /> info@sappywholesale.com</p>
        </div>
        <div className="social-icons">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Sappy Wholesale. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;