'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        shadow-xl hover:shadow-2xl
        transition-all duration-300
        hover:bg-white/8 hover:border-white/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}
