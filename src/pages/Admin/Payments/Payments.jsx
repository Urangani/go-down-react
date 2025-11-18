import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Payments = () => {
  const headers = ['Payment ID', 'Order ID', 'Amount', 'Method', 'Transaction Ref', 'Status', 'Payment Date'];
  const data = [
    { id: 1, orderId: 1, amount: 'R150', method: 'card', transactionRef: 'TXN-001', status: 'pending', paymentDate: '2023-01-01' },
    { id: 2, orderId: 2, amount: 'R250', method: 'paypal', transactionRef: 'TXN-002', status: 'completed', paymentDate: '2023-02-01' }
  ];

  const fields = [
    { name: 'orderId', label: 'Order ID', type: 'number' },
    { name: 'amount', label: 'Amount', type: 'number', step: '0.01' },
    { name: 'method', label: 'Method', type: 'select', options: [{ value: 'card', label: 'Card' }, { value: 'paypal', label: 'PayPal' }] },
    { name: 'transactionRef', label: 'Transaction Ref', type: 'text' },
    { name: 'status', label: 'Status', type: 'select', options: [{ value: 'pending', label: 'Pending' }, { value: 'completed', label: 'Completed' }] },
    { name: 'paymentDate', label: 'Payment Date', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add payment:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Payment</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Payment" />
      </div>
    </main>
  );
};

export default Payments;
