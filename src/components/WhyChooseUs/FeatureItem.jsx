import React from 'react';

const FeatureItem = ({ feature }) => {
  return (
    <div className="flex h-[400px] text-center p-6 bg-linear-to-b from-white to-green-200 rounded-lg ">
      <img src={feature.image} className='rounded-lg' />
      <div className='flex flex-col ml-3 justify-center text-center'>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
