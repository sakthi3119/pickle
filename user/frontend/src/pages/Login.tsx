import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAsAdmin, setLoginAsAdmin] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (loginAsAdmin) {
        // Redirect to admin app with mock token and user info (no second login)
        const adminUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ADMIN_APP_URL) || 'https://pickle-jg5v.vercel.app';
        const adminToken = 'dev-token-' + Date.now();
        const adminName = email.split('@')[0] || 'Admin';
        const params = new URLSearchParams({ token: adminToken, email, name: adminName, role: 'admin' });
        window.location.href = `${adminUrl}/login?${params.toString()}`;
        return;
      }

      // Mock user and token for user app
      const mockUser = {
        _id: String(Date.now()),
        name: email.split('@')[0] || 'User',
        email,
        role: 'user',
      };
      const mockToken = 'user-dev-token-' + Date.now();

      login(mockUser as any, mockToken);
      navigate('/');
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <button
              onClick={() => navigate('/signup')}
              className="font-medium text-pickle-600 hover:text-pickle-500"
            >
              create a new account
            </button>
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 text-pickle-600 border-gray-300 rounded"
                checked={loginAsAdmin}
                onChange={(e) => setLoginAsAdmin(e.target.checked)}
              />
              <span>Login as Admin</span>
            </label>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pickle-500 focus:border-pickle-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pickle-500 focus:border-pickle-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pickle-600 hover:bg-pickle-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pickle-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
