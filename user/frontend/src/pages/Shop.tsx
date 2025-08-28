import React, { useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import Modal from '../components/atomic/Modal';
import { Product } from '../components/product/ProductCard';

const Shop: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    pickleType: [] as string[],
    spiceLevel: [] as string[],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Classic Dill Pickles',
      price: 12.99,
      image: '/images/products/classicdillpickle.jpg',
      tag: 'Best Seller',
      description: 'Traditional dill pickles with garlic and herbs',
    },
    {
      id: 2,
      name: 'Spicy Jalapeño Pickles',
      price: 14.99,
      image: '/images/products/chili-pickle-DCeVNVBi.jpg',
      tag: 'New',
      description: 'Hot and zesty pickles with fresh jalapeños',
    },
    {
      id: 3,
      name: 'Sweet Bread & Butter',
      price: 13.99,
      image: '/images/products/breadandbutter.jpg',
      description: 'Sweet and tangy sliced pickles',
    },
    {
      id: 4,
      name: 'Garlic Dill Spears',
      price: 15.99,
      image: '/images/products/garlicdill.jpg',
      description: 'Crisp spears with extra garlic',
    },
    {
      id: 5,
      name: 'Pickled Onions',
      price: 11.99,
      image: '/images/products/Quick-Pickled-Onions-scaled.jpg',
      tag: 'Limited',
      description: 'Tangy red onions perfect for sandwiches',
    }
  ];

  const filterOptions = {
    pickleType: ['Cucumber', 'Onion', 'Carrot', 'Beet', 'Mixed'],
    spiceLevel: ['Mild', 'Medium', 'Hot'],
  };

  const handleFilterChange = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const resetFilters = () => {
    setSelectedFilters({
      pickleType: [],
      spiceLevel: [],
    });
  };

  const handleAddToCart = (product: Product) => {
    // Handle add to cart logic
    console.log('Added to cart:', product);
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-neutral-900 mb-4">
            Shop Our Pickles
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-lg text-neutral-600">
              Discover our handcrafted pickles made with love and tradition
            </p>
            <Button className="lg:hidden" variant="outline" size="sm" onClick={() => setIsFilterOpen(true)}>
              Filter
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Filter Panel */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-soft p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-neutral-900">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-sm"
                >
                  Reset
                </Button>
              </div>

              {/* Pickle Type Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-neutral-900 mb-4">Pickle Type</h3>
                <div className="space-y-3">
                  {filterOptions.pickleType.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.pickleType.includes(type)}
                        onChange={() => handleFilterChange('pickleType', type)}
                        className="w-4 h-4 text-pickle-600 border-neutral-300 rounded focus:ring-pickle-500"
                      />
                      <span className="ml-3 text-sm text-neutral-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Spice Level Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-neutral-900 mb-4">Spice Level</h3>
                <div className="space-y-3">
                  {filterOptions.spiceLevel.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.spiceLevel.includes(level)}
                        onChange={() => handleFilterChange('spiceLevel', level)}
                        className="w-4 h-4 text-pickle-600 border-neutral-300 rounded focus:ring-pickle-500"
                      />
                      <span className="ml-3 text-sm text-neutral-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-neutral-600">
                Showing {products.length} products
              </p>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-neutral-700">Sort by:</label>
                <select className="form-input text-sm w-auto">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                  <option>Name: Z to A</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Filter Panel */}
      <Modal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} title="Filters" size="lg">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Pickle Type</h3>
            <div className="space-y-3">
              {filterOptions.pickleType.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.pickleType.includes(type)}
                    onChange={() => handleFilterChange('pickleType', type)}
                    className="w-4 h-4 text-pickle-600 border-neutral-300 rounded focus:ring-pickle-500"
                  />
                  <span className="ml-3 text-sm text-neutral-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Spice Level</h3>
            <div className="space-y-3">
              {filterOptions.spiceLevel.map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.spiceLevel.includes(level)}
                    onChange={() => handleFilterChange('spiceLevel', level)}
                    className="w-4 h-4 text-pickle-600 border-neutral-300 rounded focus:ring-pickle-500"
                  />
                  <span className="ml-3 text-sm text-neutral-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset
            </Button>
            <Button size="sm" onClick={() => setIsFilterOpen(false)}>
              Apply
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Shop;
