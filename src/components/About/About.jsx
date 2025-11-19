import React, { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider";

const About = () => {
  const aboutRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [typedTexts, setTypedTexts] = useState(["", "", ""]);

  // Text content
  const contents = [
    "Who We Are",
    "Go-Down Herbs is a South African-based company specializing in the production, distribution, and sales of unique herbal mixture drinks and beverages designed to promote health and wellness.",
    "Founded with a vision to bridge traditional herbal knowledge with modern health needs, we've grown from a small local operation to a trusted name in natural wellness products across South Africa."
  ];

  // Refs to track current paragraph and character index
  const currentParagraphRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      const para = currentParagraphRef.current;
      const charIndex = charIndexRef.current;

      if (para >= contents.length) {
        clearInterval(interval);
        return;
      }

      setTypedTexts((prev) => {
        const newTexts = [...prev];
        newTexts[para] += contents[para][charIndex];
        return newTexts;
      });

      charIndexRef.current += 1;

      if (charIndexRef.current >= contents[para].length) {
        currentParagraphRef.current += 1;
        charIndexRef.current = 0;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="bg-gradient-to-b from-gray-300 via-green-200 to-gray-300 py-15 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div ref={aboutRef} className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-r-2 border-gray-900 pr-2 whitespace-nowrap overflow-hidden animate-blink-cursor">
              {typedTexts[0]}
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-700 text-lg mb-4">{typedTexts[1]}</p>
            <p className="text-gray-700 text-lg mb-6">{typedTexts[2]}</p>

            <a href="#about">
              <button className="transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 shadow-lg h-12 rounded-full bg-gradient-to-r from-amber-800 to-amber-800 text-white hover:from-green-700 hover:to-green-600 text-lg px-8 transform hover:scale-105">
                Learn More About Us
              </button>
            </a>
          </div>

          {/* Image Slider */}
          <div className="relative rounded-lg flex items-center justify-center">
            <ImageSlider />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Wellness Journey</h3>
          <p className="text-gray-600 mb-6">
            Discover the power of natural herbs and experience the Go-Down Herbs difference today.
          </p>
          <button className="transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 shadow-lg h-12 rounded-full bg-gradient-to-r from-amber-800 to-amber-800 text-white hover:from-green-700 hover:to-green-600 text-lg px-8 transform hover:scale-105">
            Explore Our Products
          </button>
        </div>
      </div>

      {/* Cursor Animation */}
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #25283B; }
        }
        .animate-blink-cursor {
          animation: blink 0.7s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
