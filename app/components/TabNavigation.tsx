'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface TabNavigationProps {
  activeTab: string;
  tabs: { id: string; label: string; icon: string; path: string }[];
}

export default function TabNavigation({ activeTab, tabs }: TabNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-2 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.path} scroll={false}>
            <motion.button
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
                  transition={{ type: 'spring' as const, bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </span>
            </motion.button>
          </Link>
        ))}
      </nav>

      {/* Mobile Dropdown Navigation */}
      <div className="md:hidden mb-8">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between"
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">{currentTab?.icon}</span>
            <span className="font-medium text-gray-900 dark:text-white">{currentTab?.label}</span>
          </span>
          <motion.svg
            className="w-5 h-5 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {tabs.map((tab) => (
              <Link key={tab.id} href={tab.path} scroll={false}>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
