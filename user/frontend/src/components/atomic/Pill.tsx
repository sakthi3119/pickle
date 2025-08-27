import React from 'react';

export interface PillProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'pickle' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Pill: React.FC<PillProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full border';
  
  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-800 border-neutral-200',
    success: 'bg-success-100 text-success-800 border-success-200',
    warning: 'bg-warning-100 text-warning-800 border-warning-200',
    error: 'bg-error-100 text-error-800 border-error-200',
    info: 'bg-primary-100 text-primary-800 border-primary-200',
    pickle: 'bg-pickle-100 text-pickle-800 border-pickle-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Pill;
