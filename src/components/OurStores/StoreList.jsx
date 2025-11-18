import React from 'react';

const StoreList = ({ stores, onStoreClick }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
      {stores.map((store, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onStoreClick(store)}
        >
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{store.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{store.address}</p>
          <p className="text-gray-500 text-sm">{store.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
