# 🥒 Pickle Jar Admin Dashboard

A complete e-commerce admin dashboard for managing the Pickle Jar online store.

## 🚀 Quick Start

### 1. Start the Development Server
```bash
cd frontend
npm run dev
```

### 2. Access the Admin Dashboard
- **URL**: `http://localhost:5173/admin`
- **Login Credentials**:
  - Email: `admin@picklejar.com`
  - Password: `admin123`

### 3. Test Page
Visit `http://localhost:5173/admin/test` to see system status and test functions.

## 📋 Admin Features

### 🏠 Dashboard
- **Statistics Cards**: Revenue, orders, customers, conversion rate
- **Charts**: Sales trends, customer growth, product performance
- **Recent Activity**: Latest orders and system updates
- **Quick Stats**: Average order value, customer lifetime value

### 📦 Products Management
- **Product List**: View all products with search and filtering
- **Add Product**: Create new products with form validation
- **Edit Product**: Modify existing product details
- **Stock Management**: Track inventory levels
- **Product Status**: Active/inactive product management

### 📋 Orders Management
- **Order List**: View all customer orders
- **Order Details**: Complete order information with customer data
- **Status Updates**: Pending → Processing → Shipped → Delivered
- **Order Actions**: Accept, cancel, ship, and deliver orders

### 📊 Analytics
- **Sales Analytics**: Revenue trends and performance metrics
- **Customer Analytics**: Growth and behavior insights
- **Product Analytics**: Top-performing products
- **Category Distribution**: Sales by product category

### 🏷️ Coupon Management
- **Create Coupons**: Set discount percentages and usage limits
- **Coupon List**: View and manage all active coupons
- **Date Ranges**: Set start and end dates for promotions
- **Usage Tracking**: Monitor coupon usage and effectiveness

### 👥 CRM (Customer Relationship Management)
- **Customer List**: View all registered customers
- **Customer Details**: Complete customer profiles and history
- **Order History**: Track customer purchase patterns
- **Customer Status**: Active/inactive customer management

### 💬 Messages
- **Support Messages**: Handle customer inquiries and support requests
- **Message Status**: Track read/unread messages
- **Customer Communication**: Reply to customer messages
- **Message Management**: Mark as resolved and archive

### 👤 Profile Management
- **Account Settings**: Update admin profile information
- **Password Change**: Secure password update functionality
- **Account Information**: View account status and login history

## 🛠️ Technical Stack

### Frontend
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### Admin-Specific Libraries
- **React Hook Form** - Form handling and validation
- **Recharts** - Data visualization and charts
- **React Icons** - Icon library (Feather icons)

### Features
- **Responsive Design** - Works on desktop and mobile
- **Authentication** - Protected admin routes
- **Toast Notifications** - User feedback system
- **Data Persistence** - localStorage for demo data
- **Modal Dialogs** - Interactive overlays
- **Search & Filtering** - Advanced data management

## 📁 File Structure

```
frontend/src/
├── components/admin/
│   ├── AdminLayout.jsx      # Main admin layout wrapper
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── Topbar.jsx           # Top navigation bar
│   ├── StatCard.jsx         # Statistics display component
│   └── Toast.jsx            # Notification component
├── pages/admin/
│   ├── LoginPage.jsx        # Admin login
│   ├── DashboardPage.jsx    # Main dashboard
│   ├── ProductsAdminPage.jsx # Product management
│   ├── AddProductPage.jsx   # Add new products
│   ├── OrdersPage.jsx       # Order management
│   ├── AnalyticsPage.jsx    # Analytics and charts
│   ├── CouponManagementPage.jsx # Coupon management
│   ├── CRMPage.jsx          # Customer management
│   ├── MessagesPage.jsx     # Support messages
│   ├── ProfilePage.jsx      # Admin profile
│   └── TestPage.jsx         # System test page
├── contexts/
│   └── AuthContext.jsx      # Authentication context
└── styles/
    └── globals.css          # Global styles and admin theme
```

## 🎨 Design System

### Color Palette
- **Primary**: Pickle Green (`#22c55e`)
- **Secondary**: Amber (`#f59e0b`)
- **Neutral**: Gray scale (`#f8fafc` to `#0f172a`)
- **Status Colors**:
  - Success: Green (`#22c55e`)
  - Warning: Yellow (`#f59e0b`)
  - Error: Red (`#ef4444`)
  - Info: Blue (`#3b82f6`)

### Components
- **Cards**: White background with soft shadows
- **Buttons**: Primary, secondary, outline variants
- **Forms**: Consistent input styling with validation
- **Tables**: Clean data presentation
- **Modals**: Overlay dialogs for detailed views

## 🔧 Development

### Adding New Admin Pages
1. Create the page component in `pages/admin/`
2. Add the route to `App.tsx`
3. Add navigation item to `Sidebar.jsx`
4. Update this README

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure responsive design

### Data Management
- Use localStorage for demo data persistence
- Implement proper error handling
- Add loading states for better UX
- Use toast notifications for user feedback

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Notes

- This is a demo/admin dashboard with mock data
- All data is stored in localStorage for demonstration
- Authentication is simulated for development purposes
- Charts and analytics use sample data
- Image upload functionality is placeholder

## 🎯 Next Steps

For production deployment:
1. Connect to real backend API
2. Implement proper authentication
3. Add real database integration
4. Set up image upload service
5. Add email notifications
6. Implement user roles and permissions
7. Add audit logging
8. Set up monitoring and analytics

---

**Built with ❤️ for The Pickle Jar** 