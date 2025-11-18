import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Products = () => {
  const headers = ['Product ID', 'Category ID', 'Name', 'Price', 'Stock', 'SKU', 'Status', 'Created At'];
  const data = [
    { id: 1, categoryId: 1, name: 'Go Down Herb (Ndaa)', price: 'R150', stock: 50, sku: 'GDH-001', status: 'active', createdAt: '2023-01-01 10:00:00' },
    { id: 2, categoryId: 2, name: 'Silent Herb (Ndaa)', price: 'R250', stock: 30, sku: 'SH-002', status: 'active', createdAt: '2023-02-01 11:00:00' }
  ];

  const fields = [
    { name: 'categoryId', label: 'Category ID', type: 'number' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'price', label: 'Price', type: 'number', step: '0.01' },
    { name: 'stockQuantity', label: 'Stock Quantity', type: 'number' },
    { name: 'sku', label: 'SKU', type: 'text' },
    { name: 'imageUrl', label: 'Image URL', type: 'url' },
    { name: 'status', label: 'Status', type: 'select', options: [{ value: 'active', label: 'Active' }, { value: 'inactive', label: 'Inactive' }] },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' },
    { name: 'updatedAt', label: 'Updated At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add product:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Product</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Product" />
      </div>
    </main>
  );
};

export default Products;
