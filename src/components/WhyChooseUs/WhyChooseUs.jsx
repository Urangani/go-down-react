import React from 'react';
import FeatureItem from './FeatureItem';
import natural from  './../../assets/images/herb2/natural.jpg'
import quality from  './../../assets/images/herb2/quality.jpg'
import healthy from  './../../assets/images/herb2/health.jpg'
import delivery from  './../../assets/images/herb2/delivery.jpg'

const WhyChooseUs = () => {
  const features = [
    {
      image: natural,
      title: 'Natural Ingredients',
      description: 'All our products are made from 100% natural herbs and ingredients, ensuring purity and effectiveness.'
    },
    {
      image: quality,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes to guarantee the highest standards in every product.'
    },
    {
      image: delivery,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across South Africa, with secure packaging to maintain product integrity.'
    },
    {
      image: healthy,
      title: 'Health Focused',
      description: 'Dedicated to promoting wellness through traditional herbal knowledge combined with modern science.'
    }
  ];

  return (
    <section className="bg-linear-to-b from-green-300 via-gray-200 to-gray-200 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Choose Go Down Herbs?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Experience the difference with our commitment to natural wellness and exceptional service.</p>
        </div>

        <div className="flex flex-col gap-y-3">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
