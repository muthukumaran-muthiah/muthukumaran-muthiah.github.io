'use client';

import { motion } from 'framer-motion';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; label: string; icon: string }[];
}

export default function TabNavigation({ activeTab, setActiveTab, tabs }: TabNavigationProps) {
  return (
    <nav className="flex justify-center gap-2 mb-8 flex-wrap">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all relative ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </span>
        </motion.button>
      ))}
    </nav>
  );
}
