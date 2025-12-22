'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RocketScrollToTop() {
  const [showRocket, setShowRocket] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowRocket(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset launch animation after scroll
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {showRocket && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={handleLaunch}
            className="relative group cursor-pointer"
            style={{ pointerEvents: 'auto' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isLaunching ? {
              y: [0, -10, -30, -60, -100, -150],
              opacity: [1, 1, 1, 0.8, 0.5, 0],
              rotate: [0, -5, 5, -5, 5, 0],
            } : {
              y: [0, -5, 0],
              rotate: [0, -3, 3, -3, 0],
            }}
            transition={isLaunching ? {
              duration: 1,
              ease: "easeIn"
            } : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Rocket */}
            <div className="relative w-16 h-16 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={handleLaunch}
            >
              {/* Rocket emoji */}
              <span className="text-3xl">🚀</span>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Exhaust flames */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"
                  animate={{
                    height: [12, 20, 12],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Launch particles */}
            {isLaunching && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos((i * Math.PI) / 4) * 40,
                      y: Math.sin((i * Math.PI) / 4) * 40 + 20,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                ))}
              </>
            )}

            {/* Hover tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none"
            >
              🚀 Blast to top!
            </motion.div>
          </motion.button>

          {/* Smoke trail */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-6 h-6 bg-gray-400 rounded-full blur-md mx-auto"
                animate={{
                  y: [0, -20, -40, -60],
                  opacity: [0.6, 0.4, 0.2, 0],
                  scale: [0.5, 0.8, 1.2, 1.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
