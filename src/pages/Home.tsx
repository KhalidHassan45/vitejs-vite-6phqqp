import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Journey Begins Here
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing destinations, book flights, find perfect hotels, and make your travel dreams come true.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/flights"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Flights</h2>
          <p className="text-gray-600">Find the best deals on flights worldwide</p>
        </Link>

        <Link
          to="/hotels"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Hotels</h2>
          <p className="text-gray-600">Book comfortable stays at great prices</p>
        </Link>

        <Link
          to="/car-rentals"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Car Rentals</h2>
          <p className="text-gray-600">Rent vehicles for your journey</p>
        </Link>

        <Link
          to="/store"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Travel Store</h2>
          <p className="text-gray-600">Essential gear for your adventures</p>
        </Link>
      </div>
    </div>
  );
}