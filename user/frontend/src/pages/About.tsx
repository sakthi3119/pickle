import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p>Learn about our pickle-making journey and commitment to quality.</p>
      </div>
    </div>
  );
};

export default About;
