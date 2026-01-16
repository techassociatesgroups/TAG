'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <>
      <style jsx>{`
        .glass-card {
          position: relative;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(135deg, transparent 0%, rgba(14, 165, 233, 0.5) 50%, transparent 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .glass-card:hover::before {
          opacity: 1;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 165, 233, 0.3), 0 25px 30px -5px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className={`glass-card ${className}`}>
        {children}
      </div>
    </>
  );
}
