import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';

const Signup = () => {
  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
  ];

  const handleSubmit = (data) => {
    console.log('Signup data:', data);
    // Handle signup logic here
  };

  return (
    <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Your Account</h1>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Sign Up" />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-green-600 hover:text-green-700">Login here</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
