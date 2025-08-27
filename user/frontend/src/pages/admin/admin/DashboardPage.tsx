import React from 'react';

const DashboardPage = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f3f4f6', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          🥒 Pickle Admin Dashboard
        </h1>
        
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Welcome to the admin panel! This dashboard is now working.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', marginBottom: '10px' }}>
              📦 Total Orders
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>89</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>+12% from last month</p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', marginBottom: '10px' }}>
              🥒 Total Products
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#059669' }}>156</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>+8% from last month</p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', marginBottom: '10px' }}>
              💰 Revenue
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#7c3aed' }}>$12,500</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>+15% from last month</p>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>
            🚀 Quick Actions
          </h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }} onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'} 
               onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}>
              ➕ Add Product
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }} onMouseOver={(e) => e.target.style.backgroundColor = '#047857'} 
               onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}>
              📋 View Orders
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#7c3aed',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }} onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'} 
               onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}>
              📊 Analytics
            </button>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '30px', 
          textAlign: 'center', 
          padding: '20px',
          backgroundColor: '#fef3c7',
          borderRadius: '8px',
          border: '1px solid #f59e0b'
        }}>
          <p style={{ fontSize: '14px', color: '#92400e', margin: 0 }}>
            <strong>✅ Success!</strong> The admin dashboard is now working. You can navigate to other admin pages using the sidebar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 