import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  return (
    <main className="bg-linear-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. <Link to="/shop" className="text-green-600 hover:underline">Shop now</Link></p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-lg font-bold text-green-600 mb-4">{item.price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-l"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Total: R{getTotal().toFixed(2)}</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Gateway</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="123" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </>
      )}
      </div>
    </main>
  );
};

export default Cart;
