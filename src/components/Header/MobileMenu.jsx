import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <Link to="/home" onClick={toggle}>Home</Link>
      <Link to="/shop" onClick={toggle}>Shop</Link>
      <Link to="/about" onClick={toggle}>About</Link>
      <Link to="/our-stores" onClick={toggle}>Our Stores</Link>
      <Link to="/contact" onClick={toggle}>Contact</Link>
      <Link to="/login" onClick={toggle}>Login</Link>
      <Link to="/signup" onClick={toggle}>Sign Up</Link>
    </div>
  );
};

export default MobileMenu;
