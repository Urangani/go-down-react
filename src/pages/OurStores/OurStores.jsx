import React, { useState } from 'react';
import StoreList from '../../components/OurStores/StoreList';
import StoreMap from '../../components/OurStores/StoreMap';
import StoreFilter from '../../components/OurStores/StoreFilter';

const OurStores = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [mapCenter, setMapCenter] = useState([-25.7461, 28.1881]); // Centered on Pretoria
  const [mapZoom, setMapZoom] = useState(6);

  const stores = [
    {
      name: 'Barclays Square Shopping Centre',
      address: 'Shop F37, 296 Justice Mahomed Street, Sunnyside, Pretoria 0012',
      phone: '+27 71 533 6706 / +27 64 502 8037',
      city: 'Pretoria',
      lat: -25.7461,
      lng: 28.1881,
    },
    {
      name: 'Braamfontein Store',
      address: '16 Station Street & De Korte Street, Shop 3 Braamfontein (Behind Wits Art Museum) Johannesburg 2001',
      phone: '+27 71 533 6706 / +27 64 502 8037',
      city: 'Johannesburg',
      lat: -26.1929,
      lng: 28.0305,
    },
    {
      name: 'Jerice Palace Complex',
      address: 'Post Office Street (Opposite Old Hardware City) Behind StarGlass & Coja, Thohoyandou',
      phone: '+27 77 447 5959 / +27 71 533 6706',
      city: 'Thohoyandou',
      lat: -22.9456,
      lng: 30.4848,
    },
    {
      name: 'N1 Business Centre',
      address: 'Shop no 12, N1 Business Centre (Old Musina Hospital, opposite MacDonald) Musina 0900',
      phone: '+27 79 928 0149 / +27 71 533 6706',
      city: 'Musina',
      lat: -22.3486,
      lng: 30.0417,
    },
    {
      name: 'Nzhelele Valley Shopping Centre',
      address: 'R523 Dzanani (Opposite Spar At The Containers) Nzhelele 0993',
      phone: '+27 71 533 6706',
      city: 'Nzhelele',
      lat: -22.9167,
      lng: 30.4167,
    },
    {
      name: 'Dada Square',
      address: 'Shop No 10, Dada Square, 52a Market Street Polokwane 0699',
      phone: '+27 71 533 6706',
      city: 'Polokwane',
      lat: -23.8962,
      lng: 29.4486,
    },
    {
      name: 'Magulani Store',
      address: 'Shop No 02, Magulani, N1 & Commercial Street (Opposite KFC) Louis Trichardt (Makhado) 0920',
      phone: '+27 71 533 6706',
      city: 'Louis Trichardt',
      lat: -23.0439,
      lng: 29.9032,
    },
  ];

  const cities = [...new Set(stores.map(store => store.city))];

  const filteredStores = selectedCity
    ? stores.filter(store => store.city === selectedCity)
    : stores;

  const handleStoreClick = (store) => {
    setMapCenter([store.lat, store.lng]);
    setMapZoom(15);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      const cityStores = stores.filter(store => store.city === city);
      if (cityStores.length > 0) {
        setMapCenter([cityStores[0].lat, cityStores[0].lng]);
        setMapZoom(12);
      }
    } else {
      setMapCenter([-25.7461, 28.1881]);
      setMapZoom(6);
    }
  };

  return (
    <main className="bg-linear-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Stores</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find our products at various locations across South Africa. We are committed to making our herbal health solutions accessible to everyone.
      </p>

      <StoreFilter
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Store Locations</h2>
          <StoreList stores={filteredStores} onStoreClick={handleStoreClick} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Map View</h2>
          <StoreMap stores={filteredStores} center={mapCenter} zoom={mapZoom} />
        </div>
      </div>
      </div>
    </main>
  );
};

export default OurStores;
