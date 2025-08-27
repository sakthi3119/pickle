import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../atomic/Button';
import Pill from '../atomic/Pill';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className={`bg-white rounded-lg shadow-soft overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image with Hover Effect */}
        <div className="relative aspect-square">
          <img
            src={product.image || '/images/products/classicdillpickle.jpg'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/products/classicdillpickle.jpg'; }}
          />

          {product.tag && (
            <div className="absolute top-4 left-4 z-10">
              <Pill variant="pickle" size="sm">
                {product.tag}
              </Pill>
            </div>
          )}

          {/* Add to Cart Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Button
              variant="primary"
              size="md"
              onClick={handleAddToCart}
              className="transform transition-all duration-300 hover:scale-105"
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2 tracking-wide">
            {product.name}
          </h3>
          <p className="text-neutral-600 text-base font-medium">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
          </p>

          {product.description && (
            <p className="text-neutral-500 text-sm mt-2 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
