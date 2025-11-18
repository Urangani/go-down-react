import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Suppliers = () => {
  const headers = ['Supplier ID', 'Name', 'Contact', 'Email', 'Product Type', 'Created At'];
  const data = [
    { id: 1, name: 'Herbal Supply Co.', contact: '1234567890', email: 'contact@herbalsupply.com', productType: 'Herbal Drinks', createdAt: '2023-01-01' },
    { id: 2, name: 'Natural Extracts Ltd.', contact: '0987654321', email: 'info@naturalextracts.com', productType: 'Tea Blends', createdAt: '2023-02-01' }
  ];

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'contact', label: 'Contact', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'productType', label: 'Product Type', type: 'text' },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add supplier:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Supplier Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Supplier</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Supplier" />
      </div>
    </main>
  );
};

export default Suppliers;
