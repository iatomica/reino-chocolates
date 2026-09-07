import React from 'react';

export const CocoaIllustration = ({ className = "w-8 h-8 text-amber-800" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <path d="M50 10 C20 30 20 70 50 90 C80 70 80 30 50 10 Z" />
    <path d="M50 10 L50 90" strokeDasharray="3 3" />
    <path d="M35 25 C45 40 45 60 35 75" />
    <path d="M65 25 C55 40 55 60 65 75" />
  </svg>
);
