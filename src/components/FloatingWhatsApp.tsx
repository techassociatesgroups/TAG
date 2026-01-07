'use client';

import { useEffect, useState } from 'react';
import { PhoneCall } from 'lucide-react';

export function FloatingWhatsApp() {
  const href = 'https://wa.me/+916374846995';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg animate-pulse"
      aria-label="WhatsApp"
      title="Chat on WhatsApp"
    >
      <PhoneCall className="w-6 h-6" />
    </a>
  );
}
