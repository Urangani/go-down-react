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
    <section className="bg-linear-to-b from-gray-300 via-green-100 to-green-300 py-15 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`who-we-are-text ${isInView ? 'in-view' : ''}`} ref={aboutRef}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-4">Go-Down Herbs is a South African-based company specializing in the production, distribution, and sales of unique herbal mixture drinks and beverages designed to promote health and wellness.</p>
            <p className="text-gray-700 text-lg mb-6">Founded with a vision to bridge traditional herbal knowledge with modern health needs, we've grown from a small local operation to a trusted name in natural wellness products across South Africa.</p>
            <a href="#about">
              <button className="transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 shadow-lg h-12 rounded-full bg-linear-to-r from-amber-800 to-amber-800 text-white hover:from-green-700 hover:to-green-600 text-lg px-8 transform hover:scale-105">Learn More About Us</button>
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden h-80 md:h-96 flex items-center justify-center ">
            <ImageSlider />
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Wellness Journey</h3>
          <p className="text-gray-600 mb-6">Discover the power of natural herbs and experience the Go-Down Herbs difference today.</p>
          <button className="transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 shadow-lg h-12 rounded-full bg-linear-to-r from-amber-800 to-amber-800 text-white hover:from-green-700 hover:to-green-600 text-lg px-8 transform hover:scale-105">"
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
