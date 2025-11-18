import React from 'react';
import { Link } from 'react-router-dom';

const OurStoresPreview = () => {
  const previewStores = [
    {
      name: 'Barclays Square Shopping Centre',
      address: 'Shop F37, 296 Justice Mahomed Street, Sunnyside, Pretoria 0012',
      phone: '+27 71 533 6706 / +27 64 502 8037',
      lat: -25.7461,
      lng: 28.1881,
    },
    {
      name: 'Braamfontein Store',
      address: '16 Station Street & De Korte Street, Shop 3 Braamfontein (Behind Wits Art Museum) Johannesburg 2001',
      phone: '+27 71 533 6706 / +27 64 502 8037',
      lat: -26.1929,
      lng: 28.0305,
    },
    {
      name: 'Jerice Palace Complex',
      address: 'Post Office Street (Opposite Old Hardware City) Behind StarGlass & Coja, Thohoyandou',
      phone: '+27 77 447 5959 / +27 71 533 6706',
      lat: -22.9456,
      lng: 30.4848,
    },
  ];

  const getStaticMapUrl = (lat, lng) => {
    // Using OpenStreetMap embed service (no API key required)
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Stores</h2>
          <p className="text-lg text-gray-700">
            Find our herbal health solutions at various locations across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {previewStores.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="h-32 bg-gray-200 relative">
                <iframe
                  src={getStaticMapUrl(store.lat, store.lng)}
                  className="w-full h-full border-0"
                  title={`Map of ${store.name}`}
                  loading="lazy"
                ></iframe>
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-semibold text-gray-700">
                  📍
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{store.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{store.address}</p>
                <p className="text-gray-500 text-sm">{store.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/our-stores"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            View All Stores & Interactive Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStoresPreview;
