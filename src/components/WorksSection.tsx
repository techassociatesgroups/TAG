'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { flyingPosters } from '@/lib/data';

// Dynamically import FlyingPosters with ssr: false inside a client component
const FlyingPosters = dynamic(() => import('@/components/FlyingPosters'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
      Loading 3D Experience...
    </div>
  )
});

export function WorksSection() {
  return (
    <section id="works" className="relative w-full overflow-hidden min-h-[500px] md:h-[700px] flex flex-col items-center bg-black">
      <div className="absolute top-10 z-50 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Our Works</h2>
      </div>
      <FlyingPosters items={flyingPosters} />
    </section>
  );
}
