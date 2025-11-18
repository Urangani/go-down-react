import React, { useState } from 'react';

const Form = ({ fields, onSubmit, submitLabel }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              rows={field.rows || 3}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              onChange={handleChange}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              onChange={handleChange}
            >
              {field.options.map((option, idx) => (
                <option key={idx} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div>
        <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;
