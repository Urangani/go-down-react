import React, { useEffect, useRef, useState } from 'react';
import ImageSlider from './ImageSlider';

const About = () => {
  const aboutRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className={`who-we-are-text ${isInView ? 'in-view' : ''}`} ref={aboutRef}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-4">Go-Down Herbs is a South African-based company specializing in the production, distribution, and sales of unique herbal mixture drinks and beverages designed to promote health and wellness.</p>
          <p className="text-gray-700 text-lg mb-6">By leveraging traditional knowledge and modern production techniques, we deliver high-quality, effective, and affordable herbal health products.</p>
          <a href="#about">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all">Learn More About Us</button>
          </a>
        </div>

        {/* Right Image Slider */}
        <div className="relative bg-white rounded-lg overflow-hidden h-80 md:h-96 flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
