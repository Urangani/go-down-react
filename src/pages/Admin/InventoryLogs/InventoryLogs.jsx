import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const InventoryLogs = () => {
  const headers = ['Log ID', 'Product ID', 'Change Type', 'Quantity Change', 'Source', 'Created At'];
  const data = [
    { id: 1, productId: 1, changeType: 'in', quantityChange: 10, source: 'supplier', createdAt: '2023-01-01' },
    { id: 2, productId: 2, changeType: 'out', quantityChange: -5, source: 'sale', createdAt: '2023-02-01' }
  ];

  const fields = [
    { name: 'productId', label: 'Product ID', type: 'number' },
    { name: 'changeType', label: 'Change Type', type: 'select', options: [{ value: 'in', label: 'In' }, { value: 'out', label: 'Out' }] },
    { name: 'quantityChange', label: 'Quantity Change', type: 'number' },
    { name: 'source', label: 'Source', type: 'text' },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add inventory log:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Inventory Log Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Inventory Log</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Inventory Log" />
      </div>
    </main>
  );
};

export default InventoryLogs;
