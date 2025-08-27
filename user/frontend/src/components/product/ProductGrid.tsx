import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  className = '',
  columns = 4,
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <svg className="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 className="text-lg font-medium text-neutral-900 mb-2">
          No products found
        </h3>
        <p className="text-neutral-600">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${gridClasses[columns]} ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
