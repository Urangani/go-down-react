import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">{product.price}</span>
          <button className="add-cart-btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
