import React from 'react';

export const VintageFrame = ({ className = "w-full h-full", color = "currentColor" }) => (
  <svg viewBox="0 0 300 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="288" height="188" stroke={color} strokeWidth="1" opacity="0.4" />
    <rect x="12" y="12" width="276" height="176" stroke={color} strokeWidth="1.5" />
    {/* Corner Filigrees */}
    <path d="M12 28 C20 28, 28 20, 28 12" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M288 28 C280 28, 272 20, 272 12" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M12 172 C20 172, 28 180, 28 188" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M288 172 C280 172, 272 180, 272 188" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
);
