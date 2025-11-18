import React from 'react';

const FeatureItem = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch p-4 md:p-6 bg-white rounded-lg shadow-sm gap-4">
      <div className="w-full md:w-1/2 rounded-lg bg-green-100 flex items-center justify-center overflow-hidden">
        <img
          src={feature?.image}
          alt={feature?.title || 'Feature image'}
          className="w-full h-48 md:h-auto md:max-h-[350px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {feature?.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          {feature?.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
