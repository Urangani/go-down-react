import React from 'react';
import ProductCard from '../../components/FeaturedProducts/ProductCard';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Go Down Herb (Ndaa)',
      price: 'R150',
      image: '/assets/images/drinks.jpeg',
      description: 'Premium herbal mixture drink for wellness.'
    },
    {
      id: 2,
      name: 'Silent Herb (Ndaa)',
      price: 'R250',
      image: '/assets/images/waters.jpg',
      description: 'Effective herbal beverage for health.'
    },
    {
      id: 3,
      name: 'Herbal Tea Blend',
      price: 'R100',
      image: '/assets/images/godown(logo).png',
      description: 'Natural tea blend for daily wellness.'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
