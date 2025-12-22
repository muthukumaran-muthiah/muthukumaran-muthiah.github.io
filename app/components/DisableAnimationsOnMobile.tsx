'use client';

import { useEffect } from 'react';

export default function DisableAnimationsOnMobile() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      // Add class to disable animations
      document.documentElement.classList.add('motion-reduce');
      
      // Override motion preferences
      const style = document.createElement('style');
      style.innerHTML = `
        @media (max-width: 768px) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return null;
}
