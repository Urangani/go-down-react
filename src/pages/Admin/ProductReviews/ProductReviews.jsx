import React from 'react';
import Table from '../../../components/Table/Table';
import Form from '../../../components/Form/Form';

const ProductReviews = () => {
  const headers = ['Review ID', 'Product ID', 'User ID', 'Rating', 'Comment', 'Created At'];
  const data = [
    { id: 1, productId: 1, userId: 1, rating: 5, comment: 'Great product!', createdAt: '2023-01-01' },
    { id: 2, productId: 2, userId: 2, rating: 4, comment: 'Very effective.', createdAt: '2023-02-01' }
  ];

  const fields = [
    { name: 'productId', label: 'Product ID', type: 'number' },
    { name: 'userId', label: 'User ID', type: 'number' },
    { name: 'rating', label: 'Rating', type: 'number', min: 1, max: 5 },
    { name: 'comment', label: 'Comment', type: 'textarea' },
    { name: 'createdAt', label: 'Created At', type: 'datetime-local' }
  ];

  const handleSubmit = (data) => {
    console.log('Add product review:', data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Review Management</h1>

      <div className="mb-8">
        <Table headers={headers} data={data} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Product Review</h2>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Add Product Review" />
      </div>
    </main>
  );
};

export default ProductReviews;
