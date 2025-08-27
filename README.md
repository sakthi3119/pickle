# Pickle Business Website

A complete e-commerce website for a pickle business with separate user and admin applications for enhanced security.

## Project Structure

```
pickle_new/
├── referance/          # Reference implementation and design
├── user/              # User-facing frontend application
│   └── frontend/      # React + Vite user application
└── admin/             # Admin dashboard application
    └── frontend/      # React + Vite admin application
```

## Applications

### 1. User Frontend (`user/frontend/`)
- **Port**: 3000
- **Purpose**: Customer-facing e-commerce website
- **Features**: Product browsing, shopping cart, checkout, recipes, about page
- **Security**: No admin access, customer-focused features only

### 2. Admin Frontend (`admin/frontend/`)
- **Port**: 3001
- **Purpose**: Business management dashboard
- **Features**: Product management, order processing, analytics, CRM
- **Security**: Separate hosting, JWT authentication, role-based access

### 3. Reference (`referance/`)
- **Purpose**: Source of truth for design and implementation
- **Contains**: Original components, styles, and configurations
- **Usage**: Reference for maintaining consistency across applications

## Security Benefits

- **Separation of Concerns**: User and admin applications are completely isolated
- **No Cross-Contamination**: Admin vulnerabilities cannot affect user experience
- **Independent Deployment**: Each application can be deployed separately
- **Access Control**: Admin routes are not accessible from user application
- **JWT Authentication**: Secure token-based authentication for admin access

## Getting Started

### User Application
```bash
cd user/frontend
npm install
npm run dev
# Access at http://localhost:3000
```

### Admin Application
```bash
cd admin/frontend
npm install
npm run dev
# Access at http://localhost:3001
```

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Authentication**: JWT
- **Icons**: React Icons

## Development Workflow

1. **User Features**: Develop in `user/frontend/`
2. **Admin Features**: Develop in `admin/frontend/`
3. **Design Updates**: Update `referance/` and sync to both applications
4. **Testing**: Test each application independently
5. **Deployment**: Deploy applications to separate hosting environments

## File Synchronization

When updating shared components or styles:
1. Update the reference implementation in `referance/`
2. Copy changes to both `user/frontend/` and `admin/frontend/`
3. Ensure consistency across all applications

## Production Deployment

- **User Application**: Deploy to customer-facing domain
- **Admin Application**: Deploy to secure admin domain
- **Backend API**: Deploy to separate API domain
- **Environment Variables**: Configure separately for each application

## Contributing

1. Follow the established project structure
2. Maintain separation between user and admin applications
3. Update reference implementation for shared changes
4. Test both applications independently
5. Document any new features or changes

