import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';

const Login = () => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' }
  ];

  const handleSubmit = (data) => {
    console.log('Login data:', data);
    // Handle login logic here
  };

  return (
    <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login to Your Account</h1>
        <Form fields={fields} onSubmit={handleSubmit} submitLabel="Login" />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-green-600 hover:text-green-700">Sign up here</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Login;
