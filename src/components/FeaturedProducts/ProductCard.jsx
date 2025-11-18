import React from 'react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        {product.category && <p className="text-xs text-gray-500 mb-2">Category: {product.category}</p>}
        {product.quantity && <p className="text-xs text-gray-500 mb-4">Qty: {product.quantity}</p>}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">{product.price}</span>
          <button
            onClick={handleAddToCart}
            className="add-cart-btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-md transition-all text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
