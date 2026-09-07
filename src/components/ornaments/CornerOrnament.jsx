import React from 'react';

export const CornerOrnament = ({ position = "top-left", className = "w-12 h-12 text-amber-700/40" }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || '';

  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={`${className} ${rotation}`}>
      <path d="M5 5H95V95" strokeDasharray="4 2" />
      <path d="M5 25C25 25 25 5 25 5" />
      <path d="M5 45C45 45 45 5 45 5" />
      <circle cx="15" cy="15" r="3" fill="currentColor" />
    </svg>
  );
};
