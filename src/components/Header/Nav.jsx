import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      <Link to="/home" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/shop" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Shop
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/about" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/our-stores" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Our Stores
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/contact" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/login" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Login
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
      <Link to="/signup" className="text-sm font-medium transition-colors relative group text-gray-700 hover:text-green-600">
        Sign Up
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
      </Link>
    </nav>
  );
};

export default Nav;
