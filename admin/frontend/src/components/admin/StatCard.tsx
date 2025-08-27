import React from 'react';

const StatCard = ({ title, value, change, changeType, icon: Icon }) => {
  const getChangeColor = (type) => {
    if (type === 'up') return 'text-green-600 bg-green-100';
    if (type === 'down') return 'text-red-600 bg-red-100';
    return 'text-gray-600 bg-gray-100';
  };

  const getChangeIcon = (type) => {
    if (type === 'up') return '↗';
    if (type === 'down') return '↘';
    return '→';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      
      {change && (
        <div className="mt-4 flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getChangeColor(changeType)}`}>
            {getChangeIcon(changeType)} {change}
          </span>
          <span className="text-xs text-gray-500 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;

