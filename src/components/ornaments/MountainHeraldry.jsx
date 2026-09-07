import React from 'react';

export const MountainHeraldry = ({ className = "w-16 h-16", color = "currentColor" }) => (
  <svg viewBox="0 0 160 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background Rays */}
    <g opacity="0.25" stroke={color} strokeWidth="1">
      <line x1="80" y1="60" x2="10" y2="10" />
      <line x1="80" y1="60" x2="40" y2="5" />
      <line x1="80" y1="60" x2="80" y2="0" />
      <line x1="80" y1="60" x2="120" y2="5" />
      <line x1="80" y1="60" x2="150" y2="10" />
    </g>

    {/* Triple Alpine Peaks 2D Flat Lines */}
    {/* Center Peak */}
    <polygon points="80,25 125,95 35,95" fill="none" stroke={color} strokeWidth="2.5" />
    {/* Snow Cap Center */}
    <polygon points="80,25 93,46 86,42 80,48 74,42 67,46" fill={color} opacity="0.8" />
    
    {/* Left Peak */}
    <polygon points="45,45 80,95 10,95" fill="none" stroke={color} strokeWidth="1.8" />
    <polygon points="45,45 54,58 48,55 45,60 41,55 35,58" fill={color} opacity="0.6" />

    {/* Right Peak */}
    <polygon points="115,45 150,95 80,95" fill="none" stroke={color} strokeWidth="1.8" />
    <polygon points="115,45 125,58 119,55 115,60 111,55 105,58" fill={color} opacity="0.6" />

    {/* Laurel Wreath Underneath */}
    <path d="M25 95 C 20 110, 45 115, 80 115 C 115 115, 140 110, 135 95" stroke={color} strokeWidth="2" strokeDasharray="4 2" fill="none" />
    
    {/* Center Crown Symbol */}
    <path d="M72 102 L75 97 L80 100 L85 97 L88 102 Z" fill={color} />
  </svg>
);
