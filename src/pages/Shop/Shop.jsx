import React, { useState } from 'react';
import ProductCard from '../../components/FeaturedProducts/ProductCard';
import ProductPreview from './ProductPreview';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Go Down Herb (Ndaa)',
      price: 'R150',
      image: '/assets/images/drinks.jpeg',
      description: 'Premium herbal mixture drink for wellness.',
      category: 'Beverages',
      quantity: 50
    },
    {
      id: 2,
      name: 'Silent Herb (Ndaa)',
      price: 'R250',
      image: '/assets/images/silentHerb.jpg',
      description: 'Effective herbal beverage for health.',
      category: 'Beverages',
      quantity: 30
    },
    {
      id: 3,
      name: 'Herbal Tea Blend',
      price: 'R100',
      image: '/assets/images/waters.jpg',
      description: 'Natural tea blend for daily wellness.',
      category: 'Beverages',
      quantity: 40
    },
    {
      id: 4,
      name: 'Green Shirt',
      price: 'R200',
      image: '/assets/images/merch/green-shirt.png',
      description: 'Comfortable green shirt with logo.',
      category: 'Merchandise',
      quantity: 20
    },
    {
      id: 5,
      name: 'Black Shirt',
      price: 'R200',
      image: '/assets/images/merch/black-shirt.png',
      description: 'Stylish black shirt with logo.',
      category: 'Merchandise',
      quantity: 25
    },
    {
      id: 6,
      name: 'White Shirt',
      price: 'R200',
      image: '/assets/images/merch/white-shirt.png',
      description: 'Classic white shirt with logo.',
      category: 'Merchandise',
      quantity: 15
    },
    {
      id: 7,
      name: 'Cooler Cap',
      price: 'R150',
      image: '/assets/images/merch/cap-cooler.png',
      description: 'Cooler cap for outdoor activities.',
      category: 'Merchandise',
      quantity: 35
    },
    {
      id: 8,
      name: 'Herbal Oil',
      price: 'R300',
      image: '/assets/images/Product/oil.png',
      description: 'Pure herbal oil for various uses.',
      category: 'Health Products',
      quantity: 10
    },
    {
      id: 9,
      name: 'Natural Cleaner',
      price: 'R120',
      image: '/assets/images/Product/cleaner.png',
      description: 'Eco-friendly natural cleaner.',
      category: 'Health Products',
      quantity: 60
    },
    {
      id: 10,
      name: 'Blue Refreshment',
      price: 'R180',
      image: '/assets/images/Product/blue-refreshment.png',
      description: 'Refreshing blue herbal drink.',
      category: 'Beverages',
      quantity: 45
    }
  ];

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="bg-gradient-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop Our Products</h1>
      <div className="mb-8">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block w-full max-w-xs border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => handleProductClick(product)} className="cursor-pointer hover:scale-105 transition-transform duration-200">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductPreview product={selectedProduct} onClose={closePreview} />
      )}
      </div>
    </main>
  );
};

export default Shop;
