import React from 'react';

export const Crown = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg viewBox="0 0 100 70" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L63 26L88 7L76 45H24L12 7L37 26L50 0Z" />
    <circle cx="50" cy="5" r="4" fill={color} />
    <circle cx="12" cy="12" r="4" fill={color} />
    <circle cx="88" cy="12" r="4" fill={color} />
    <rect x="20" y="48" width="60" height="6" rx="2" fill={color} />
    <circle cx="32" cy="51" r="2" fill="#FAF5EB" />
    <circle cx="50" cy="51" r="2" fill="#FAF5EB" />
    <circle cx="68" cy="51" r="2" fill="#FAF5EB" />
  </svg>
);
