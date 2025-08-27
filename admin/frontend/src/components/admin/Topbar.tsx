import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiBell, FiExternalLink, FiUser, FiLogOut, FiSettings, FiMenu } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const Topbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    const userAppUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_USER_APP_URL) || 'http://localhost:3000';
    window.location.href = userAppUrl;
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Left side - Mobile menu button and title */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiMenu className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Admin Dashboard</h2>
        </div>

        {/* Right side - Actions and user menu */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* View Store Button - Hidden on mobile */}
          <button
            onClick={() => {
              const userAppUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_USER_APP_URL) || 'https://pickle-woad.vercel.app';
              window.location.href = userAppUrl;
            }}
            className="hidden sm:flex btn-primary items-center gap-2"
          >
            <FiExternalLink className="w-4 h-4" />
            <span className="hidden lg:inline">View Store</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <FiBell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                    <p className="text-sm text-gray-900">New order received</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                    <p className="text-sm text-gray-900">Product stock low</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <p className="text-sm text-gray-900">New customer message</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 lg:space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {/* User info - Hidden on mobile */}
              <div className="hidden lg:block text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
                {import.meta.env.DEV && (
                  <p className="text-xs text-yellow-600 font-medium">DEV MODE</p>
                )}
              </div>

              {/* User avatar */}
              <div className="w-8 h-8 bg-pickle-100 rounded-full flex items-center justify-center">
                <FiUser className="w-4 h-4 text-pickle-600" />
              </div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {/* Mobile user info */}
                <div className="lg:hidden px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>

                <Link
                  to="/admin/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowUserMenu(false)}
                >
                  <FiSettings className="w-4 h-4 mr-3" />
                  Profile Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <FiLogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

