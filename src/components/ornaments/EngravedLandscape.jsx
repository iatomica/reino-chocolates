import React from 'react';

export const EngravedLandscape = ({ className = "w-full h-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 600 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Sun Rays Engraving */}
    <g opacity="0.25" stroke={color} strokeWidth="1">
      <line x1="300" y1="150" x2="50" y2="20" />
      <line x1="300" y1="150" x2="150" y2="10" />
      <line x1="300" y1="150" x2="300" y2="0" />
      <line x1="300" y1="150" x2="450" y2="10" />
      <line x1="300" y1="150" x2="550" y2="20" />
    </g>

    {/* Alpine Mountains Engraving */}
    <path d="M50 250 L180 120 L270 200 L380 90 L480 190 L550 250 Z" stroke={color} strokeWidth="2" fill="none" />
    <path d="M180 120 L205 160 L180 150 L155 160 Z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.4" />
    <path d="M380 90 L410 135 L380 125 L350 135 Z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.4" />

    {/* Pine Trees Silhouettes */}
    <path d="M80 250 L90 220 L100 250 Z M120 250 L130 210 L140 250 Z M460 250 L470 210 L480 250 Z" stroke={color} strokeWidth="1.5" fill="none" />

    {/* Lake Ripple Lines */}
    <g stroke={color} strokeWidth="1" opacity="0.4">
      <line x1="100" y1="265" x2="500" y2="265" strokeDasharray="12 6" />
      <line x1="140" y1="275" x2="460" y2="275" strokeDasharray="8 4" />
      <line x1="180" y1="285" x2="420" y2="285" strokeDasharray="16 8" />
    </g>
  </svg>
);
