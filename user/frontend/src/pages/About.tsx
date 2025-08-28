import React from 'react';

const TimelineDot: React.FC<{ year: string }> = ({ year }) => (
  <div className="flex items-center space-x-3">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pickle-100 text-pickle-700 font-semibold">
      {year}
    </span>
    <span className="w-10 h-[2px] bg-pickle-200" />
  </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="relative bg-neutral-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1597715467880-95ef3e39a566?auto=format&fit=crop&w=2000&q=60"
            alt="Story background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Our journey from kitchen table to your table
          </h1>
          <p className="max-w-2xl mx-auto text-cream-100">
            Every jar tells a story of tradition, passion, and the perfect balance of flavors.
          </p>
        </div>
      </section>

      {/* Founder + Quote */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Meet Our Founder</h2>
            <p className="text-neutral-600 leading-relaxed">
              Sarah Johnson grew up watching her grandmother preserve the summer’s bounty in their family kitchen.
              The scent of dill, garlic, and warm brine is at the heart of our generations of family recipes you taste today.
              What began in a small kitchen with handcrafted techniques and modern twists has blossomed into the passion for bringing
              pickle perfection to your home. Each jar is crafted in small batches and packed with the crunch and flavor we’re known for.
            </p>
            <button className="mt-5 inline-flex items-center px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50">
              Read our story
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-soft p-6">
            <blockquote className="text-neutral-700 italic">
              “Every jar we make is a tribute to my grandmother’s kitchen table — the place where I learned that the art of pickling will never fade.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-2xl font-semibold text-neutral-900 mb-8">Our Journey</h2>
        <div className="relative">
          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200" />

          {/* 2008 - Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="lg:pr-10">
              <div className="flex items-center justify-start mb-3">
                <TimelineDot year="2008" />
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="font-semibold text-neutral-900 mb-1">The Beginning</h3>
                <p className="text-neutral-600">Started in a small kitchen with a dream to bring authentic pickling traditions to modern tables.</p>
              </div>
            </div>
            <div />
          </div>

          {/* 2012 - Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="hidden lg:block" />
            <div className="lg:pl-10">
              <div className="flex items-center justify-start lg:justify-end mb-3">
                <TimelineDot year="2012" />
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="font-semibold text-neutral-900 mb-1">First Farmers Market</h3>
                <p className="text-neutral-600">Our pickles gained local recognition for their crave‑worthy crunch and bold flavors.</p>
              </div>
            </div>
          </div>

          {/* 2016 - Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="lg:pr-10">
              <div className="flex items-center justify-start mb-3">
                <TimelineDot year="2016" />
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="font-semibold text-neutral-900 mb-1">Commercial Kitchen</h3>
                <p className="text-neutral-600">Expanded to a commercial kitchen to meet growing demand while maintaining our artisanal approach.</p>
              </div>
            </div>
            <div />
          </div>

          {/* 2020 - Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="hidden lg:block" />
            <div className="lg:pl-10">
              <div className="flex items-center justify-start lg:justify-end mb-3">
                <TimelineDot year="2020" />
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h3 className="font-semibold text-neutral-900 mb-1">Online Store Launch</h3>
                <p className="text-neutral-600">Launched nationwide shipping so pickle lovers across the country could enjoy our jars.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-2xl font-semibold text-neutral-900 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-pickle-100 text-pickle-700 mx-auto mb-3 flex items-center justify-center">🏺</div>
            <h3 className="font-semibold text-neutral-900">Tradition</h3>
            <p className="text-neutral-600 text-sm">We honor classic recipes using time‑tested methods.</p>
          </div>
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-pickle-100 text-pickle-700 mx-auto mb-3 flex items-center justify-center">✅</div>
            <h3 className="font-semibold text-neutral-900">Quality</h3>
            <p className="text-neutral-600 text-sm">Only the freshest ingredients are worthy of our jars.</p>
          </div>
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-pickle-100 text-pickle-700 mx-auto mb-3 flex items-center justify-center">✨</div>
            <h3 className="font-semibold text-neutral-900">Innovation</h3>
            <p className="text-neutral-600 text-sm">We balance creativity with craft to delight every palate.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-12 text-center">
        <h2 className="text-2xl font-display font-semibold mb-2">Join Our Pickle Family</h2>
        <p className="text-cream-100 mb-4">Experience the stories of tradition and discovery in every pickle jar.</p>
        <div className="flex justify-center gap-3">
          <a href="/shop" className="px-5 py-2 rounded-lg bg-pickle-600 hover:bg-pickle-700">Shop Our Pickles</a>
          <a href="/contact" className="px-5 py-2 rounded-lg border border-white/40 hover:bg-white hover:text-neutral-900">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default About;
