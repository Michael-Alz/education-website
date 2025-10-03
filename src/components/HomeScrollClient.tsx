'use client';

import { useEffect } from 'react';

export default function HomeScrollClient() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const { hash, pathname, search } = window.location;
    if (hash) {
      const elementId = hash.substring(1);
      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.setTimeout(() => {
            window.history.replaceState(null, '', pathname + search);
          }, 500);
        }
      }, 100);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  return null;
}

