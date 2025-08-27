import { useState } from 'react';
import { FiSearch, FiEye, FiX } from 'react-icons/fi';

const mockCustomers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@email.com', phone: '555-1234', status: 'Active', totalOrders: 5, totalSpent: 125.50 },
  { id: 2, name: 'Bob Smith', email: 'bob@email.com', phone: '555-5678', status: 'Active', totalOrders: 3, totalSpent: 89.99 },
  { id: 3, name: 'Charlie Lee', email: 'charlie@email.com', phone: '555-8765', status: 'Inactive', totalOrders: 1, totalSpent: 24.99 },
  { id: 4, name: 'Diana Wilson', email: 'diana@email.com', phone: '555-4321', status: 'Active', totalOrders: 8, totalSpent: 245.75 },
  { id: 5, name: 'Eve Brown', email: 'eve@email.com', phone: '555-9876', status: 'Active', totalOrders: 2, totalSpent: 67.50 },
];

const CRMPage = () => {
  const [customers, setCustomers] = useState(mockCustomers);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleDeactivate = (id) => {
    setCustomers(customers.map(c => c.id === id ? { ...c, status: 'Inactive' } : c));
  };

  const handleActivate = (id) => {
    setCustomers(customers.map(c => c.id === id ? { ...c, status: 'Active' } : c));
  };

  const handleView = (customer) => {
    setSelectedCustomer(customer);
    setModalOpen(true);
  };

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Relationship Management</h1>
        <p className="text-gray-600">Manage your customer database and relationships</p>
      </div>

      {/* Search */}
      <div className="card p-6 mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search customers by name, email, or phone..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pickle-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.map(customer => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.totalOrders} orders
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${customer.totalSpent.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleView(customer)}
                        className="text-blue-600 hover:text-blue-700"
                        title="View Details"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      {customer.status === 'Active' ? (
                        <button
                          onClick={() => handleDeactivate(customer.id)}
                          className="text-red-600 hover:text-red-700"
                          title="Deactivate"
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActivate(customer.id)}
                          className="text-green-600 hover:text-green-700"
                          title="Activate"
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Modal */}
      {modalOpen && selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
              title="Close"
            >
              <FiX className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-6 text-pickle-700">Customer Details</h2>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-gray-700">Name:</div>
                <div className="mb-2">{selectedCustomer.name}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Email:</div>
                <div className="mb-2">{selectedCustomer.email}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Phone:</div>
                <div className="mb-2">{selectedCustomer.phone}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Status:</div>
                <div className="mb-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    selectedCustomer.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedCustomer.status}
                  </span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Total Orders:</div>
                <div className="mb-2">{selectedCustomer.totalOrders}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Total Spent:</div>
                <div>${selectedCustomer.totalSpent.toFixed(2)}</div>
              </div>
            </div>
            <button 
              onClick={() => setModalOpen(false)} 
              className="w-full btn-secondary mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CRMPage;
