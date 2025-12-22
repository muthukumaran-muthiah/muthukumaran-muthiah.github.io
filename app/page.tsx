'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabNavigation from './components/TabNavigation';
import AboutTab from './components/AboutTab';
import SkillsTab from './components/SkillsTab';
import ExperienceTab from './components/ExperienceTab';
import DomainsTab from './components/DomainsTab';
import ContactTab from './components/ContactTab';
import CursorFollower from './components/CursorFollower';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'domains', label: 'Domains', icon: '🎯' },
    { id: 'contact', label: 'Contact', icon: '📬' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'skills':
        return <SkillsTab />;
      case 'experience':
        return <ExperienceTab />;
      case 'domains':
        return <DomainsTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
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
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl z-50"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ⬆️
      </motion.button>
    </div>
  );
}
