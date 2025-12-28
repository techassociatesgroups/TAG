'use client';

import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    // Set cursor to default in CSS
    document.documentElement.style.cursor = 'auto';
    
    return () => {
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  // No custom cursor element rendered - use browser default
  return null;
}
