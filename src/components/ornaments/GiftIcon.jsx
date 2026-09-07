import React from 'react';

export const GiftIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="48" height="34" rx="2" stroke={color} strokeWidth="2.5" />
    <rect x="5" y="16" width="54" height="10" rx="2" stroke={color} strokeWidth="2.5" />
    {/* Ribbon Line */}
    <line x1="32" y1="16" x2="32" y2="58" stroke={color} strokeWidth="3" />
    {/* Bow Loop */}
    <path d="M32 16 C 24 6, 12 10, 20 16 C 26 20, 32 16, 32 16 Z" stroke={color} strokeWidth="2" fill="none" />
    <path d="M32 16 C 40 6, 52 10, 44 16 C 38 20, 32 16, 32 16 Z" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);
