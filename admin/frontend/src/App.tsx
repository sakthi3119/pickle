import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AdminLayout from './components/admin/AdminLayout';

// Admin pages
import DashboardPage from './pages/admin/DashboardPage';
import ProductsAdminPage from './pages/admin/ProductsAdminPage';
import AddProductPage from './pages/admin/AddProductPage';
import OrdersPage from './pages/admin/OrdersPage';
import MessagesPage from './pages/admin/MessagesPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import CouponManagementPage from './pages/admin/CouponManagementPage';
import CRMPage from './pages/admin/CRMPage';
import ProfilePage from './pages/admin/ProfilePage';
import LoginPage from './pages/admin/LoginPage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !isAdmin) {
    const userAppUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_USER_APP_URL) || 'http://localhost:3000';
    // Send unauthenticated attempts back to user app instead of admin login
    window.location.href = userAppUrl;
    return null;
  }

  return children;
};

const AdminApp = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="products" element={<ProductsAdminPage />} />
                    <Route path="add-product" element={<AddProductPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="messages" element={<MessagesPage />} />
                    <Route path="analytics" element={<AnalyticsPage />} />
                    <Route path="coupons" element={<CouponManagementPage />} />
                    <Route path="crm" element={<CRMPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route index element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AdminApp;

