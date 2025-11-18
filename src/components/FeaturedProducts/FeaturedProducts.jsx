import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import silentHerb from '../../assets/images/silentHerb.jpg';
import waters from '../../assets/images/waters.jpg';
import godownLogo from '../../assets/images/Product1.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Go Down Herb (Ndaa)',
      price: 'R150',
      image: silentHerb,
      description: 'Premium herbal mixture drink for wellness.'
    },
    {
      id: 2,
      name: 'Silent Herb (Ndaa)',
      price: 'R250',
      image: waters,
      description: 'Effective herbal beverage for health.'
    },
    {
      id: 3,
      name: 'Herbal Tea Blend',
      price: 'R100',
      image: godownLogo,
      description: 'Natural tea blend for daily wellness.'
    }
  ];

  return (
    <section className="featured-products-section py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our top-selling herbal products, crafted with care to promote natural wellness and health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <button className="view-all-btn bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all transform hover:scale-105">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
