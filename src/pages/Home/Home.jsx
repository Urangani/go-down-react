import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import WhatsAppWidget from '../../components/WhatsAppWidget/WhatsAppWidget';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import FeaturedMerch from '../../components/FeaturedProducts/FeaturedMerch';
import OurStoresPreview from '../../components/OurStores/OurStoresPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProducts/>
      <FeaturedMerch/>
      <WhyChooseUs />
      <OurStoresPreview />
      <WhatsAppWidget />
    </div>
  );
};

export default Home;
