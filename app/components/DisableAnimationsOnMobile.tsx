'use client';

import { useEffect } from 'react';

export default function DisableAnimationsOnMobile() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      // Add class to html element
      document.documentElement.classList.add('mobile-no-animations');
      
      // Aggressively disable all animations
      const style = document.createElement('style');
      style.id = 'mobile-animation-override';
      style.innerHTML = `
        .mobile-no-animations * {
          animation: none !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition: none !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          transform: none !important;
        }
        
        .mobile-no-animations [class*="motion"] {
          animation: none !important;
          transition: none !important;
        }
        
        /* Keep only opacity transitions for basic interactions */
        .mobile-no-animations button:hover,
        .mobile-no-animations a:hover {
          transition: opacity 0.15s ease !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        const existingStyle = document.getElementById('mobile-animation-override');
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
        document.documentElement.classList.remove('mobile-no-animations');
      };
    }
  }, []);

  return null;
}
