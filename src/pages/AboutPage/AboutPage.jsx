import React from 'react';
import natural from '../../assets/images/herb2/natural.jpg';
import quality from '../../assets/images/herb2/quality.jpg';
import healthy from '../../assets/images/herb2/health.jpg';
import delivery from '../../assets/images/herb2/delivery.jpg';
import productWarehouse from '../../assets/images/herb2/product-warehouse.jpg';
import salesPerson from '../../assets/images/herb2/sales-person.jpg';

const AboutPage = () => {
  const detailedFeatures = [
    {
      image: natural,
      title: 'Sourcing Natural Ingredients',
      description: 'We source our herbs directly from sustainable South African farms, ensuring freshness and supporting local communities. Our commitment to natural ingredients means no artificial additives or preservatives.'
    },
    {
      image: quality,
      title: 'Advanced Quality Control',
      description: 'Every batch undergoes rigorous laboratory testing for potency, purity, and safety. Our state-of-the-art facilities combine traditional herbal wisdom with modern scientific methods.'
    },
    {
      image: delivery,
      title: 'Nationwide Distribution Network',
      description: 'With strategic partnerships across South Africa, we ensure your orders reach you quickly and safely. Our eco-friendly packaging maintains product quality during transit.'
    },
    {
      image: healthy,
      title: 'Holistic Health Approach',
      description: 'Our products are designed to support overall wellness, drawing from centuries of traditional healing practices. We focus on preventive health through natural, balanced formulations.'
    },
    {
      image: productWarehouse,
      title: 'Sustainable Production',
      description: 'Our production process minimizes environmental impact through energy-efficient methods and waste reduction. We\'re committed to preserving South Africa\'s rich herbal heritage for future generations.'
    },
    {
      image: salesPerson,
      title: 'Expert Customer Support',
      description: 'Our knowledgeable team is passionate about herbal wellness and ready to help you choose the right products. We provide personalized recommendations and ongoing support for your health journey.'
    }
  ];

  return (
    <main className="bg-gradient-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About Go Down Herbs</h1>
          <p className="text-gray-700 text-lg mb-4 max-w-3xl mx-auto">Go-Down Herbs is a South African-based company specializing in the production, distribution, and sales of unique herbal mixture drinks and beverages designed to promote health and wellness.</p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">Founded with a vision to bridge traditional herbal knowledge with modern health needs, we've grown from a small local operation to a trusted name in natural wellness products across South Africa.</p>
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg mb-4">Born from a passion for South Africa's rich herbal heritage, Go-Down Herbs began as a small family venture in the heart of the Western Cape. Our founders, drawing from generations of traditional knowledge, recognized the need for accessible, high-quality herbal products in modern life.</p>
            <p className="text-gray-700 text-lg mb-4">Today, we continue to honor our roots while embracing innovation. Our journey is one of growth, learning, and unwavering commitment to natural wellness. Every product we create carries the essence of our heritage and the promise of better health for our customers.</p>
          </div>
        </div>

        {/* Detailed Features Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Wellness Journey</h3>
          <p className="text-gray-600 mb-6">Discover the power of natural herbs and experience the Go-Down Herbs difference today.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all">
            Explore Our Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
