import React from 'react';

export const HorseIllustration = ({ className = "w-64 h-64 text-teal-800/20" }) => (
  <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    {/* Carriage Body Outline */}
    <path d="M 120 180 Q 150 120 220 120 Q 290 120 310 180 Q 290 230 220 230 Q 150 230 120 180 Z" />
    <path d="M 170 120 L 170 230" />
    <path d="M 260 120 L 260 230" />
    {/* Carriage Crown */}
    <path d="M 205 105 L 220 90 L 235 105 Z" fill="currentColor" />
    {/* Large Back Wheel */}
    <circle cx="140" cy="230" r="40" strokeWidth="2" />
    <circle cx="140" cy="230" r="5" fill="currentColor" />
    <line x1="140" y1="190" x2="140" y2="270" />
    <line x1="100" y1="230" x2="180" y2="230" />
    {/* Front Wheel */}
    <circle cx="290" cy="240" r="30" strokeWidth="2" />
    <circle cx="290" cy="240" r="4" fill="currentColor" />
    <line x1="290" y1="210" x2="290" y2="270" />
    <line x1="260" y1="240" x2="320" y2="240" />
    {/* Horse Silhouette Line */}
    <path d="M 50 190 Q 60 140 80 120 Q 100 110 110 130 Q 90 160 80 210 Q 60 210 50 190 Z" />
    <path d="M 75 120 Q 85 90 105 80 Q 115 90 100 110" />
  </svg>
);
