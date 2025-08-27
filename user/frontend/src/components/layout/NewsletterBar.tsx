import React, { useState } from 'react';
import Button from '../atomic/Button';

const NewsletterBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-neutral-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
          Get Pickled Updates
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
          Be the first to know about new flavors, recipes, and special offers. Join our pickle-loving community!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-input w-full"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              disabled={isSubmitting || isSubmitted}
              className="sm:w-auto"
            >
              {isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </div>
        </form>

        {isSubmitted && (
          <p className="text-success-600 text-sm mt-4 animate-fade-in">
            Thanks for subscribing! Check your email for confirmation.
          </p>
        )}

        <p className="text-xs text-neutral-500 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterBar;
