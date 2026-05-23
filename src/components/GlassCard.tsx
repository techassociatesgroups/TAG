import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
