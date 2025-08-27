import React from 'react';

const DashboardPage = () => {
  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">
          🥒 Pickle Admin Dashboard
        </h1>
        
        <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 text-center">
          Welcome to the admin panel! This dashboard is now working.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
              📦 Total Orders
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-blue-600">89</p>
            <p className="text-xs lg:text-sm text-gray-500">+12% from last month</p>
          </div>
          
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
              🥒 Total Products
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-green-600">156</p>
            <p className="text-xs lg:text-sm text-gray-500">+8% from last month</p>
          </div>
          
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
              💰 Revenue
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-purple-600">$12,500</p>
            <p className="text-xs lg:text-sm text-gray-500">+15% from last month</p>
          </div>
        </div>
        
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
            🚀 Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3 lg:gap-4">
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 text-white border-none rounded-md text-sm lg:text-base hover:bg-blue-700 transition-colors">
              Add New Product
            </button>
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-green-600 text-white border-none rounded-md text-sm lg:text-base hover:bg-green-700 transition-colors">
              View Orders
            </button>
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-purple-600 text-white border-none rounded-md text-sm lg:text-base hover:bg-purple-700 transition-colors">
              Analytics
            </button>
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-orange-600 text-white border-none rounded-md text-sm lg:text-base hover:bg-orange-700 transition-colors">
              Messages
            </button>
          </div>
        </div>
        
        <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              📊 Recent Activity
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">New order #1234</p>
                  <p className="text-xs lg:text-sm text-gray-500">2 minutes ago</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">Product stock low</p>
                  <p className="text-xs lg:text-sm text-gray-500">1 hour ago</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Warning</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">New customer message</p>
                  <p className="text-xs lg:text-sm text-gray-500">3 hours ago</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Unread</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              🎯 Top Products
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    🥒
                  </div>
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-900">Classic Dill Pickles</p>
                    <p className="text-xs lg:text-sm text-gray-500">156 sold</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base font-semibold text-green-600">$2,450</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    🌶️
                  </div>
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-900">Spicy Pickles</p>
                    <p className="text-xs lg:text-sm text-gray-500">98 sold</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base font-semibold text-red-600">$1,890</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    🍯
                  </div>
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-900">Sweet Pickles</p>
                    <p className="text-xs lg:text-sm text-gray-500">87 sold</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base font-semibold text-yellow-600">$1,670</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

