import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Travel Backpack',
    price: 79.99,
    description: 'Durable and water-resistant backpack perfect for adventures',
    category: 'bags',
  },
  {
    id: 2,
    name: 'Universal Travel Adapter',
    price: 24.99,
    description: 'Works in 150+ countries with USB ports',
    category: 'electronics',
  },
  {
    id: 3,
    name: 'Packing Cubes Set',
    price: 34.99,
    description: 'Set of 6 organizational cubes for efficient packing',
    category: 'accessories',
  },
  {
    id: 4,
    name: 'Neck Pillow',
    price: 19.99,
    description: 'Memory foam travel pillow for maximum comfort',
    category: 'comfort',
  },
];

export default function Store() {
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Travel Store</h1>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <select
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="bags">Bags</option>
          <option value="electronics">Electronics</option>
          <option value="accessories">Accessories</option>
          <option value="comfort">Comfort</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => console.log('Add to cart:', product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}