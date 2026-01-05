'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import TabNavigation from './TabNavigation';
import DisableAnimationsOnMobile from './DisableAnimationsOnMobile';
import RocketScrollToTop from './RocketScrollToTop';

const CursorFollower = dynamic(() => import('./CursorFollower'), { ssr: false });
const BackgroundAnimation = dynamic(() => import('./BackgroundAnimation'), { ssr: false });

const tabs = [
  { id: 'about', label: 'About', icon: '👋', path: '/' },
  { id: 'skills', label: 'Skills', icon: '🚀', path: '/skills' },
  { id: 'experience', label: 'Experience', icon: '💼', path: '/experience' },
  { id: 'domains', label: 'Domains', icon: '🎯', path: '/domains' },
  { id: 'contact', label: 'Contact', icon: '📬', path: '/contact' },
];

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Determine active tab from pathname
  const getActiveTab = () => {
    if (pathname === '/') return 'about';
    const path = pathname.split('/')[1];
    return path || 'about';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Disable animations on mobile */}
      <DisableAnimationsOnMobile />
      
      {/* Animated Background */}
      <BackgroundAnimation />
      
      {/* Custom Cursor Follower */}
      <CursorFollower />
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <TabNavigation activeTab={getActiveTab()} tabs={tabs} />
        </motion.div>

        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {children}
        </motion.div>
      </main>

      {/* Rocket Scroll to Top Button */}
      <RocketScrollToTop />
    </div>
  );
}
