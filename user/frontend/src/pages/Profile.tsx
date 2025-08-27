import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        
        {/* Personal Information */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pickle-500 focus:ring-pickle-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pickle-500 focus:ring-pickle-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
        </section>

        {/* Order History */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order History</h2>
          <div className="space-y-4">
            {/* Sample order - replace with actual order data */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Order #12345</p>
                  <p className="text-sm text-gray-500">Placed on Aug 23, 2025</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Delivered
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Saved Addresses */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Saved Addresses</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="font-medium">Home</p>
              <p className="text-sm text-gray-500">123 Pickle Street</p>
              <p className="text-sm text-gray-500">Cucumber City, PC 12345</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
