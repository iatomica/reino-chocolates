import React from 'react';

export const Flourish = ({ text, className = "text-amber-700/80" }) => (
  <div className={`flex items-center justify-center gap-3 text-xs tracking-[0.2em] font-serif uppercase ${className}`}>
    <span className="opacity-70">☙</span>
    <span className="h-[1px] w-8 bg-current opacity-40" />
    <span>{text}</span>
    <span className="h-[1px] w-8 bg-current opacity-40" />
    <span className="opacity-70">❧</span>
  </div>
);
