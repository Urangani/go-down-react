import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import WhatsAppWidget from '../../components/WhatsAppWidget/WhatsAppWidget';
import Slider from '../../components/FeaturedProducts/Slider';
import OurStoresPreview from '../../components/OurStores/OurStoresPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Slider/>
      {/* <FeaturedProducts /> */}
      <WhyChooseUs />
      <OurStoresPreview />
      <WhatsAppWidget />
    </div>
  );
};

export default Home;
