import React from 'react';

interface LifestyleGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const LifestyleGallery: React.FC<LifestyleGalleryProps> = ({
  images,
  title = 'Life in Pickles',
  subtitle = 'See how our pickles bring joy to tables around the world',
  className = '',
}) => {
  const fallback = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60';
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300 cursor-pointer group"
            >
              <img
                src={image || fallback}
                alt={`Lifestyle image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback; }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-pickle-600 hover:text-pickle-700 font-medium transition-colors duration-200">
            <span>View All Photos</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;