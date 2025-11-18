import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <Link to="/home" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Home</Link>
      <Link to="/shop" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Shop</Link>
      <Link to="/about" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">About</Link>
      <Link to="/our-stores" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Our Stores</Link>
      <Link to="/contact" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Contact</Link>
      <Link to="/login" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Login</Link>
      <Link to="/signup" onClick={toggle} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors">Sign Up</Link>
    </div>
  );
};

export default MobileMenu;
