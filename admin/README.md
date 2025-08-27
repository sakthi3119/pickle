# Pickle Admin Dashboard

This is the separate admin application for the Pickle business website. It's hosted separately from the user frontend for security reasons.

## Features

- **Secure Admin Access**: Separate hosting from user application
- **Dashboard**: Overview of orders, products, and revenue
- **Product Management**: Add, edit, and manage products
- **Order Management**: View and process customer orders
- **Analytics**: Business insights and reporting
- **CRM**: Customer relationship management
- **Coupon Management**: Create and manage promotional codes

## Setup

1. **Install Dependencies**:
   ```bash
   cd admin/frontend
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Port Configuration

- **Admin Application**: Runs on port 3001
- **User Application**: Runs on port 3000
- **Backend API**: Runs on port 5000

## Security Features

- Separate hosting from user application
- JWT-based authentication
- Role-based access control
- Protected admin routes
- Development mode bypass for testing

## File Structure

```
admin/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── admin/
│   │   │       ├── AdminLayout.tsx
│   │   │       ├── Sidebar.tsx
│   │   │       ├── Topbar.tsx
│   │   │       └── StatCard.tsx
│   │   ├── pages/
│   │   │   └── admin/
│   │   │       └── DashboardPage.tsx
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx
│   │   ├── utils/
│   │   │   ├── api.ts
│   │   │   ├── jwt.ts
│   │   │   └── format.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── index.html
└── README.md
```

## Development Notes

- The admin application uses the same design system as the user application
- All admin components are self-contained
- Authentication is handled through JWT tokens
- The application automatically redirects to `/admin/dashboard` on root access
- Development mode provides automatic admin access for testing

## Access

- **Development**: Automatically logged in as admin
- **Production**: Requires valid JWT token with admin role
- **URL**: http://localhost:3001 (development)

