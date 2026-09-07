import React from 'react';

export const DecorativeDivider = ({ className = "w-48 h-6", color = "currentColor" }) => (
  <svg viewBox="0 0 200 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12 H80 M120 12 H200" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="85" cy="12" r="2" fill={color} opacity="0.7" />
    <circle cx="115" cy="12" r="2" fill={color} opacity="0.7" />
    {/* Center Diamond / Crown Motif */}
    <path d="M100 4 L107 12 L100 20 L93 12 Z" fill="none" stroke={color} strokeWidth="1.5" />
    <circle cx="100" cy="12" r="2" fill={color} />
  </svg>
);
