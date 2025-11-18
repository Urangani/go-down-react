import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const OrderItems = () => {
  const headers = ['Order Item ID', 'Order ID', 'Product ID', 'Quantity', 'Price', 'Subtotal'];
  const data = [
    { id: 1, orderId: 1, productId: 1, quantity: 1, price: 'R150', subtotal: 'R150' },
    { id: 2, orderId: 2, productId: 2, quantity: 1, price: 'R250', subtotal: 'R250' }
  ];

  const fields = [
    { name: 'orderId', label: 'Order ID', type: 'number' },
    { name: 'productId', label: 'Product ID', type: 'number' },
    { name: 'quantity', label: 'Quantity', type: 'number' },
    { name: 'price', label: 'Price', type: 'number', step: '0.01' },
    { name: 'subtotal', label: 'Subtotal', type: 'number', step: '0.01' }
  ];

  const handleSubmit = (data) => {
    console.log('Add order item:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Item Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Order Item</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Order Item" />
      </div>
    </main>
  );
};

export default OrderItems;
