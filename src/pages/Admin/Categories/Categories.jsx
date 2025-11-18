import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Categories = () => {
  const headers = ['Category ID', 'Parent ID', 'Name', 'Description'];
  const data = [
    { id: 1, parentId: null, name: 'Herbal Drinks', description: 'Natural herbal beverages' },
    { id: 2, parentId: 1, name: 'Energy Drinks', description: 'Boosting herbal drinks' }
  ];

  const fields = [
    { name: 'parentId', label: 'Parent ID', type: 'number' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' }
  ];

  const handleSubmit = (data) => {
    console.log('Add category:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Category Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Category</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Category" />
      </div>
    </main>
  );
};

export default Categories;
