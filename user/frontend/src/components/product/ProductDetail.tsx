import React, { useState } from 'react';
import Button from '../atomic/Button';
import Stepper from '../atomic/Stepper';
import Pill from '../atomic/Pill';
import { Product } from './ProductCard';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, size?: string, spice?: string) => void;
  className?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onAddToCart,
  className = '',
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('500g');
  const [selectedSpice, setSelectedSpice] = useState('medium');
  const [quantity, setQuantity] = useState(1);

  // Mock product images - in a real app, this would come from the product data
  const fallbackImage = 'https://picsum.photos/seed/picklehero/1000/700';
  const productImages = [
    product.image || fallbackImage,
    product.image || fallbackImage,
    product.image || fallbackImage,
    product.image || fallbackImage,
  ];

  const sizeOptions = [
    { value: '250g', label: '250g', price: product.price * 0.7 },
    { value: '500g', label: '500g', price: product.price },
    { value: '1kg', label: '1kg', price: product.price * 1.8 },
  ];

  const spiceOptions = [
    { value: 'mild', label: 'Mild', icon: '🌶️' },
    { value: 'medium', label: 'Medium', icon: '🌶️🌶️' },
    { value: 'hot', label: 'Hot', icon: '🌶️🌶️🌶️' },
  ];

  const selectedSizeData = sizeOptions.find(option => option.value === selectedSize);
  const currentPrice = selectedSizeData?.price || product.price;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize, selectedSpice);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ${className}`}>
      {/* Left: Product Images */}
      <div>
        {/* Main Image */}
        <div className="mb-6">
          <img
            src={productImages[selectedImage]}
            alt={product.name}
            className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-medium"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-4">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${selectedImage === index
                ? 'border-pickle-500'
                : 'border-neutral-200 hover:border-neutral-300'
                }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="space-y-8">
        {/* Product Header */}
        <div>
          {product.tag && (
            <Pill variant="pickle" className="mb-4">
              {product.tag}
            </Pill>
          )}
          <h1 className="font-display font-bold text-3xl lg:text-4xl text-neutral-900 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-neutral-900">
            ${currentPrice.toFixed(2)}
          </p>
        </div>

        {/* Description */}
        <div>
          <h2 className="font-semibold text-lg text-neutral-900 mb-3">Description</h2>
          <p className="text-neutral-700 leading-relaxed">
            {product.description || 'Delicious handcrafted pickles made with love and tradition.'}
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h2 className="font-semibold text-lg text-neutral-900 mb-4">Jar Size</h2>
          <div className="flex flex-wrap gap-3">
            {sizeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSize(option.value)}
                className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${selectedSize === option.value
                  ? 'border-pickle-500 bg-pickle-50 text-pickle-700'
                  : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                  }`}
              >
                {option.label} - ${option.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        {/* Spice Level */}
        <div>
          <h2 className="font-semibold text-lg text-neutral-900 mb-4">Spice Level</h2>
          <div className="flex flex-wrap gap-3">
            {spiceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSpice(option.value)}
                className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${selectedSpice === option.value
                  ? 'border-pickle-500 bg-pickle-50 text-pickle-700'
                  : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                  }`}
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h2 className="font-semibold text-lg text-neutral-900 mb-4">Quantity</h2>
          <Stepper
            value={quantity}
            onChange={setQuantity}
            min={1}
            max={10}
            size="lg"
          />
        </div>

        {/* Add to Cart */}
        <div className="sticky bottom-6 lg:static">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAddToCart}
            className="text-lg py-4"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            }
            iconPosition="left"
          >
            Add to Cart - ${(currentPrice * quantity).toFixed(2)}
          </Button>
        </div>

        {/* Product Details */}
        <div className="border-t border-neutral-200 pt-8">
          <h2 className="font-semibold text-lg text-neutral-900 mb-4">Product Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-600">Ingredients:</span>
              <p className="text-neutral-900">Cucumbers, water, vinegar, salt, garlic, dill, spices</p>
            </div>
            <div>
              <span className="text-neutral-600">Shelf Life:</span>
              <p className="text-neutral-900">12 months unopened</p>
            </div>
            <div>
              <span className="text-neutral-600">Storage:</span>
              <p className="text-neutral-900">Refrigerate after opening</p>
            </div>
            <div>
              <span className="text-neutral-600">Allergens:</span>
              <p className="text-neutral-900">None</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
