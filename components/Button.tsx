import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-blue hover:bg-blue-700 focus:ring-brand-blue",
    secondary: "border-transparent text-brand-blue bg-brand-yellow hover:bg-yellow-400 focus:ring-brand-yellow font-bold",
    outline: "border-brand-blue text-brand-blue bg-transparent hover:bg-blue-50 focus:ring-brand-blue"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};