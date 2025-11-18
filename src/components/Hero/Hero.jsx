import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;
    element.classList.add('animate');
  }, []);

  return (
    <section className="relative bg-linear-to-b from-white via-green-400 to-white text-white overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(../../assets/images/bg/bg-5.jpg)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center fade-in-up" ref={heroRef}>
        <div className="inline-flex items-center gap-2 bg-amber-800 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-4 h-4">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          <span className="text-sm font-medium">Natural Herbal Solutions</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Go Down Herbs</h1>
        <p className="text-xl md:text-2xl mb-4 text-green-100">"Kill Your Pride & Save Your Life"</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-green-50">South African herbal health solutions promoting wellness through traditional knowledge and modern techniques.</p>
        <Link to="/shop">
          <button className="inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 shadow-lg h-12 rounded-full bg-linear-to-r from-amber-800 to-amber-800 text-white hover:from-green-700 hover:to-green-600 text-lg px-8 transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13L5.4 5M7 19a1 1 0 11-2 0 1 1 0 012 0zm12 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
