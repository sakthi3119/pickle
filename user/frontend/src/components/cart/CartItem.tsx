import React from 'react';
import Stepper from '../atomic/Stepper';
import { Product } from '../product/ProductCard';

export interface CartItemProps {
  id: number;
  product: Product;
  quantity: number;
  size?: string;
  spice?: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  product,
  quantity,
  size,
  spice,
  onUpdateQuantity,
  onRemove,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    onUpdateQuantity(id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="flex items-start space-x-4 p-4 border-b border-neutral-200 last:border-b-0">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-neutral-900 text-sm">
              {product.name}
            </h3>
            {size && (
              <p className="text-xs text-neutral-600 mt-1">
                Size: {size}
              </p>
            )}
            {spice && (
              <p className="text-xs text-neutral-600">
                Spice: {spice}
              </p>
            )}
            <p className="text-sm font-medium text-neutral-900 mt-2">
              ${(product.price * quantity).toFixed(2)}
            </p>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200 p-1"
            aria-label="Remove item"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Quantity Controls */}
        <div className="mt-3">
          <label className="text-xs font-medium text-neutral-700 mb-1 block">
            Quantity
          </label>
          <Stepper
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={10}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
