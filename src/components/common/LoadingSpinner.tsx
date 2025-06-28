'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', text }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-2 border-surface-tertiary border-t-brand-primary rounded-full"></div>
      </div>
      {text && (
        <p className="text-text-secondary text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 