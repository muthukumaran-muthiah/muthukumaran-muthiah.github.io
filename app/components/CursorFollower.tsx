'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export default function CursorFollower() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail particles
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prev) => [...prev, newTrail].slice(-15)); // Keep last 15 particles

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsPointer(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trailing particles (asteroid trail) */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          initial={{ 
            x: trail.x - 4, 
            y: trail.y - 4,
            scale: 1,
            opacity: 0.8,
          }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(168, 85, 247, ${0.8 - index * 0.05}) 0%, rgba(59, 130, 246, ${0.6 - index * 0.04}) 100%)`,
              boxShadow: `0 0 ${10 - index * 0.5}px rgba(168, 85, 247, ${0.6 - index * 0.04})`,
            }}
          />
        </motion.div>
      ))}

      {/* Main asteroid/cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isPointer ? 1.5 : 1,
            rotate: 360,
          }}
          transition={{
            scale: { duration: 0.2 },
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
          }}
        >
          {/* Core asteroid */}
          <div 
            className="w-6 h-6 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(168, 85, 247, 0.8) 30%, rgba(59, 130, 246, 0.6) 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Glowing ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full border-2"
            style={{
              borderColor: 'rgba(168, 85, 247, 0.4)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Particle debris around asteroid */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 25, 0],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 25, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient glow following cursor */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>
    </>
  );
}
