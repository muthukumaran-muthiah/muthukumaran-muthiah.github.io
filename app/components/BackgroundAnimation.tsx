'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    setIsMobile(checkMobile);
    
    if (checkMobile) return; // Exit early on mobile
    
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
      if (!mobile) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render anything on mobile
  if (isMobile) return null;

  // Generate random asteroids
  const asteroids = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating asteroids/particles */}
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute"
          style={{
            left: `${asteroid.initialX}%`,
            top: `${asteroid.initialY}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 300 - 150, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: asteroid.duration,
            delay: asteroid.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: asteroid.size,
              height: asteroid.size,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(1dimensions.width + 100],
            y: [-50, dimensions.h ${0.1 + Math.random() * 0.1}) 50%, 
                transparent 70%)`,
              boxShadow: `0 0 ${asteroid.size}px rgba(168, 85, 247, 0.3)`,
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      ))}

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            x: [-100, window.innerWidth + 100],
            y: [-50, window.innerHeight / 2],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 4,
            repeat: Infinity,
            repeatDelay: 10,
            ease: 'easeOut',
          }}
        >
          <div
            className="relative"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.8) 50%, rgba(59, 130, 246, 0.8) 100%)',
              width: '100px',
              height: '2px',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)',
            }}
          />
        </motion.div>
      ))}

      {/* Orbiting particles */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 300;
        return (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.4) 100%)',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius,
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI) * radius,
                Math.sin(angle) * radius,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 20,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Pulsing cosmic clouds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, 
              rgba(168, 85, 247, ${0.1 + i * 0.02}) 0%, 
              rgba(59, 130, 246, ${0.08 + i * 0.02}) 40%, 
              transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Twinkling stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`twinkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
