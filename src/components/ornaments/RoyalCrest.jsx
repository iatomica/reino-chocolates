import React from 'react';

export const RoyalCrest = ({ className = "w-12 h-12", color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer Shield Border */}
    <path d="M100 20 C140 20 170 35 170 80 C170 135 125 170 100 185 C75 170 30 135 30 80 C30 35 60 20 100 20 Z" stroke={color} strokeWidth="3" fill="none" />
    <path d="M100 26 C135 26 162 39 162 78 C162 128 120 160 100 175 C80 160 38 128 38 78 C38 39 65 26 100 26 Z" stroke={color} strokeWidth="1" strokeDasharray="3 3" fill="none" />

    {/* Alpine Mountain Silhouette Inside Shield */}
    <polygon points="100,55 135,115 65,115" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
    <polygon points="100,55 115,82 100,75 85,82" fill={color} opacity="0.4" />
    <polygon points="78,95 100,60 112,80 100,115" fill={color} opacity="0.2" />

    {/* Royal Crown Top */}
    <path d="M80 38 L88 48 L100 32 L112 48 L120 38 L116 52 L84 52 Z" fill={color} />
    <circle cx="100" cy="28" r="3" fill={color} />
    <circle cx="80" cy="34" r="2.5" fill={color} />
    <circle cx="120" cy="34" r="2.5" fill={color} />

    {/* Vintage Monogram / Star */}
    <path d="M100 120 L104 130 L115 130 L106 136 L109 146 L100 140 L91 146 L94 136 L85 130 L96 130 Z" fill={color} />

    {/* Flourish Wings Left & Right */}
    <path d="M25 75 C10 60 15 40 30 35 C40 32 45 42 40 52 C35 62 25 75 25 75 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M175 75 C190 60 185 40 170 35 C160 32 155 42 160 52 C165 62 175 75 175 75 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M20 95 C5 105 15 125 35 115 C45 110 40 98 32 98 C24 98 20 95 20 95 Z" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M180 95 C195 105 185 125 165 115 C155 110 160 98 168 98 C176 98 180 95 180 95 Z" stroke={color} strokeWidth="1.5" fill="none" />
  </svg>
);
