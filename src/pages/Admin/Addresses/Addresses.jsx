import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Addresses = () => {
  const headers = ['Address ID', 'User ID', 'Address Line', 'City', 'Province', 'Postal Code', 'Country', 'Type'];
  const data = [
    { id: 1, userId: 1, addressLine: '123 Main St', city: 'Cape Town', province: 'Western Cape', postalCode: '8001', country: 'South Africa', type: 'home' },
    { id: 2, userId: 2, addressLine: '456 Oak Ave', city: 'Johannesburg', province: 'Gauteng', postalCode: '2000', country: 'South Africa', type: 'work' }
  ];

  const fields = [
    { name: 'userId', label: 'User ID', type: 'number' },
    { name: 'addressLine', label: 'Address Line', type: 'textarea' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'province', label: 'Province', type: 'text' },
    { name: 'postalCode', label: 'Postal Code', type: 'text' },
    { name: 'country', label: 'Country', type: 'text' },
    { name: 'type', label: 'Type', type: 'select', options: [{ value: 'home', label: 'Home' }, { value: 'work', label: 'Work' }] }
  ];

  const handleSubmit = (data) => {
    console.log('Add address:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Address Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Address</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Address" />
      </div>
    </main>
  );
};

export default Addresses;
