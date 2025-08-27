import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white shadow-soft border border-neutral-100',
    elevated: 'bg-white shadow-medium hover:shadow-strong border border-neutral-100',
    outlined: 'bg-transparent border-2 border-neutral-200 hover:border-neutral-300',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-soft',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const clickableClass = onClick ? 'cursor-pointer hover:-translate-y-1' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    clickableClass,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
