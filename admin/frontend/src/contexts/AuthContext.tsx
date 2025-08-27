import { createContext, useContext, useState, useEffect } from 'react';
import { isTokenValid, decodeToken } from '../utils/jwt';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      // Accept session from query params (when redirected from user app)
      try {
        const url = new URL(window.location.href);
        const tokenParam = url.searchParams.get('token');
        const emailParam = url.searchParams.get('email');
        const nameParam = url.searchParams.get('name');
        const roleParam = url.searchParams.get('role');
        if (tokenParam && emailParam) {
          const userData = {
            id: 'redir-' + Date.now(),
            name: nameParam || 'Admin User',
            email: emailParam,
            role: roleParam || 'admin',
          };
          localStorage.setItem('token', tokenParam);
          localStorage.setItem('user', JSON.stringify(userData));
          setToken(tokenParam);
          setUser(userData);
          // Clean query params from URL
          url.searchParams.delete('token');
          url.searchParams.delete('email');
          url.searchParams.delete('name');
          url.searchParams.delete('role');
          window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
        }
      } catch { }

      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (storedToken && isTokenValid(storedToken)) {
        setToken(storedToken);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } else {
        logout();
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('token', userToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const userAppUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_USER_APP_URL) || 'https://pickle-woad.vercel.app';
    // Hard redirect to user app home
    window.location.href = userAppUrl;
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    updateUser,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.role === 'admin',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

