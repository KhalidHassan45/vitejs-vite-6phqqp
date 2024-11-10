import { useState } from 'react';

export default function CarRentals() {
  const [searchParams, setSearchParams] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    carType: 'any',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle car rental search
    console.log('Searching cars:', searchParams);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rent a Car</h1>
      
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={searchParams.pickupLocation}
              onChange={(e) => setSearchParams({ ...searchParams, pickupLocation: e.target.value })}
              placeholder="City or Airport"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={searchParams.dropoffLocation}
              onChange={(e) => setSearchParams({ ...searchParams, dropoffLocation: e.target.value })}
              placeholder="City or Airport"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={searchParams.pickupDate}
              onChange={(e) => setSearchParams({ ...searchParams, pickupDate: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Drop-off Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={searchParams.dropoffDate}
              onChange={(e) => setSearchParams({ ...searchParams, dropoffDate: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Car Type</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={searchParams.carType}
              onChange={(e) => setSearchParams({ ...searchParams, carType: e.target.value })}
            >
              <option value="any">Any</option>
              <option value="economy">Economy</option>
              <option value="compact">Compact</option>
              <option value="midsize">Midsize</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search Cars
        </button>
      </form>
    </div>
  );
}