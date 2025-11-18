import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Orders = () => {
  const headers = ['Order ID', 'User ID', 'Address ID', 'Order Date', 'Status', 'Total Amount', 'Payment Status', 'Created At'];
  const data = [
    { id: 1, userId: 1, addressId: 1, orderDate: '2023-01-01', status: 'pending', totalAmount: 'R150', paymentStatus: 'pending', createdAt: '2023-01-01' },
    { id: 2, userId: 2, addressId: 2, orderDate: '2023-02-01', status: 'shipped', totalAmount: 'R250', paymentStatus: 'paid', createdAt: '2023-02-01' }
  ];

  const fields = [
    { name: 'userId', label: 'User ID', type: 'number' },
    { name: 'addressId', label: 'Address ID', type: 'number' },
    { name: 'orderDate', label: 'Order Date', type: 'datetime-local' },
    { name: 'status', label: 'Status', type: 'select', options: [{ value: 'pending', label: 'Pending' }, { value: 'shipped', label: 'Shipped' }, { value: 'delivered', label: 'Delivered' }] },
    { name: 'totalAmount', label: 'Total Amount', type: 'number', step: '0.01' },
    { name: 'paymentStatus', label: 'Payment Status', type: 'select', options: [{ value: 'pending', label: 'Pending' }, { value: 'paid', label: 'Paid' }] },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add order:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Order</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Order" />
      </div>
    </main>
  );
};

export default Orders;
