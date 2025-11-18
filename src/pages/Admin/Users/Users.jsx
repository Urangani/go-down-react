import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const Users = () => {
  const headers = ['User ID', 'Full Name', 'Email', 'Phone', 'Role', 'Created At', 'Updated At'];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', role: 'customer', createdAt: '2023-01-01', updatedAt: '2023-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', role: 'admin', createdAt: '2023-02-01', updatedAt: '2023-02-01' }
  ];

  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'password', label: 'Password Hash', type: 'password' },
    { name: 'role', label: 'Role', type: 'select', options: [{ value: 'admin', label: 'Admin' }, { value: 'customer', label: 'Customer' }] },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' },
    { name: 'updatedAt', label: 'Updated At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add user:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New User</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add User" />
      </div>
    </main>
  );
};

export default Users;
