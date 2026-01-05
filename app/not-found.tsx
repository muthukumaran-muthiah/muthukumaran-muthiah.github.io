'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const BackgroundAnimation = dynamic(() => import('./components/BackgroundAnimation'), { ssr: false });
const CursorFollower = dynamic(() => import('./components/CursorFollower'), { ssr: false });

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 flex items-center justify-center px-4">
      <BackgroundAnimation />
      <CursorFollower />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            damping: 15,
            stiffness: 100,
            duration: 0.8,
          }}
          className="mb-8"
        >
          {/* Animated 404 with floating elements */}
          <div className="relative">
            <motion.h1 
              className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(147, 51, 234, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            
            {/* Floating astronaut/rocket */}
            <motion.div
              className="absolute -top-10 -right-10 md:-right-20 text-6xl md:text-8xl"
              animate={{
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              🚀
            </motion.div>
            
            {/* Floating stars */}
            {[
              { left: '15%', top: '20%' },
              { left: '85%', top: '15%' },
              { left: '25%', top: '60%' },
              { left: '75%', top: '70%' },
              { left: '50%', top: '10%' },
              { left: '60%', top: '80%' },
            ].map((position, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl md:text-4xl"
                style={{
                  left: position.left,
                  top: position.top,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ⭐
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Houston, we have a problem! 🛸
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
            The page you're looking for seems to have drifted off into space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              🏠 Return to Home Base
            </motion.button>
          </Link>
          
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg shadow-lg border-2 border-purple-600"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#3b82f6',
              }}
              whileTap={{ scale: 0.95 }}
            >
              📬 Contact Mission Control
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick navigation links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Quick navigation:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Skills', path: '/skills', icon: '🚀' },
              { label: 'Experience', path: '/experience', icon: '💼' },
              { label: 'Domains', path: '/domains', icon: '🎯' },
            ].map((link, index) => (
              <Link key={link.path} href={link.path}>
                <motion.span
                  className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {link.icon} {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Animated planets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-6xl opacity-20"
            animate={{
              y: [0, 30, 0],
              rotate: 360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            🪐
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10 text-5xl opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: -360,
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            🌙
          </motion.div>
        </div>
      </div>
    </div>
  );
}
