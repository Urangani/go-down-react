import React from 'react';

const StoreFilter = ({ cities, selectedCity, onCityChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="city-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by City
      </label>
      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
      >
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoreFilter;
